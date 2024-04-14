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
      <h2>How much do you need?</h2>
      <div className="">
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e)=>setLoanAmount(parseFloat(e.target.value))}
          id="loanAmount"
          name="How much do you need?"
          placeholder="33,500"
          style={{color: "black"}}
          className="border border-gray-400 text-black rounded-md p-2"
        />
        <i className="dollar-okz" style={{color:"black"}}>$</i>
        <span className="error-5nq"></span>
      </div>
      <div className="dis-gsb"></div>
       <Navigator verifyForm={verifyForm}/>
      </div>
  );
};

export default LoanAmountForm;
