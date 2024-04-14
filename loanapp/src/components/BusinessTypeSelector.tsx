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
        <h2 className="font-serif font-normal text-xl md:text-4xl mt-0 text-blue-700">
          What type of business do you own?
        </h2>
        {
          businessTypeOptions.map((option) => (
            <button key={option} 
            onClick={handleClick(option)} 
            className={`${businessType === option?"bg-green-600 text-white":"bg-green-200 text-blue-700"} border border-green-400  rounded-lg cursor-pointer font-sans text-lg md:text-xl font-normal py-4 px-6 md:px-8 block w-full max-w-screen-md mx-auto mt-8 hover:bg-green-600 hover:text-white`}>
            {option}
          </button>
          ))
        }
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
   
  );
};

export default BusinessTypeSelector;

