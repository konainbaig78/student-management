import React from "react";

function StudentItem({ student }) {
  return (
    <div className="card">
      <p><strong>Name:</strong> {student.name}</p>
      <p><strong>Email:</strong> {student.email}</p>
      <p><strong>Phone:</strong> {student.phone}</p>
    </div>
  );
}

export default StudentItem;
