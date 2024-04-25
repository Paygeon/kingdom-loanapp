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
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What industry are you in?</h2>
      <div className="">
        <div className="">
          <select
            id="industry"
            value={industry}
            onChange={e=>setIndustry(e.target.value)}
            name="Industry"
            style={{outline: "none"}}
            className="w-full sm:w-[60%] bg-gray-100 px-6 rounded-md p-3 text-gray-600 font-semibold text-sm md:text-xl appearance-none"
          >
            <option value="">Select One</option>
            {industryOptions.map(option=>(
              <option value={option.value}>{option.label}</option>
            ))}
          </select>

        </div>
        <span className="error-qg2"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
    
  );
};

export default IndustryForm;
