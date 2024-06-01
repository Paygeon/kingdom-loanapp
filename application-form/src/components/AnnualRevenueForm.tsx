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
    <div className="">
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What's your annual revenue?</h2>
      <div className="max-w-md">
        <label htmlFor="loanAmount" className="text-lg my-2 my font-medium text-gray-600 block">Annual Revenue (<span>$</span>)</label>
        <input
          type="number"
          value={annualRevenue}
          id="annualRevenue"
          name="What's your annual revenue?"
          placeholder="500,000"
          onChange={handleInput}
          style={{outline:"none"}}
          className="bg-gray-100 w-full text-gray-700 text-lg font-semibold rounded-full px-4 p-3"
        />
      </div>
      <div className="dis-9w8"></div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default AnnualRevenueForm;
