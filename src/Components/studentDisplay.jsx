const StudentDisplay = ({ student }) => {
  if (!student) return <p>No student selected.</p>;

  return (
    <div >
      
  <p>Name: {student.name}</p>
      <p>Email: {student.email}</p>
      <p>Phone: {student.phone}</p>
    </div>
      
    
  );
};

export default StudentDisplay;
