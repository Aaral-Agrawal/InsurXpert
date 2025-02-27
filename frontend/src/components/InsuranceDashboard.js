// import React from "react";
// import { useLocation } from "react-router-dom";
// import { Card, Button } from "react-bootstrap";

// const InsuranceDashboard = () => {
//   const location = useLocation();
//   const claimData = location.state || {}; // Receiving data from LiveDemo

//   if (!claimData) {
//     return (
//       <div className="container mt-5 text-center">
//         <h2>Insurance Dashboard</h2>
//         <p>No claim data available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Insurance Dashboard</h2>
//       <Card className="p-3">
//         <h4>Patient Details</h4>
//         <p><strong>Name:</strong> {claimData.name}</p>
//         <p><strong>Age:</strong> {claimData.age}</p>
//         <p><strong>Medical Condition:</strong> {claimData.condition}</p>
//         <p><strong>Claim Amount:</strong> ${claimData.claimAmount}</p>
//         <p><strong>Hospital:</strong> {claimData.hospital}</p>
//         <p><strong>Insurance ID:</strong> {claimData.insuranceId}</p>

//         {/* Display uploaded file */}
//         {claimData.fileURL && (
//   <div className="mt-3">
//     <h5>Uploaded Medical Record</h5>
//     {claimData.fileURL.match(/\.(jpeg|jpg|png|gif)$/) ? (
//       <img src={claimData.fileURL} alt="Medical Record" className="img-fluid" />
//     ) : (
//       <a href={claimData.fileURL} target="_blank" rel="noopener noreferrer">
//         View Uploaded File
//       </a>
//     )}
//   </div>
// )}

//             {/* {claimData.file.type.startsWith("image/") ? (
//               <img src={claimData.fileURL} alt="Medical Record" className="img-fluid" />
//             ) : (
//               <a href={claimData.fileURL} target="_blank" rel="noopener noreferrer">
//                 View Uploaded File
//               </a>
//             )}
//           </div>
//         )} */}

//         {/* Approve / Reject Buttons */}
//         <div className="mt-3">
//           <Button variant="success" className="me-2">Approve Claim</Button>
//           <Button variant="danger">Reject Claim</Button>
//         </div>
//       </Card>
//     </div>
//   );
// };

// export default InsuranceDashboard;

import React, { useEffect, useState } from "react";

const InsuranceDashboard = () => {
  const [claimData, setClaimData] = useState(null);

  useEffect(() => {
    // 🔹 Retrieve claim data from localStorage
    const storedData = localStorage.getItem("claimData");
    if (storedData) {
      setClaimData(JSON.parse(storedData));
    }
  }, []);

  if (!claimData) {
    return <h2>No claim data available.</h2>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-primary">Insurance Dashboard</h2>
      <div className="card p-4 shadow">
        <h4>Claim Details</h4>
        <p><strong>Name:</strong> {claimData.name}</p>
        <p><strong>Age:</strong> {claimData.age}</p>
        <p><strong>Medical Condition:</strong> {claimData.medicalCondition}</p>
        <p><strong>Claim Amount:</strong> ${claimData.claimAmount}</p>
        <p><strong>Hospital:</strong> {claimData.hospital}</p>
        <p><strong>Insurance ID:</strong> {claimData.insuranceId}</p>

        {claimData.fileURL && (
          <div>
            <p><strong>Uploaded File:</strong></p>
            <iframe
              src={claimData.fileURL}
              title="Medical Record"
              width="100%"
              height="400px"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default InsuranceDashboard;
