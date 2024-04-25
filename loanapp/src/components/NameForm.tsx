import React, { ChangeEventHandler, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const NameForm: React.FC = () => {
  const {personalDetails,setPersonalDetails} = useContext(DataContext);
  const handleFirstnameInput:ChangeEventHandler<HTMLInputElement> = (e) => {
    setPersonalDetails(
      {
        firstname: e.target.value,
        lastname:personalDetails.lastname,
      }
    )
  }
  const handleLastnameInput:ChangeEventHandler<HTMLInputElement> = (e) => {
    setPersonalDetails(
      {
        lastname: e.target.value,
        firstname:personalDetails.firstname,
      }
    )
  }
  const verifyForm= ()=>{
    if(!(personalDetails.firstname && personalDetails.lastname)){
      return {
        isValid:false,
        message:"please your first and last name",
      }
    }
    if(personalDetails.firstname.trim().length < 3){
      return{
        isValid:false,
        message:"your firstname should atleast be 3 characters long"
      }
    }
    if(personalDetails.lastname.trim().length < 3){
      return{
        isValid:false,
        message:"your lastname should atleast be 3 characters long"
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
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What is your name?</h2>
      <div className="max-w-xl">
        <label htmlFor="loanAmount" className="text-sm md:text-lg mx-3 block text-dark font-medium">First Name</label>
        <input
          type="text"
          id="firstName"
          value={personalDetails.firstname}
          onChange={handleFirstnameInput}
          name="What is your name?-firstName"
          placeholder="First Name"
          style={{outline:"none"}}
          className="bg-gray-100 text-sm md:text-lg w-full px-4 rounded-full p-3"
        />
        <label htmlFor="loanAmount" className="text-sm mt-10 md:text-lg mx-3 block text-dark font-medium">Last Name </label>
        <input
          type="text"
          value={personalDetails.lastname}
          onChange={handleLastnameInput}
          id="lastName"
          style={{outline:"none"}}
          name="What is your name?-lastName"
          placeholder="Last Name"
          className="bg-gray-100 w-full text-sm md:text-lg px-4 rounded-full p-3"
        />
        <span className="error-ohz"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
   </>
  );
};

export default NameForm;
