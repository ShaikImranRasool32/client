import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function OtpMail() {
    const [semail, setSemail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(semail);
        
        try {
            const data = {
                semail
            };
            await axios.post("https://server-pi-ivory.vercel.app/api/sendotp", data);
            console.log("OTP Sent Successfully");
            navigate(`/verifyotp?email=${semail}`);
        } catch (error) {
            console.error("Error sending OTP:", error);
        }
    };

    return (
        <div className='sendotp'>
            <div className="container mt-4">
                <div className='form-control'>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className='form-label'>Enter Email:</label>
                            <input 
                                type='email' 
                                value={semail} 
                                className='form-control' 
                                placeholder='Enter Email' 
                                onChange={(e) => setSemail(e.target.value)}
                            />
                        </div>
                        <div align="center">
                            <button className="btn btn-secondary mt-3" type='submit'>Verify OTP</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OtpMail;
