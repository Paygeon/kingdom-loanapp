import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const businessTypeOptions = [
  "Limited Liability Company | LLC",
  "Sole Proprietorship",
  "Partnership",
  "C Corporation",
  "S Corporation",
]

const BusinessTypeSelector: React.FC = () => {
  const {businessType,setBusinessType} = useContext(DataContext)
  const handleClick=(value:string)=>{
    return ()=>setBusinessType(value)
  }
  const verifyForm= ()=>{
    if(!businessType){
      return {
        isValid:false,
        message:"please add Business Type",
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
     <div className="mx-auto">
      <div className="">
        <h2 className="mb-10 sm:w-11/12 md:w-[65%] text-3xl md:text-5xl font-bold text-dark">What type of business do you own?</h2>
        <div className="my-3 max-w-2xl block sm:hidden">
        <select value={businessType} onChange={(e)=>setBusinessType(e.target.value)} className="text-dark w-full  mr-1 my-1 md:mr-2 text-sm md:text-lg px-4 rounded-full border border-dark py-2" name="" id="">
              {
              businessTypeOptions.map((option) => (
                <option value={option} key={option}>
                {option}
              </option>
              ))
            }
          </select>
        </div>

        <div className="my-6 max-w-3xl justify-start hidden sm:flex flex-wrap">
        {
          businessTypeOptions.map((option) => (
            <button key={option} 
            onClick={handleClick(option)} 
            className={`${businessType === option?"bg-dark text-white":"text-dark hover:bg-dark-300 "} mr-1 my-1 md:mr-2 text-sm md:text-lg px-4 rounded-full border border-dark py-2`}>
            {option}
          </button>
          ))
        }
        </div>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
   
  );
};

export default BusinessTypeSelector;

