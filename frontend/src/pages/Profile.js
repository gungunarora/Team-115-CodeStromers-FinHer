// import { useState } from "react";
// import "./Profile.css";

// export default function ProfilePage() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "123-456-7890",
//     balance: "$12,450.00",
//   });

//   const [transactions] = useState([
//     { id: 1, type: "Deposit", amount: "$500.00", date: "2025-03-01" },
//     { id: 2, type: "Withdrawal", amount: "$200.00", date: "2025-03-02" },
//     { id: 3, type: "Transfer", amount: "$1,000.00", date: "2025-03-03" },
//   ]);

//   const handleEdit = () => setIsEditing(!isEditing);

//   return (
//     <div className="profile-container">
//       {/* Profile Info */}
//       <div className="profile-card">
//         <div className="profile-header">
//           <h2>Profile Information</h2>
//           <button onClick={handleEdit} className="edit-button">
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>
//         <div className="profile-fields">
//           <label>Name:</label>
//           <input type="text" value={user.name} disabled={!isEditing} onChange={(e) => setUser({ ...user, name: e.target.value })} />
//           <label>Email:</label>
//           <input type="email" value={user.email} disabled={!isEditing} onChange={(e) => setUser({ ...user, email: e.target.value })} />
//           <label>Phone:</label>
//           <input type="text" value={user.phone} disabled={!isEditing} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
//           <label>Account Balance:</label>
//           <input type="text" value={user.balance} disabled className="disabled-field" />
//         </div>
//       </div>

//       {/* Transaction History */}
//       <div className="transaction-card">
//         <h2>Transaction History</h2>
//         <table className="transaction-table">
//           <thead>
//             <tr>
//               <th>Date</th>
//               <th>Type</th>
//               <th>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {transactions.map((tx) => (
//               <tr key={tx.id}>
//                 <td>{tx.date}</td>
//                 <td>{tx.type}</td>
//                 <td className="amount">{tx.amount}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import "./Profile.css";

// import profile from "../assets/female.jpg";

// export default function ProfilePage() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "123-456-7890",
//     balance: "$12,450.00",
//     totalBalance: "$20,000.00",
//   });

//   const handleEdit = () => setIsEditing(!isEditing);

//   return (
//     <div className="profile-container">
//       {/* Profile Info */}
//       <div className="profile-card">
//         <div className="profile-header">
//           <h2>Profile Information</h2>
//           <button onClick={handleEdit} className="edit-button">
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>
//         <img src={profile} alt="Profile" className="profile-image" />
//         <div className="profile-fields">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={user.name}
//             disabled={!isEditing}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           />
//           <label>Email:</label>
//           <input
//             type="email"
//             value={user.email}
//             disabled={!isEditing}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//           <label>Phone:</label>
//           <input
//             type="text"
//             value={user.phone}
//             disabled={!isEditing}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//           />
//           <label>Account Balance:</label>
//           <input type="text" value={user.balance} disabled className="disabled-field" />
//           <label>Total Balance:</label>
//           <input type="text" value={user.totalBalance} disabled className="disabled-field" />
//         </div>
//         <div className="profile-actions">
//           <button className="action-button">Transactions</button>
//           <button className="action-button">Budgeting</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { useState } from "react";
// import { Canvas } from "@react-three/fiber";
// import { Environment, OrbitControls } from "@react-three/drei";
// import "./Profile.css";
// import profile from "../assets/female.jpg";

// export default function ProfilePage() {
//   const [isEditing, setIsEditing] = useState(false);
//   const [user, setUser] = useState({
//     name: "John Doe",
//     email: "johndoe@example.com",
//     phone: "123-456-7890",
//     balance: "$12,450.00",
//     totalBalance: "$20,000.00",
//   });

//   const handleEdit = () => setIsEditing(!isEditing);

//   return (
//     <div className="profile-container">
//       {/* Three.js HDR Environment */}
//       <Canvas className="threejs-canvas">
//         <OrbitControls />
//         <Environment files="https://threejs.org/examples/textures/equirectangular/royal_esplanade_1k.hdr" background />
//       </Canvas>

//       {/* Profile Info */}
//       <div className="profile-card">
//         <div className="profile-header">
//           <h2>Profile Information</h2>
//           <button onClick={handleEdit} className="edit-button">
//             {isEditing ? "Save" : "Edit"}
//           </button>
//         </div>
//         <img src={profile} alt="Profile" className="profile-image" />
//         <div className="profile-fields">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={user.name}
//             disabled={!isEditing}
//             onChange={(e) => setUser({ ...user, name: e.target.value })}
//           />
//           <label>Email:</label>
//           <input
//             type="email"
//             value={user.email}
//             disabled={!isEditing}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//           />
//           <label>Phone:</label>
//           <input
//             type="text"
//             value={user.phone}
//             disabled={!isEditing}
//             onChange={(e) => setUser({ ...user, phone: e.target.value })}
//           />
//           <label>Account Balance:</label>
//           <input type="text" value={user.balance} disabled className="disabled-field" />
//           <label>Total Balance:</label>
//           <input type="text" value={user.totalBalance} disabled className="disabled-field" />
//         </div>
//         <div className="profile-actions">
//           <button className="action-button">Transactions</button>
//           <button className="action-button">Budgeting</button>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./Profile.css";
import profile from "../assets/female.jpg";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  // const [isEditing, setIsEditing] = useState(false);
  // const [user, setUser] = useState({
  //   name: "John Doe",
  //   email: "johndoe@example.com",
  //   phone: "123-456-7890",
  //   balance: "$12,450.00",
  //   totalBalance: "$20,000.00",
  // });


  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // const handleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/auth/profile", {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        });
        setUser(response.data);
      } catch (err) {
        setError("Failed to fetch user data.");
      }
    };

    fetchUserProfile();
  }, []);

  return (
    // <div
    //   className="profile-container"
    //   style={{ backgroundColor: "transparent" }}
    // >
    //   {/* Profile Info */}
    //   <div className="profile-card ">
    //     <div className="profile-header font-setting">
    //       <h2>My Profile</h2>
    //       <button onClick={handleEdit} className="edit-button">
    //         {isEditing ? "Save" : "Edit"}
    //       </button>
    //     </div>
    //     <img src={profile} alt="Profile" className="profile-image" />
    //     <div className="profile-fields">
    //       <label>Name:</label>
    //       <input
    //         type="text"
    //         value={user.name}
    //         disabled={!isEditing}
    //         onChange={(e) => setUser({ ...user, name: e.target.value })}
    //       />

    //       <label>Email:</label>
    //       <input
    //         type="email"
    //         value={user.email}
    //         disabled={!isEditing}
    //         onChange={(e) => setUser({ ...user, email: e.target.value })}
    //       />
    //       <label>Phone:</label>
    //       <input
    //         type="text"
    //         value={user.phone}
    //         disabled={!isEditing}
    //         onChange={(e) => setUser({ ...user, phone: e.target.value })}
    //       />
    //       <label>Account Balance:</label>
    //       <input
    //         type="text"
    //         value={user.balance}
    //         disabled
    //         className="disabled-field"
    //       />
    //       <label>Total Balance:</label>
    //       <input
    //         type="text"
    //         value={user.totalBalance}
    //         disabled
    //         className="disabled-field"
    //       />
    //     </div>
    //   </div>
    

    //   <div className="profile-actions">
    //     <button className="action-button transactions ">Transactions</button>
    //     <button className="action-button transactions2">Budgeting</button>
    //   </div>
    // </div>
  
    <Container className="main-container d-flex justify-content-center align-items-center min-vh-98">
      <Row className="w-100 justify-content-center">
        <Col md={6}>
          <Card className="profile-card p-4">
            <h2 className="text-center">Profile</h2>
            {error && <p className="text-danger text-center">{error}</p>}
            {user ? (
              <div>
                <p><strong>Name:</strong> {user.name}</p>
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Phone:</strong> {user.phone}</p>
                <p><strong>Date of Birth:</strong> {user.dob}</p>
                <p><strong>Country:</strong> {user.country}</p>
                <p><strong>Occupation:</strong> {user.occupation}</p>
                <p><strong>Amount Held:</strong> ${user.amount}</p>
                <Button className="btn color-green" onClick={() => navigate("/edit-profile")}>
                  Edit Profile
                </Button>
              </div>
            ) : (
              <p className="text-center">Loading...</p>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
