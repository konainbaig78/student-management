import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import StudentForm from './Components/studentForm';
import StudentList from './Components/studentList';
import StudentDisplay from './Components/studentDisplay';

const App = () => {
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent]= useState(null)

  const addStudent = (student) => {
    const newStudent = { ...student, id: Date.now() }; 
    setStudents([...students, newStudent]);
  };
  const updateStudent=(updatedStudent)=>{
    setStudents(
      students.map((student)=> 
        student.id=== updatedStudent.id ? updatedStudent : student
      )
    )
    setEditingStudent(null)

  }
  const deleteStudent = (id) => {
  setStudents(students.filter((student) => student.id !== id));
};

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/form' element={<StudentForm onAdd={addStudent}  onUpdate={updateStudent}
              editingStudent={editingStudent} />} />
        <Route path='/list' element={<StudentList students={students}  setEditingStudent={setEditingStudent}  deleteStudent={deleteStudent}/>} />
        {/* Optional: if you want to show latest student separately */}
        <Route path='/display' element={<StudentDisplay student={students[students.length - 1]} />} />
      </Routes>
    </Router>
  );
};

export default App;
