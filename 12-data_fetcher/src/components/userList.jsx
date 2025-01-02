import React from "react";

const UserList = ({ users }) => {
  return (
  <div
  style={{
    border: "1px solid #e0e0e0",
    borderRadius: "12px",
    padding: "20px",
    margin: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#ffffff",
    maxWidth: "350px",
    fontFamily: "Arial, sans-serif",
    color: "#333",
    transition: "transform 0.2s, box-shadow 0.2s",
    textAlign: "center",
  }}
  >
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.email})
        </li>
      ))}
    </ul>
  </div>
  );
};

export default UserList;
