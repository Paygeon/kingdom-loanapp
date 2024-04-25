import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const scoreOptions = [
  "Excellent (720+)",
  "Good (680 - 719)",
  "Fair (640 - 679)",
  "Poor (639 or less)"
]
const CreditScoreForm: React.FC = () => {
  const {creditScore,setCreditScore} = useContext(DataContext)
  const handleInput=(value:string)=>{
    return ()=>{
      setCreditScore(value)
    }
  }
  const verifyForm= ()=>{
    if(!creditScore){
      return {
        isValid:false,
        message:"please add your credit score",
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
   <>
    <div className="button-pap">
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What's your credit score?</h2>
        <div className="grid grid-cols-2 md:flex md:flex-wrap gap-2 max-w-3xl">
        {
        scoreOptions.map(option=>(
          <button
            onClick={handleInput(option)}
            key={option}
            className={`${creditScore === option?"bg-primary-400":"bg-gray-100"} hover:bg-primary-200 text-dark rounded-full px-4 md:px-6 py-2 font-medium text-sm sm:text-lg mt-4`}
          >
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

export default CreditScoreForm;
