import React, { useState } from 'react';

const LeaveRequestForm = ({ onSubmit }) => {
  const [leaveType, setLeaveType] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the input data before submitting
    if (leaveType && startDate && endDate) {
      onSubmit({ leaveType, startDate, endDate });
      // Optionally, you can reset the form fields after submission
      setLeaveType('');
      setStartDate('');
      setEndDate('');
    } else {
      alert('Please fill in all fields before submitting.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Leave Type:
        <input
          type="text"
          value={leaveType}
          onChange={(e) => setLeaveType(e.target.value)}
        />
      </label>
      <br />
      <label>
        Start Date:
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
      </label>
      <br />
      <label>
        End Date:
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Submit Leave Request</button>
    </form>
  );
};

export default LeaveRequestForm;
