import React, { useState } from "react";
import StudentDisplay from "./studentDisplay";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function StudentList({ students, setEditingStudent, deleteStudent }) {
  const navigate = useNavigate();
  const showAlert = () => {
    Swal.fire({
      title: "Success!",
      text: "Your data has been saved!",
      icon: "success",
      confirmButtonText: "OK",
    });
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleEdit = (student) => {
    setEditingStudent(student);
    navigate("/form");
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteStudent(id);
        Swal.fire("Deleted!", "Student has been removed.", "success");
      }
    });
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-[#50A3A2] flex flex-col items-center justify-center p-[2%]  text-white">
      <h2 className="font-bold text-5xl font-serif m-4">Student List</h2>
      <input
        className="border-2 border-white"
        type="text"
        placeholder="Search by name or email"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
      />

      {filteredStudents.length === 0 ? (
        <p>No students found.</p>
      ) : (
        <div className="flex flex-wrap gap-4 justify-center">
          {filteredStudents.map((student) => (
            <div
              className="w-72 border-2 border-white flex  flex-col gap-2.5 items-start justify-evenly p-4 rounded-2xl bg-[#72B4B4]"
              key={student.id}
            >
              <StudentDisplay student={student} />
              <button
                className=" border-2 p-2 rounded h-[2rem] w-[5rem] flex items-center justify-center border-black text-[#72B4B4] bg-black"
                onClick={() => handleEdit(student)}
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(student.id)}
                className=" border-2 p-2 rounded h-[2rem] w-[5rem] flex items-center justify-center border-red-700 text-white bg-red-600 "
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default StudentList;
