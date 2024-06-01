import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const BusinessZipCodeForm: React.FC = () => {
  const {businessZipCode,setBusinessZipCode} = useContext(DataContext)
  const verifyForm= ()=>{
    if(!businessZipCode){
      return {
        isValid:false,
        message:"please add business zip code",
      }
    }
    if(businessZipCode.trim().length < 3){
      return{
        isValid:false,
        message:"your business zip code should atleast be 3 characters long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <div>
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What's the business zip code?</h2>
      <div className="sm:max-w-md">
      <label htmlFor="loanAmount" className="text-sm md:text-lg mx-3 text-gray-600 my font-medium block"> Zip Code </label>
        <input
          type="number"
          value={businessZipCode}
          id="businessZipCode"
          onChange={e=>setBusinessZipCode(e.target.value)}
          name="What's the business zip code?"
          placeholder="29401"
          style={{outline:"none"}}
          className="p-3 bg-gray-100 w-full rounded-full text-sm md:text-lg px-4"
        />
        <span className="error-ybr"></span>
      </div>
      <Navigator verifyForm={verifyForm}/>
    </div>
  );
};

export default BusinessZipCodeForm;
