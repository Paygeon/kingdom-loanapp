import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const date = new Date()
const fullYear = date.getFullYear()
const fullMonth = date.getMonth() + 1
const monthOptions = new Array(12).fill("0").map((item,i) => i+1 )
const yearOptions = new Array(50).fill("0").map((item,i) => (fullYear - (i+1)) )


const BusinessStartDateForm: React.FC = () => {
  const {businessStartDate,setBusinessStartDate} = useContext(DataContext)
  
  const [month,setMonth] = useState(fullMonth)
  const [year,setYear] = useState(fullYear)

  useEffect(()=>{
    setBusinessStartDate(`${month}-${year}`)
  },[month,year,setBusinessStartDate])

  const verifyForm= ()=>{
    if(!businessStartDate){
      return {
        isValid:false,
        message:"please add your business start date",
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div className="form-nl1 vis-h5b">
      <h2 className="mb-8">When did you start your business?</h2>

      <div className="">
        <div className="flex items-center gap-4">
          <div className="flex-1">
            <p>Month</p>
            <select
            style={{color:""}}
            className="border w-full border-gray-400 rounded-md py-4 p-2"
            value={month}
            onChange={(e)=>setMonth(parseFloat(e.target.value))}>
              {monthOptions.map((item,i) => (
                <option key={`month-option-${i}`} value={item}>{item}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <p>Year</p>
            <select className="border w-full border-gray-400 py-4 rounded-md p-2" value={year} onChange={(e)=>setYear(parseFloat(e.target.value))}>
              {yearOptions.map((item,i) => (
                <option key={`month-option-${i}`} value={item}>{item}</option>
              ))}
            </select>

          </div>
        </div>
        <span className="error-8y9"></span>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessStartDateForm;
