// src/components/AddCompany.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCompany = () => {
  const [companyDetails, setCompanyDetails] = useState({
    CID: '',
    CNAME: '',
    JOBROLE: '',
    SAL: '',
    VACANCY: '',
    CURL: '',
  });

  const handleAddCompany = async () => {
    try {
      const response = await axios.post('https://cvms-backend-psi.vercel.app/api/companies', companyDetails);
      console.log('Response:', response.data);
      // Handle success or update your state based on the response
    } catch (error) {
      console.error('Error adding company:', error);
      // Handle error
    }
  };

  return (
    <div>
      <h2>Add Company</h2>
      <div>
        <label>CID:</label>
        <input
          type="text"
          value={companyDetails.CID}
          onChange={(e) => setCompanyDetails({ ...companyDetails, CID: e.target.value })}
        />
      </div>
      <div>
        <label>Company Name:</label>
        <input
          type="text"
          value={companyDetails.CNAME}
          onChange={(e) => setCompanyDetails({ ...companyDetails, CNAME: e.target.value })}
        />
      </div>
      <div>
        <label>Job Role:</label>
        <input
          type="text"
          value={companyDetails.JOBROLE}
          onChange={(e) => setCompanyDetails({ ...companyDetails, JOBROLE: e.target.value })}
        />
      </div>
      <div>
        <label>Salary:</label>
        <input
          type="text" // You may change this to "number" if SAL is expected to be a number
          value={companyDetails.SAL}
          onChange={(e) => setCompanyDetails({ ...companyDetails, SAL: e.target.value })}
        />
      </div>
      <div>
        <label>Vacancy:</label>
        <input
          type="text" // You may change this to "number" if VACANCY is expected to be a number
          value={companyDetails.VACANCY}
          onChange={(e) => setCompanyDetails({ ...companyDetails, VACANCY: e.target.value })}
        />
      </div>
      <div>
        <label>Company URL:</label>
        <input
          type="text"
          value={companyDetails.CURL}
          onChange={(e) => setCompanyDetails({ ...companyDetails, CURL: e.target.value })}
        />
      </div>
      <button onClick={handleAddCompany}>Add Company</button>
    </div>
  );
};

export default AddCompany;
