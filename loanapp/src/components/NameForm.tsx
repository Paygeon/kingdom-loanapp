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
      <h2>What is your name?</h2>
      <div className="wrapper-d83">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          value={personalDetails.firstname}
          onChange={handleFirstnameInput}
          name="What is your name?-firstName"
          placeholder="First Name"
          style={{color:"black"}}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-ohz"></span>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          value={personalDetails.lastname}
          onChange={handleLastnameInput}
          id="lastName"
          style={{color:"black"}}
          name="What is your name?-lastName"
          placeholder="Last Name"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-ohz"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
   </>
  );
};

export default NameForm;
