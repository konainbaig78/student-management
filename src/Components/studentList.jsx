

import React from "react";
import StudentItem from "./studentitem";

function StudentList({ students }) {
  return (
    <div>
      <h2>Student List</h2>
      {students.length === 0 ? (
        <p>No students yet.</p>
      ) : (
        students.map((student) => (
          <StudentItem key={student.id} student={student} />
        ))
      )}
    </div>
  );
}

export default StudentList;
