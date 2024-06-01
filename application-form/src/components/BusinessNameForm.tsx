import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const BusinessNameForm: React.FC = () => {
  const {businessName,setBusinessName} = useContext(DataContext)
  const verifyForm= ()=>{
    if(!businessName){
      return {
        isValid:false,
        message:"please add business name",
      }
    }
    if(businessName.trim().length < 3){
      return{
        isValid:false,
        message:"your business name should atleast be 3 characters long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div className="form-9mr vis-bi7">
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What is your business name?</h2>
      <div className="max-w-md">
        <label htmlFor="loanAmount" className="text-sm mx-3 md:text-lg my-1 block font-medium text-gray-600">Business Name</label>
        <input
          type="text"
          value={businessName}
          style={{outline:"none",}}
          onChange={e=>setBusinessName(e.target.value)}
          id="businessName"
          name="What is your business name?"
          placeholder="Acme, Inc"
          className="bg-gray-100 w-full rounded-full text-sm md:text-lg px-4 p-3"
        />
        <span className="error-lvg"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessNameForm;
