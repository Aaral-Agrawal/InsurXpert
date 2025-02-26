 module MyMoveProject::HelloBlockchain {
    use std::string; 
    use std::signer;
	use std::debug;

    public entry fun hello(account: &signer) {
        debug::print(&string::utf8(b"Hello, Aptos Blockchain!"));
    }
}

