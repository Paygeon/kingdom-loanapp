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
      <h2 className="mb-8">What is your business name?</h2>
      <div className="wrapper-ehd">
        <label htmlFor="loanAmount" className="text-lg my font-bold">Business Name</label>
        <input
          type="text"
          value={businessName}
          style={{color:"black",textAlign:"left",padding:"8px"}}
          onChange={e=>setBusinessName(e.target.value)}
          id="businessName"
          name="What is your business name?"
          placeholder="Acme, Inc"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-lvg"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessNameForm;
