 module InsurXpert::Insurance {
    use std::signer;
	use aptos_framework::coin;
	use aptos_framework::aptos_coin;
    use std::vector;
    use std::table;
    use aptos_framework::event;
    use aptos_framework::guid;



    struct Admin has key, store {
    	admin_address:address,
        event_handle: event::EventHandle<ClaimRejectedEvent>,
    }

    struct InsuranceCompany has key, store {
        policies: table::Table<address, Policy>,
    }

    struct ClaimRejectedEvent has store, drop {
        policy_holder: address,
        reason: u64,
    }

    struct PolicyNotFoundEvent has store, drop {
        user: address,
    }

    public entry fun initialize_admin(account: &signer) {
        let admin = Admin {
            admin_address: signer::address_of(account),
            event_handle: event::new_event_handle<ClaimRejectedEvent>(account,guid::create(account)),
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
        documents_hashes: vector<vector<u8>>,
         claims: table::Table<u64, Claim>,
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

    public fun emit_claim_rejected_event(policy_holder: address, reason: u64) acquires Admin {
        let admin = borrow_global_mut<Admin>(@0xa7cea1a496a47b3b5d76818a01dd7a519526fc6190b5407f7d41335727c69f8a);
        event::emit_event(&mut admin.event_handle, ClaimRejectedEvent { policy_holder, reason });
    }

    public fun emit_policy_not_found_event(user: address) acquires Admin {
        let admin = borrow_global_mut<Admin>(@0xa7cea1a496a47b3b5d76818a01dd7a519526fc6190b5407f7d41335727c69f8a);
        let event = PolicyNotFoundEvent { user };
        event::emit_event(&mut admin.event_handle, ClaimRejectedEvent { policy_holder, reason });

    }

	public entry fun deposit(account: &signer, amount: u64) {
        let contract_address: address = @0xbc67c6ba329ef528a1a95a501042cac6094bf3e1fa68f75f44bbfbf7ac131027;
    
        coin::transfer<aptos_coin::AptosCoin>(account, contract_address, amount);
         
    }

    public entry fun initialize_demo_companies(account: &signer) acquires InsuranceCompany {
    let company1_address = @0xa9a178f1185ef0182642b165d2af5ac55b931f15aab3f1c1a8bdc2cb4e048e0c; 
    let company2_address = @0xbc9761f4588ceec788e1e10719f311f9c351103210e4e5640440ae444292c1a4; 

    // Ensure these companies are not already registered
    if (!exists<InsuranceCompany>(company1_address)) {
        let company1 = InsuranceCompany {
            policies: table::new<address, Policy>(),
        };
        move_to(account, company1);
    };

    if (!exists<InsuranceCompany>(company2_address)) {
        let company2 = InsuranceCompany {
            policies: table::new<address, Policy>(),
        };
        move_to(account, company2);
    }
}



    public entry fun submit_claim(      
        // User must have a policy
        account: &signer,
        amount: u64,
        documents_hash: vector<u8>
    ) acquires Policy,Claim {
		let user = signer::address_of(account);

		if (!exists<Policy>(user)) {
            emit_policy_not_found_event(user);
            return;
        };

        
        assert!(!table::contains(&borrow_global<Policy>(user).claims, 1), 109);


    	let policy = borrow_global<Policy>(user);
		
		// Ensure the policy is active
		assert!(policy.is_active, 107);

		
    	// Ensure claim amount does not exceed coverage
    	assert!(amount <= policy.coverage_amount, 108);


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

    public entry fun register_policy(
        insurer: &signer, 
        user: address, 
        policy_id: u64, 
        coverage: u64
    ) acquires InsuranceCompany {
            let insurer_address = signer::address_of(insurer);

            // Ensure insurer sirf demo companies me se koi ek ho
            assert!(insurer_address == @0xa9a178f1185ef0182642b165d2af5ac55b931f15aab3f1c1a8bdc2cb4e048e0c 
                || insurer_address == @0xbc9761f4588ceec788e1e10719f311f9c351103210e4e5640440ae444292c1a4, 301);

            let insurance_company = borrow_global_mut<InsuranceCompany>(insurer_address);
            assert!(!table::contains(&insurance_company.policies, user), 201);

            let policy = Policy {
                policy_holder: user,
                premium: 100, 
                documents_hashes: vector::empty(),
                coverage_amount: coverage,
                is_active: true,
                claims: table::new<u64, Claim>(),
            };

            table::add(&mut insurance_company.policies, user, policy);
    }

    public entry fun approve_claim(
        insurer: &signer,
        policy_holder: address,
        policy_valid: bool
    ) acquires Claim, InsuranceCompany {
        let insurer_address = signer::address_of(insurer);
        // Ensure sirf demo insurance company approve kare
        assert!(insurer_address == @0xa9a178f1185ef0182642b165d2af5ac55b931f15aab3f1c1a8bdc2cb4e048e0c 
        || insurer_address == @0xbc9761f4588ceec788e1e10719f311f9c351103210e4e5640440ae444292c1a4, 302);


        let insurance_company = borrow_global_mut<InsuranceCompany>(insurer_address);
        assert!(table::contains(&insurance_company.policies, policy_holder), 108);
        
        let claim_ref = borrow_global_mut<Claim>(policy_holder);
        claim_ref.policy_valid = policy_valid;
        
        if (policy_valid) {
            claim_ref.status = true;
        }
    }

    public entry fun verify_documents(
        insurer: &signer,
        user: address,
        doc_hash: vector<u8>
    ) acquires InsuranceCompany {
        let insurance_company = borrow_global<InsuranceCompany>(signer::address_of(insurer));
        if (!table::contains(&insurance_company.policies, user)) {
            emit_policy_not_found_event(user);
            return;
        };

        let policy = table::borrow(&insurance_company.policies, user);
        if (!vector::contains(&policy.documents_hashes, &doc_hash)) {
            emit_claim_rejected_event(user, 102);
        }
    }

    public fun get_policy_data(policy_holder: address): Claim acquires Claim {
        assert!(exists<Policy>(policy_holder), 103);
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

    public entry fun reject_claim(insurer: &signer, policy_holder: address, reason: u64) acquires Claim, InsuranceCompany {
         let insurer_address = signer::address_of(insurer);
    
        // Ensure sirf demo companies reject karein
        assert!(insurer_address == @0x123 || insurer_address == @0x456, 303);
        
        let insurance_company = borrow_global<InsuranceCompany>(insurer_address);
        assert!(table::contains(&insurance_company.policies, policy_holder), 202);

        assert!(exists<Claim>(policy_holder), 106); 

        // Move the claim from storage and fully deconstruct it
        let Claim { policy_holder: holder, amount, status, documents_hash, policy_valid } = move_from<Claim>(policy_holder);

        // Store rejected claim details
        let rejected_claim = RejectedClaim { 
            policy_holder: policy_holder, 
            amount: amount,   
            reason: reason  
        };

        move_to(insurer, rejected_claim);
        emit_claim_rejected_event(policy_holder, reason);
    }

    public fun get_policy(user: address): Policy acquires InsuranceCompany {
        if (exists<InsuranceCompany>(@0xa9a178f1185ef0182642b165d2af5ac55b931f15aab3f1c1a8bdc2cb4e048e0c)) {
            let insurance_company = borrow_global<InsuranceCompany>(@0xa9a178f1185ef0182642b165d2af5ac55b931f15aab3f1c1a8bdc2cb4e048e0c);
            if (table::contains(&insurance_company.policies, user)) {
                return *table::borrow(&insurance_company.policies, user);
            }
        };

        if (exists<InsuranceCompany>(@0xbc9761f4588ceec788e1e10719f311f9c351103210e4e5640440ae444292c1a4)) {
            let insurance_company = borrow_global<InsuranceCompany>(@0xbc9761f4588ceec788e1e10719f311f9c351103210e4e5640440ae444292c1a4);
            if (table::contains(&insurance_company.policies, user)) {
                return  *table::borrow(&insurance_company.policies, user);
            }
        };

        return Policy {
            policy_holder: @0x0,
            premium: 0,
            coverage_amount: 0,
            is_active: false,
            documents_hashes: vector::empty(),
            claims: table::new<u64, Claim>(@0x0),
        }; 
    }



}

