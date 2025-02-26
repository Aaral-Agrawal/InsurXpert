module InsurXpert::Insurance {
     use std::signer;

     
    
    struct Claim has key, store {
        policy_holder: address,
        amount: u64,
        status: bool,
        documents_hash: vector<u8>,  // Stores the hash of uploaded docs
        policy_valid: bool,          // Ensures it meets policy terms
    }

    public entry fun submit_claim(
        account: &signer,
        amount: u64,
        documents_hash: vector<u8>
    ) {
        let user = signer::address_of(account);
	 assert!(!exists<Claim>(user), 100); 

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

    public entry fun approve_claim(_account: &signer, policy_holder: address, policy_valid: bool)acquires Claim {
	 assert!(exists<Claim>(policy_holder), 102);
        let claim_ref = borrow_global_mut<Claim>(policy_holder);

	// Check if policy is valid before approving
           claim_ref.policy_valid = policy_valid;


        // Set policy validation status
         if (policy_valid) {
            claim_ref.status = true;
        }
    }
}
