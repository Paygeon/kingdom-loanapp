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
      <h2 className="mb-8 md:text-5xl font-bold text-2xl max-w-3xl text-dark">Choose Your Password</h2>
      <div className="max-w-2xl">
        <label htmlFor="loanAmount" className="text-sm sm:text-lg mx-3 font-medium">Password</label>
        <div 
          className="bg-gray-100 flex items-center px-4 w-full text-dark rounded-full"
        >
        <input
          type={passwordShown?"":"password"}
          id="password"
          value={password}
          onChange={handlePasswordInput}
          name="password"
          placeholder="Enter your password"
          className="bg-gray-100 w-full text-sm sm:text-base flex-1 text-dark rounded-full py-3"
          style={{outline:"none"}}
        />
        <button onClick={togglePasswordShown}>
            {passwordShown ? <i className="bi bi-eye-fill"></i> : <i className="bi bi-eye-slash-fill"></i>}
        </button>
        </div>
        <span className="error-ohz"></span>

        <label htmlFor="loanAmount" className="text-sm sm:text-lg mt-8 block mx-3 font-medium">Confirm Password</label>
        <div className="bg-gray-100 flex items-center px-4 w-full text-dark rounded-full">
            <input
            type={confirmPasswordShown?"":"password"}
            value={confirmPassword}
            onChange={handleConfirmPasswordInput}
            id="lastName"
            style={{background:"none",outline:"none"}}
            placeholder="Confirm your Password"
            className="w-full py-2 text-sm sm:text-base"
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
