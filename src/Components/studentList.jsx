import React, { useState } from 'react';
import StudentDisplay from './studentDisplay';
import { useNavigate } from 'react-router-dom';

function StudentList({ students, setEditingStudent, deleteStudent }) {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleEdit = (student) => {
    setEditingStudent(student);
    navigate('/form');
  };

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete?");
    if (confirmDelete) {
      deleteStudent(id);
    }
  };

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className='bg-[#50A3A2] flex flex-col items-center justify-center p-[2%]  text-white'>
      <h2 className='font-bold text-5xl font-serif m-4'>Student List</h2>
      <input className='border-2 border-white'
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: '8px', marginBottom: '10px', width: '100%' }}
      />

      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : 
       <div className="flex flex-wrap gap-4 justify-center">
  {filteredStudents.map((student) => (
    <div
      className="w-72 border-2 border-white flex  flex-col gap-2.5 items-start justify-evenly p-4 rounded-2xl bg-[#72B4B4]"
      key={student.id}
    >
      <StudentDisplay  student={student} />
      <button  className=" border-2 p-2 rounded h-[2rem] w-[5rem] flex items-center justify-center border-black text-[#72B4B4] bg-black" onClick={() => handleEdit(student)}>Edit</button>
      <button
        onClick={() => handleDelete(student.id)}
        className=" border-2 p-2 rounded h-[2rem] w-[5rem] flex items-center justify-center border-red-700 text-white bg-red-600 ">
      
        Delete
      </button>
    </div>
  ))}
</div>
}
    </div>
  );
}

export default StudentList;
