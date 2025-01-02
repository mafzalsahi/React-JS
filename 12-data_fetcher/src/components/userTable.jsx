import React from "react";

const UserTable = ({ users }) => {
  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
    textAlign: "left",
    overflow: "hidden",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };
  
  const headerStyle = {
    backgroundColor: "#4CAF50",
    color: "white",
    textTransform: "uppercase",
    fontWeight: "bold",
    padding: "12px 15px",
  };
  
  const rowStyle = {
    borderBottom: "1px solid #ddd",
    transition: "background-color 0.3s",
  };
  
  const cellStyle = {
    padding: "12px 15px",
    color: "#333",
  };
  
  const hoverStyle = {
    backgroundColor: "#f1f1f1",
  };  
  return (
    
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={headerStyle}>ID</th>
          <th style={headerStyle}>Name</th>
          <th style={headerStyle}>Email</th>
          <th style={headerStyle}>Street</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id} style={rowStyle}>
            <td style={cellStyle}>{user.id}</td>
            <td style={cellStyle}>{user.name}</td>
            <td style={cellStyle}>{user.email}</td>
            <td style={cellStyle}>{user.address.street}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
