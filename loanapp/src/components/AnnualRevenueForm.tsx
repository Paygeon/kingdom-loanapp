import React, { ChangeEventHandler, useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const AnnualRevenueForm: React.FC = () => {
  const {annualRevenue,setAnnualRevenue} = useContext(DataContext)
  const handleInput:ChangeEventHandler<HTMLInputElement> = (e) => {
    setAnnualRevenue(parseFloat(e.target.value))
  }
  const verifyForm= ()=>{
    if(!annualRevenue){
      return {
        isValid:false,
        message:"please provide your annual revenue",
      }
    }
    if(annualRevenue < 10){
      return{
        isValid:false,
        message:"your annual revenue should atleast be greater than $10"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div className="form-wzh">
      <h2>What's your annual revenue?</h2>
      <div className="wrapper-b8b">
        <label htmlFor="annualRevenue">Annual Revenue</label>
        <input
          type="number"
          value={annualRevenue}
          id="annualRevenue"
          name="What's your annual revenue?"
          placeholder="500,000"
          onChange={handleInput}
          style={{color:"black"}}
          className="border border-gray-400 rounded-md p-2"
        />
        <i className="dollar-tvy">$</i>
        <span className="error-p9f"></span>
   
      </div>
      <div className="dis-9w8"></div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default AnnualRevenueForm;
