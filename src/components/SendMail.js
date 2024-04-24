import { useState } from 'react';
import axios from 'axios';

function SendMail({ initialEmail, initialSubject, initialMessage }) {
    const [email, setEmail] = useState(initialEmail || '');
    const [message, setMessage] = useState(initialMessage || '');
    const [subject, setSubject] = useState(initialSubject || '');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            email,
            message,
            subject,
        };

        try {
            await axios.post("https://cvms-backend-psi.vercel.app/api/sendMail", data);
            console.log("Email sent successfully");
        } catch (error) {
            console.error("Error sending email", error);
        }
    };

    return (
        <div>
            <div className="container mt-4">
                <div className='form-control'>
                    <form onSubmit={handleSubmit}>
                        <label>Email:</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                        <label>Subject:</label>
                        <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />

                        <label>Message:</label>
                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} />

                        <button type="submit" className="btn btn-primary">
                            Send Email
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default SendMail;
