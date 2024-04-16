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
      <h2 className="mb-8">What's your credit score?</h2>
      {
        scoreOptions.map(option=>(
          <button
            onClick={handleInput(option)}
            key={option}
            className={`${creditScore === option?"bg-yellow-400":"bg-white"} hover:bg-yellow-400 text-black px-4 py-2 font-medium text-lg rounded-md mt-4 mr-4`}
          >
              {option}
          </button>
        ))
      }
    </div>
    <Navigator verifyForm={verifyForm}/>
   </>
  );
};

export default CreditScoreForm;
