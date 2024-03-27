import React, { useState } from 'react';
import axios from 'axios';
import './ApplyLeave.css';  // Import the CSS file for styling

const ApplyLeave = () => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [reason, setReason] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post('/api/employee-leaves', {
      employee: '',
      startDate,
      endDate,
      reason,
    });
    console.log(response.data);
  };

  return (
    <form className="leave-form" onSubmit={handleSubmit}>
      <label htmlFor="startDate">Start Date:</label>
      <input
        type="date"
        id="startDate"
        value={startDate}
        onChange={(event) => setStartDate(event.target.value)}
      />
      <br />
      <label htmlFor="endDate">End Date:</label>
      <input
        type="date"
        id="endDate"
        value={endDate}
        onChange={(event) => setEndDate(event.target.value)}
      />
      <br />
      <label htmlFor="reason">Reason:</label>
      <input
        type="text"
        id="reason"
        value={reason}
        onChange={(event) => setReason(event.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplyLeave;
