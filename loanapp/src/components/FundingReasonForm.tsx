/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const options = [
  {label:"Expansion",value:"expansion"},
  {label:"Equipment Purchase",value:"buy_equipment"},
  {label:"Finance Accounts Receivable",value:"finance_ar"},
  {label:"Inventory",value:"inventory"},
  {label:"Marketing / Sales",value:"marketing"},
  {label:"Payroll",value:"payroll"},
  {label:"Purchase Vehicle(s)",value:"buy_vehicle"},
  {label:"Remodel Building",value:"remodel"},
  {label:"Refinance Debt",value:"refinance"},
  {label:"Working Capital / Cash Flow",value:"capital_cash_flow"},
  {label:"Other",value:"other"},
]

const FundingReasonForm: React.FC = () => {
  const {loanReason,setLoanReason} = useContext(DataContext)

  const verifyForm= ()=>{
    if(!loanReason){
      return {
        isValid:false,
        message:"please provide a reason for your loan",
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <div>
      <div className="form-sav vis-j1b">
      <h2 className="mb-10">What are you seeking funding for?</h2>
      <div className="">
        <div className="">
          <select
            onChange={(e)=>setLoanReason(e.target.value)}
            id="loanReason"
            value={loanReason}
            name="Loan Reason"
            className="border border-gray-400 w-full my-4 text-xl py-2 rounded-md p-2 appearance-none"
          >
            <option value="">Select One</option>
            {options.map(option=>(
              <option key={option.label} value={option.value}>{option.label}</option>
            ))}
          </select>
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="select-handle absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg> */}
        </div>
        {/* <span className="error-vlw"></span> */}

      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </div>
  );
};

export default FundingReasonForm;
