import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const LoanAmountForm: React.FC = () => {
  const {loanAmount,setLoanAmount} = useContext(DataContext)
  const verifyForm= ()=>{
    if(!loanAmount){
      return {
        isValid:false,
        message:"please add loan amount",
      }
    }
    if(loanAmount < 1){
      return{
        isValid:false,
        message:"your loan amount should atleast be $1"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <div className="">
      <h2 className="mb-10 text-3xl text-dark font-bold md:text-5xl">How much do you need?</h2>
      <div className="max-w-lg">
        <label htmlFor="loanAmount" className="md:text-xl mx-3 my-2 text-gray-600 block">Loan Amount (<span>$</span>)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e)=>setLoanAmount(parseFloat(e.target.value))}
            id="loanAmount"
            name="How much do you need?"
            style={{outline: "none"}}
            placeholder="33,500"
            className="sm:text-xl rounded-full font-semibold w-full text-left bg-gray-100 text-dark py-3 p-4"
          />
      </div>
      <div className=""></div>
       <Navigator verifyForm={verifyForm}/>
      </div>
  );
};

export default LoanAmountForm;
