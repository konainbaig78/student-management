import React, {useState} from 'react'

const StudentForm = ({onAdd}) => {
    const [name, setName]= useState('');
    const [email, setEmail]= useState('')
    const [phone, setPhone]= useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!name|| !email || !phone){
            alert("Please fill all fields");
      return;
        }
        onAdd({name, email, phone});
        //  clear the form fields
        setName('');
        setEmail('')
            setPhone('')
        
    }

  return (
    <div>
      <div>
        <h2>Student Registration</h2>
<form onSubmit={handleSubmit}>
<label htmlFor="name">Enter your Name <input type="text" value={name}  onChange={(e) => setName(e.target.value)}/></label>
<label htmlFor="email">Enter your email <input type="text" value={email}  onChange={(e) => setEmail(e.target.value)}/></label>
<label htmlFor="name">Enter your Phone <input type="text" value={phone}  onChange={(e) => setPhone(e.target.value)}/></label>
<button type='submit'> Submit</button>
</form>
      </div>
    </div>
  )
}

export default StudentForm
