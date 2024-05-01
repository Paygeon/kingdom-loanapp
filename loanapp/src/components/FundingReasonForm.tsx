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
      <div className="mb-20">
      <h2 className="mb-4 text-3xl font-bold text-dark sm:text-5xl">What are you seeking funding for?</h2>
      <div className="">
        <div className="">
          <div className="my-6 max-w-2xl md:hidden">
            <select value={loanReason} onChange={(e)=>setLoanReason(e.target.value)} className="text-dark w-full  mr-1 my-1 md:mr-2 text-sm md:text-lg px-4 rounded-full border border-dark py-2" name="" id="">
                  {
                  options.map((option) => (
                    <option value={option.value} key={option.label}>
                    {option.label}
                  </option>
                  ))
                }
              </select>
          </div>
          <div
            id="loanReason"
            className="hidden md:flex gap-1 flex-wrap max-w-3xl my-4 text-xl py-2 rounded-md appearance-none"
          >
            {/* <option value="">Select One</option> */}
            {options.map(option=>(
              <button className={`px-4 md:px-6 ${loanReason === option.value?"bg-dark text-white":"hover:bg-dark-300"} rounded-full py-2 text-sm mr-1 m-1 md:mr-2 sm:text-lg border border-dark text-dark`} key={option.label} onClick={(e)=>setLoanReason(option.value)}>{option.label}</button>
            ))}
          </div>
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
