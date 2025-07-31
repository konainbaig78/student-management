import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import Swal from "sweetalert2";

const StudentForm = ({ onAdd, onUpdate, editingStudent }) => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (editingStudent) {
      setName(editingStudent.name);
      setEmail(editingStudent.email);
      setPhone(editingStudent.phone);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone) {
      Swal.fire({
        icon: "error",
        title: "Missing fields!",
        text: "Please fill all the fields before submitting.",
      });
      return;
    } else {
      Swal.fire({
        icon: "success",
        title: "Student Updated",
        text: `${name}'s info has been updated!`,
      });
    }

    const studentData = { name, email, phone };
    if (editingStudent) {
      onUpdate({ ...studentData, id: editingStudent.id });
    } else {
      onAdd(studentData);
    }

    setName("");
    setEmail("");
    setPhone("");
  };

  return (
    <div className="bg-[#50A3A2] flex flex-col items-center justify-center p-[2%]  text-white">
      <h2 className="font-bold text-5xl font-serif m-4">
        {editingStudent ? "Edit Student" : "Student Registration"}
      </h2>
      <form
        className="rounded border-2 border-white flex flex-col items-center justify-center gap-4 p-4 w-[40%] h-[400px] "
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col items-center justify-evenly gap-1  font-medium text-xl ">
          Enter your Name:
          <input
            className={`rounded border-2  outline-none transition-all duration-300 border-white ms-1.5 ${
              name
                ? "border-yellow-500 text-[20px] p-1.5 text-center"
                : " border-white"
            }`}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="flex flex-col items-center justify-evenly gap-1 font-medium text-xl">
          Enter your Email:
          <input
            className={`rounded border-2  outline-none transition-all duration-300 border-white ms-1.5 ${
              email
                ? "border-yellow-500 text-[20px] p-1.5 text-center"
                : " border-white"
            } `}
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="flex flex-col items-center justify-evenly gap-1 font-medium text-xl">
          Enter your Phone:
          <input
            className={`rounded border-2  outline-none transition-all duration-300 border-white ms-1.5  ${
              phone
                ? "border-yellow-500 text-[20px] p-1.5 text-center"
                : " border-white"
            } `}
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </label>
        <button
          className=" px-4 py-2 bg-[#72B4B4] my-3.5 w-[10rem] h-[3rem] text-white rounded hover:bg-[#60a7a7] transition duration-300 "
          type="submit"
        >
          {editingStudent ? "Update" : "Submit"}
        </button>
      </form>
      <button
        className="px-4 py-2 bg-black my-3.5 w-[10rem] h-[3rem] text-[#72B4B4] rounded hover:bg-[#396666] transition duration-300 hover:text-white"
        onClick={() => {
          navigate("/list");
        }}
      >
        Student list
      </button>
    </div>
  );
};

export default StudentForm;
