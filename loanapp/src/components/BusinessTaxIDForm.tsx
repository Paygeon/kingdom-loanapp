import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const BusinessTaxIDForm: React.FC = () => {
  const {businessTaxID,setBusinessTaxID} = useContext(DataContext)

  const handleEINChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessTaxID(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };
  const verifyForm= ()=>{
    if(!businessTaxID){
      return {
        isValid:false,
        message:"please add ssn number",
      }
    }
    if(businessTaxID.trim().length < 3){
      return{
        isValid:false,
        message:"your business tax ID should atleast be 3 characters long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }

  return (
    <>
    <div>
      <h2>What's your Business Tax ID (EIN)?</h2>
      <div className="wrapper-81z">
        <label htmlFor="ein">EIN</label>
        <input
          type="text"
          id="ein"
          name="ein"
          placeholder="00-0000000"
          value={businessTaxID}
          style={{color:"black"}}
          onChange={handleEINChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-3k7"></span>
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          
        </button>
        <div className="dis-y6i">
          If you're a sole proprietor and your SSN is your TaxID, please select the  button.
        </div>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessTaxIDForm;
