import React from "react";

function Navbar() {
    return (
        <div>
            {/* Top Links Section */}
            <div style={{
                display: "flex",
                justifyContent: "flex-end",
                backgroundColor: "#002244",
                padding: "5px 20px",
                color: "white",
                fontSize: "14px"
            }}>
                <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Contact Us</a>
                <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Help</a>
                <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>Login</a>
                <a href="#" style={{ margin: "0 10px", color: "white", textDecoration: "none" }}>About</a>
            </div>

            {/* Navbar */}
            <nav style={{ 
                display: "flex", 
                justifyContent: "space-between", 
                alignItems: "center", 
                backgroundColor: "#003366", 
                padding: "10px 20px"
            }}>
                <div style={{ fontSize: "24px", fontWeight: "bold", color: "white" }}>InsurXpert</div>
                <button style={{ backgroundColor: "#007bff", color: "white", padding: "5px 10px", border: "none", borderRadius: "5px" }}>
                    View Details
                </button>
            </nav>
        </div>
    );
}

export default Navbar;
