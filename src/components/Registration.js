
import React, { useState } from 'react';
import './AdmissionForm.css'; // Import the CSS file
import Navbar from './Navbar';
import { useNavigate} from 'react-router-dom';
const Registration = () => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');
  const [age, setAge] = useState(null);
  const [selectedBatch, setSelectedBatch] = useState('');
  const navigator=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(age && (age<18 || age>65)){
      alert('Age should between 18 and 65.');
      return;
    }
    else{
      // Perform basic validations
    if (!name || !pass || !age || !selectedBatch) {
      alert('Please fill in all fields.');
      return;
    }

    

    // Call backend API to complete payment and store data
    const response = await fetch('http://localhost:3001/api/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, pass, age, selectedBatch }),
    });
    
    
    const result = await response.json();
    console.log(result);
    if(result.success){
      navigator('/login')
    } else alert('Some error occured');
    }

    
  };


  const handleMakePayment = async () => {
    // Additional logic for making a payment
    // You can integrate with a payment gateway here

    alert('Payment button clicked'); // Placeholder for payment logic
  };

  return (
    <Navbar>
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" minLength={8} value={pass} onChange={(e) => setPass(e.target.value)} />
      </label>
      <label>
        Age:
        <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </label>
      <label>
        Select Batch:
        <select value={selectedBatch} onChange={(e) => setSelectedBatch(e.target.value)}>
          <option value="">Select Batch</option>
          <option value="6-7AM">6-7AM</option>
          <option value="7-8AM">7-8AM</option>
          <option value="8-9AM">8-9AM</option>
          <option value="5-6PM">5-6PM</option>
        </select>
      </label>
      <button type="submit">Enroll</button>
    </form>
    </Navbar>
  );
};

export default Registration;


