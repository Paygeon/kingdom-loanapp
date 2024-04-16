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
      <h2 className="mb-10">How much do you need?</h2>
      <div className="">
        <label htmlFor="loanAmount" className="text-lg my font-bold">Loan Amount (<span>$</span>)</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e)=>setLoanAmount(parseFloat(e.target.value))}
            id="loanAmount"
            name="How much do you need?"
            placeholder="33,500"
            style={{color: "black",textAlign:"left",padding:"8px"}}
            className="border text-left border-gray-400 text-black rounded-md p-2"
          />
      </div>
      <div className=""></div>
       <Navigator verifyForm={verifyForm}/>
      </div>
  );
};

export default LoanAmountForm;
