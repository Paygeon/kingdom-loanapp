import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const SSNForm: React.FC = () => {
  const {ssn,setSSN} = useContext(DataContext)

  const handleSSNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSSN(event.target.value);
  };

  const verifyForm= ()=>{
    if(!ssn){
      return {
        isValid:false,
        message:"please add ssn number",
      }
    }
    if(ssn.trim().length < 3){
      return{
        isValid:false,
        message:"your ssn should atleast be 3 characters long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }

  // const handleSubmit = () => {
  //   // Handle form submission
  // };

  return (
    <div>
      <h2 className="mb-8 font-bold md:text-5xl text-3xl max-w-3xl text-dark">What is your SSN?</h2>
      <div className="max-w-2xl">
        <label htmlFor="Wha-4wi" className="text-sm sm:text-lg block mx-2 font-medium">SSN</label>
        <input
          type="text"
          id="Wha-4wi"
          name="What is your SSN?"
          placeholder="012-34-5678"
          value={ssn}
          className="bg-gray-100 w-full text-sm sm:text-lg text-dark px-4 rounded-full p-3"
          style={{outline:"none"}}
          onChange={handleSSNChange}
        />
        <span className="error-3aq"></span>
      </div>
      <div className="my-6 max-w-2xl text-dark-700 font-medium text-sm sm:text-base">
        Clicking the  button to see the offers page will not affect your credit score. As part of our services, we
        will look at your credit report. This is not a hard credit check, will not register as an inquiry, and will not
        adversely affect your credit. Your SSN details are protected.
      </div>
      <Navigator verifyForm={verifyForm}/>
    </div>
  );
};

export default SSNForm;
