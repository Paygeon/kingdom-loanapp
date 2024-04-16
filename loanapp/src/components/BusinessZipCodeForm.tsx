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
      <h2 className="mb-8">What's the business zip code?</h2>
      <div className="wrapper-2aw">
      <label htmlFor="loanAmount" className="text-lg my font-bold"> Zip Code </label>
        <input
          type="number"
          style={{color: "#000000",textAlign:"left",padding:"8px"}}
          value={businessZipCode}
          id="businessZipCode"
          onChange={e=>setBusinessZipCode(e.target.value)}
          name="What's the business zip code?"
          placeholder="29401"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-ybr"></span>
      </div>
      <Navigator verifyForm={verifyForm}/>
    </div>
  );
};

export default BusinessZipCodeForm;
