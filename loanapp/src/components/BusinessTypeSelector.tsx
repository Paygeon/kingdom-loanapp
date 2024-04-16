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
     <div className="text-center mx-auto">
      <div className="button-jqw vis-6wc">
        <h2 className="mb-10">
          What type of business do you own?
        </h2>
        <div className="my-6">
        {
          businessTypeOptions.map((option) => (
            <button key={option} 
            onClick={handleClick(option)} 
            className={`${businessType === option?"bg-yellow-400 text-black":"bg-white text-black"} border border-yellow-600  rounded-lg cursor-pointer text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full my-2 hover:bg-yellow-400 hover:text-black`}>
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

