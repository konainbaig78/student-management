import React, { useState } from "react";
import StudentForm from "./Components/studentForm";
import StudentList from "./Components/studentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, { ...student, id: Date.now() }]);
  };

  return (
    <div>
      <h1>Student Management App</h1>
      <StudentForm onAdd={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
