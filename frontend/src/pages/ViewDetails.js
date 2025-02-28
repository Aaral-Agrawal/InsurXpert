// import React, { useState, useEffect } from "react";
// import { Container, Button, Table, Alert } from "react-bootstrap";
// import { useNavigate } from "react-router-dom";

// const ViewDetails = () => {
//   const navigate = useNavigate();
//   const [userDetails, setUserDetails] = useState(null);

//   useEffect(() => {
//     // Get stored user details
//     const storedDetails = JSON.parse(localStorage.getItem("userDetails"));
    
//     if (!storedDetails || Object.keys(storedDetails).length === 0) {
//       setUserDetails(null); // Save details to state
//     } else {
//       setUserDetails(storedDetails); // No details found
//     }
//   }, []);

//   return (
//     // <Container className="mt-5 text-center">
//     //   <h2 className="mb-4">User Details</h2>

//     //   {userDetails ? (
//     //     <Table striped bordered hover>
//     //       <thead>
//     //         <tr>
//     //           <th>Field</th>
//     //           <th>Value</th>
//     //         </tr>
//     //       </thead>
//     //       <tbody>
//     //         {Object.entries(userDetails).map(([key, value]) => (
//     //           <tr key={key}>
//     //             <td>{key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}</td>
//     //             <td>{typeof value === "string" ? value : "Uploaded File"}</td>
//     //           </tr>
//     //         ))}
//     //       </tbody>
//     //     </Table>
//     //   ) : (
//     //     <Alert variant="warning" className="mt-3">
//     //       ⚠️ First enter your details.
//     //     </Alert>
//     //   )}

//     //   <Button className="mt-3" onClick={() => navigate("/")}>Back to Home</Button>
//     // </Container>
//     <div>
//       <h2>View Details Page</h2>
//       <p>Details will be shown here.</p>
//     </div>
//   );
// };

// export default ViewDetails;


// import React, { useEffect } from "react";

// const ViewDetails = () => {
//   const storedDetails = localStorage.getItem("patientDetails");

//   useEffect(() => {
//     console.log("✅ ViewDetails component loaded!");
//     console.log("📌 Stored Data:", storedDetails);
//   }, []);

//   return (
//     <div>
//       <h2>View Details Page</h2>
//       {storedDetails ? (
//         <pre>{JSON.stringify(JSON.parse(storedDetails), null, 2)}</pre>
//       ) : (
//         <p>No details available</p>
//       )}
//     </div>
//   );
// };

// export default ViewDetails;

import React from "react";

const ViewDetails = () => {
  return (
    <div>
      <h2>Details Page</h2>
      <p>This is the View Details page!</p>
    </div>
  );
};

export default ViewDetails;
