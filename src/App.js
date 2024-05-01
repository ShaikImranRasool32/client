import React from 'react';
//import styles from './App.css';
import { Route,Routes } from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import { AuthProvider } from './Token/AuthContext.js';
//import Header from './components/Header';
import Student from './components/Student.js';
import Footer from './components/Footer';
import Visitors from './components/Visitors';
import Counsellor from './components/Counsellor';
import Home from './components/Home.js'
import ResponsiveAppBar from './components/Nav';
import ContactUs from './components/ContactUs';
import Login from './components/Login.js';
import Appointment from './components/Appointment.js';
import Filter from './components/Filter.js';
import CounsellorDetails from './components/CounsellorDetails.js';
import Logout from './components/Logout';
import Home3 from './components/Home3.js';
import ApplyLeave from './components/ApplyLeave.js';
import LeaveRequestForm from './components/LeaveRequestForm.js';
import SendMail from './components/SendMail.js';
import CompaniesQR from './components/CompaniesQR';
import AddCompany from './components/AddCompany.js';
import Upload from './components/Upload';
import OtpMail from './components/OtpMail';
import VerifyOtp from './components/VerifyOtp';


const App = () => {
  const initialEmail = 'shaikimranrasool32@gmail.com';
  const initialSubject = 'hello';
  const initialMessage = 'hello world';

  return (
    <AuthProvider>
      <Toaster position='bottom-right' toastOptions={{duration: 2000}} />
    <ResponsiveAppBar/>
    <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="home" element={<Home/>} />
      <Route path="Student" element={<Student/>} />
      <Route path="Counsellor" element={<Counsellor/>} />
      <Route path="Visitor" element={<Visitors/>} />
      <Route path="ContactUs" element={<ContactUs/>} />
      <Route path='Filter' element={<Filter/>}/>
      <Route path="Login" element={<Login/>} />
      <Route path='Logout' element={<Logout/>} />
      <Route path="Appointment" element={<Appointment/>}/>
      <Route path='CounsellorDetails' element={<CounsellorDetails/>}/>
      <Route path='Home3' element={<Home3/>}/>
      <Route path='LeaveRequestForm' element={<LeaveRequestForm/>}/>
      <Route path='ApplyLeave' element={<ApplyLeave/>}/>
      <Route path='SendMail' element={<SendMail/>}/>
      <Route path='CompaniesQR' element={<CompaniesQR/>}/>
      <Route path='AddCompany' element={<AddCompany/>}/>
      <Route path='OtpMail' element={<OtpMail/>}/>
      <Route path='VerifyOtp' element={<VerifyOtp/>}/>







    </Routes><br/>
    <Footer/>
    </AuthProvider>
  );
};

export default App;
