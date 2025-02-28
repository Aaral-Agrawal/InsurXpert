 module InsurXpert::Insurance {
     use std::signer;
	// Import Aptos Coin module for fund transfers
	use aptos_framework::coin;
	use aptos_framework::aptos_coin;


    struct Admin has key, store {
    	admin_address: address,
    }

    public entry fun initialize_admin(account: &signer) {
        let admin = Admin {
            admin_address: signer::address_of(account),
        };
    	move_to(account, admin);
    }


    struct ClaimSubmitted has key, store {
        policy_holder: address,
        amount: u64,
    }

    struct Policy has key, store {
        policy_holder: address,
        premium: u64,
        coverage_amount: u64,
        is_active: bool,
    }

    struct RejectedClaim has key {
        policy_holder: address,
        amount: u64,
        reason: u64, // Example: 101 = Fraud, 102 = Incomplete Docs, etc.
    }


    
    struct Claim has key, store {
        policy_holder: address,
        amount: u64,
        status: bool,
        documents_hash: vector<u8>,  // Stores the hash of uploaded docs
        policy_valid: bool,          // Ensures it meets policy terms
    }

	public entry fun deposit(account: &signer, amount: u64) {
        let contract_address: address = @0xbc67c6ba329ef528a1a95a501042cac6094bf3e1fa68f75f44bbfbf7ac131027;
    
        coin::transfer<aptos_coin::AptosCoin>(account, contract_address, amount);
         
    }


    public entry fun submit_claim(      
        // User must have a policy
        account: &signer,
        amount: u64,
        documents_hash: vector<u8>
    ) acquires Policy {
		let user = signer::address_of(account);

       
        
         
		// If no policy exists, create a new one with default values
    	if (!exists<Policy>(user)) {
            let new_policy = Policy {
            policy_holder: user,
            premium: 500, // Default premium amount
            coverage_amount: 10000, // Default coverage
            is_active: true,
            }; 
        	move_to(account, new_policy);
        }; 

    	let policy = borrow_global<Policy>(user);
		
		// Ensure the policy is active
		assert!(policy.is_active, 107);

		
    	// Ensure claim amount does not exceed coverage
    	assert!(amount <= policy.coverage_amount, 108);

		
        // Prevent multiple claims at once
        assert!(!exists<Claim>(user), 109); 

        // Basic validation: claim amount must be greater than 0
        assert!(amount > 0, 100);  

        let claim = Claim {
            policy_holder: user,
            amount: amount,
            status: false,
            documents_hash: documents_hash,
            policy_valid: false, // By default, it's not validated
        };

        move_to(account, claim);
    }

    public entry fun approve_claim(_account: &signer, policy_holder: address, policy_valid: bool)acquires Claim , Admin {
	    let admin = borrow_global<Admin>(signer::address_of(_account));
	    assert!(signer::address_of(_account) == admin.admin_address, 201); // Only 	Admin can approve

	    assert!(exists<Claim>(policy_holder), 102);
        let claim_ref = borrow_global_mut<Claim>(policy_holder);

	    // Check if policy is valid before approving
        claim_ref.policy_valid = policy_valid;


        // Set policy validation status
        if (policy_valid) {
            claim_ref.status = true;
        }
    }

    public fun get_policy_data(policy_holder: address): Claim acquires Claim {
        assert!(!exists<Claim>(policy_holder), 103);
        let claim = borrow_global<Claim>(policy_holder);
        Claim {
            policy_holder: claim.policy_holder,
            amount: claim.amount,
            status: claim.status,
            documents_hash: claim.documents_hash,
            policy_valid: claim.policy_valid,
        }
    }

    public entry fun withdraw_claim(account: &signer) acquires Claim {
        let user = signer::address_of(account);

        // Ensure the claim exists
        assert!(exists<Claim>(user), 104);
        let claim = borrow_global_mut<Claim>(user); 


        // Check if the claim is approved before withdrawing
        assert!(claim.status, 105);

        let contract_address: address = @0xbc67c6ba329ef528a1a95a501042cac6094bf3e1fa68f75f44bbfbf7ac131027;

        // Get the contract's balance
        let contract_balance = coin::balance<aptos_coin::AptosCoin>(contract_address);

	    // Ensure there are enough funds to pay the claim
        assert!(contract_balance >= claim.amount, 106); // Error 106 = Insufficient funds

	  
        // Transfer funds from the contract to the policyholder
        coin::transfer<aptos_coin::AptosCoin>(account, user, claim.amount);

        // Mark claim as settled
        claim.amount = 0;
        claim.status = false;  // Mark claim as settled
    }

     public entry fun reject_claim(account: &signer, policy_holder: address, reason: u64) acquires Claim, Admin {
    let admin = borrow_global<Admin>(signer::address_of(account));

    // Ensure only Admin can reject
    assert!(signer::address_of(account) == admin.admin_address, 202);
    assert!(exists<Claim>(policy_holder), 106);

      // Move the claim from storage and fully deconstruct it
    let Claim { policy_holder: holder, amount, status, documents_hash, policy_valid } = move_from<Claim>(policy_holder);

    

    // Store rejected claim details
    let rejected_claim = RejectedClaim { 
        policy_holder: policy_holder, 
        amount: amount,   
        reason: reason  
    };

    move_to(account, rejected_claim);
    }

}

