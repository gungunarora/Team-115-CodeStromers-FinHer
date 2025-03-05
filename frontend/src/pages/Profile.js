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


import { useState } from "react";
import "./Profile.css";

import profile from "../assets/female.jpg";


export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "123-456-7890",
    balance: "$12,450.00",
  });

  const [transactions] = useState([
    { id: 1, type: "Deposit", amount: "$500.00", date: "2025-03-01" },
    { id: 2, type: "Withdrawal", amount: "$200.00", date: "2025-03-02" },
    { id: 3, type: "Transfer", amount: "$1,000.00", date: "2025-03-03" },
  ]);

  const handleEdit = () => setIsEditing(!isEditing);

  return (
    <div className="profile-container">
      {/* Profile Info */}
      <div className="profile-card">
        <div className="profile-header">
          <h2>Profile Information</h2>
          <button onClick={handleEdit} className="edit-button">
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        <img src={profile} alt="Profile" className="profile-image" />
        <div className="profile-fields">
          <label>Name:</label>
          <input type="text" value={user.name} disabled={!isEditing} onChange={(e) => setUser({ ...user, name: e.target.value })} />
          <label>Email:</label>
          <input type="email" value={user.email} disabled={!isEditing} onChange={(e) => setUser({ ...user, email: e.target.value })} />
          <label>Phone:</label>
          <input type="text" value={user.phone} disabled={!isEditing} onChange={(e) => setUser({ ...user, phone: e.target.value })} />
          <label>Account Balance:</label>
          <input type="text" value={user.balance} disabled className="disabled-field" />
        </div>
      </div>

      {/* Transaction History */}
      <div className="transaction-card">
        <h2>Transaction History</h2>
        <table className="transaction-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td>{tx.type}</td>
                <td className="amount">{tx.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
