import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

const EmailForm: React.FC = () => {
  const {email,setEmail} = useContext(DataContext)
  const verifyForm= ()=>{
    if(!email){
      return {
        isValid:false,
        message:"please add your email",
      }
    }
    if(!email.match(emailRegex)){
      return{
        isValid:false,
        message:"Please provide a valid email"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div>
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What's your email address?</h2>
      <div className="max-w-2xl">
      <label htmlFor="loanAmount" className="text-sm sm:text-lg my block font-medium text-gray-600"> Email Address</label>
        <input
          type="email"
          value={email}
          onChange={((e)=>setEmail(e.target.value))}
          id="emailAddress"
          style={{outline:"none",}}
          name="What's your email address?"
          placeholder="email@company.com"
          className="bg-gray-100 text-sm sm:text-lg w-full rounded-full px-4 p-3"
        />
        <span className="error-jws"></span>
      </div>
      <div className="dis-y6i mt-8 mb-32">
        <p className="text-sm sm:text-base">
          You understand that by clicking on the  button that you are providing written instructions to
          Carat Card Club (Paygeon.com) under the Fair Credit Reporting Act authorizing Carat Card Club
          (Paygeon.com) to obtain information from your personal credit profile or other information
          from a national credit reporting agency. You acknowledge by clicking the  button that you are
          a business owner and are personally liable  for this business transaction. You authorize Carat Card Club
          (Paygeon.com) to obtain such information for the purposes of matching you with our network
          partners.
        </p>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default EmailForm;
