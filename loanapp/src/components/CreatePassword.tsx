import React, { ChangeEventHandler, useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const CreatePasswordForm: React.FC = () => {
  const {password,setPassword} = useContext(DataContext);
  const [confirmPassword,setConfirmPassword] = useState("");
  const [passwordShown,setPasswordShown] = useState(false);
  const [confirmPasswordShown,setConfirmPasswordShown] = useState(false);
  const handlePasswordInput:ChangeEventHandler<HTMLInputElement> = (e) => {
   setPassword(e.target.value);
  }
  const handleConfirmPasswordInput:ChangeEventHandler<HTMLInputElement> = (e) => {
    setConfirmPassword(e.target.value);
  }
  const togglePasswordShown = ()=>{
    setPasswordShown(prev=>!prev)
  } 
  const toggleConfirmPasswordShown = ()=>{
    setConfirmPasswordShown(prev=>!prev)
  }
  const verifyForm= ()=>{
    if(!password || password.trim().length === 0){
      return {
        isValid:false,
        message:"Please fill out your password",
      }
    }
    if(password.trim().length < 8){
      return {
        isValid:false,
        message:"Your Password should atleast be 8 characters long",
      }
    }
    if(password !== confirmPassword){
      return {
        isValid:false,
        message:"Passwords do not match",
      }
    }

    return {
      isValid:true,
      message:null
    }
  }
  return (
   <>
    <div className="form-8oa vis-a38">
      <h2 className="mb-8">Choose Your Password</h2>
      <div className="wrapper-d83">
        <label htmlFor="loanAmount" className="text-lg my font-bold">Password</label>
        <div className="bg-white flex gap-2 border rounded-md border-gray-400 px-3 p-1">
        <input
          type={passwordShown?"":"password"}
          id="password"
          value={password}
          onChange={handlePasswordInput}
          name="password"
          placeholder="Enter your password"
          style={{color:"black",textAlign:"left",padding:"8px",outline:"none"}}
          className="w-full py-2"
        />
        <button onClick={togglePasswordShown}>
            {passwordShown ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
        </button>
        </div>
        <span className="error-ohz"></span>
        <br />
        <br />
        <label htmlFor="loanAmount" className="text-lg my font-bold">Confirm Password</label>
        <div className="bg-white flex gap-2 border rounded-md border-gray-400 px-3 p-1">
            <input
            type={confirmPasswordShown?"":"password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordInput}
            id="lastName"
            style={{color:"black",textAlign:"left",padding:"8px"}}
            name="What is your name?-lastName"
            placeholder="Confirm your Password"
            className="w-full py-2"
            />
             <button onClick={toggleConfirmPasswordShown}>
            {confirmPasswordShown ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
        </button>
        </div>
        
        <span className="error-ohz"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
   </>
  );
};

export default CreatePasswordForm;
