import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const industryOptions = [
  {value:"accommodation_food_services",label:"Accommodation and Food Services"},
  {value:"admin_support_waste_remediation",label:"Administrative & Support and Waste Management & Remediation Services"},
  {value:"agriculture_forestry",label:"Agriculture, Forestry, Fishing and Hunting"},
  {value:"arts_entertainment",label:"Arts, Entertainment, and Recreation"},
  {value:"construction",label:"Construction"},
  {value:"education",label:"Educational Services"},
  {value:"finance_insurance",label:"Finance and Insurance"},
  {value:"healthcare_social",label:"Health Care and Social Assistance"},
  {value:"information",label:"Information"},
  {value:"management_companies",label:"Management of Companies and Enterprises"},
  {value:"manufacturing",label:"Manufacturing"},
  {value:"mining",label:"Mining"},
  {value:"other",label:"Other Services (except Public Administration)"},
  {value:"science_tech",label:"Professional, Scientific, and Technical Services"},
  {value:"public_admin",label:"Public Administration"},
  {value:"real_estate",label:"Real Estate Rental and Leasing"},
  {value:"retail_trade",label:"Retail Trade"},
  {value:"transport_warehousing",label:"Transportation and Warehousing"},
  {value:"utilities",label:"Utilities"},
  {value:"wholesale_trade",label:"Wholesale"},
]

const IndustryForm: React.FC = () => {
  const {industry,setIndustry} = useContext(DataContext)
  const verifyForm= ()=>{
    if(!industry){
      return {
        isValid:false,
        message:"please add industry",
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div className="form-5c5 vis-v6c">
      <h2>What industry are you in?</h2>
      <div className="wrapper-gfs">
        <div className="wrapper-33b relative">
          <select
            id="industry"
            value={industry}
            onChange={e=>setIndustry(e.target.value)}
            name="Industry"
            className="border border-gray-400 rounded-md p-2 appearance-none"
          >
            <option value="">Select One</option>
            {industryOptions.map(option=>(
              <option value={option.value}>{option.label}</option>
            ))}
          </select>
          <svg
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
          </svg>
        </div>
        <span className="error-qg2"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
    
  );
};

export default IndustryForm;
