import { motion } from "framer-motion";

function Home() {
  return (
    <div className="container text-center mt-5">
      {/* Fade-in Title */}
      <motion.h1 
        className="display-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to InsurXpert
      </motion.h1>

      {/* Animated Button */}
      <motion.button 
        className="btn btn-primary mt-3"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>

      {/* AOS Animation Example */}
      <div data-aos="fade-up" className="mt-5">
        <h2>Fast & Transparent Insurance Claims</h2>
        <p>Experience a seamless insurance process with AI & Blockchain.</p>
      </div>
    </div>
  );
}

export default Home;

