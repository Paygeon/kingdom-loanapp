import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const OwnershipForm: React.FC = () => {
  const {setOwnershipDetails,ownershipDetails} = useContext(DataContext)
  const [ownershipPercentage, setOwnershipPercentage] = useState<number>(ownershipDetails.ownershipPercentage);
  const [isAuthorizedOwner, setIsAuthorizedOwner] = useState<boolean>(true);

  const handleOwnershipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnershipPercentage(parseFloat(event.target.value));
    setOwnershipDetails(
      {
        ownershipPercentage:parseFloat(event.target.value),
        isAuthorizedOwner
      }
    )
  };

  const handleAuthorizationClick = (isAuthorized: boolean) => {
    setIsAuthorizedOwner(isAuthorized);
    setOwnershipDetails(
      {
        ownershipPercentage,
        isAuthorizedOwner:isAuthorized
      }
    )
  };

  const verifyForm= ()=>{
    console.log(ownershipDetails)
    if(!(ownershipDetails.ownershipPercentage)){
      return {
        isValid:false,
        message:"please add ownership percentage",
      }
    }
    if(ownershipDetails.ownershipPercentage < 1){
      return{
        isValid:false,
        message:"your ownership percentage should be more than 0%"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
    <>
    <div className="vis-5ir">
      <h2 className="mb-8 text-2xl font-bold text-dark max-w-3xl md:text-5xl">What's your ownership percentage?</h2>
      <div className="max-w-2xl">
        <label htmlFor="loanAmount" className="text-lg mt-4 my-1 block text-gray-600 font-medium"> Ownership Percentage</label>
        <input
          type="number"
          id="ownershipPercentage"
          name="Ownership-pct"
          placeholder="100"
          max={100}
          style={{outline:"none"}}
          value={ownershipPercentage}
          onChange={handleOwnershipPercentageChange}
          className="bg-gray-100 rounded-full px-4 p-3 w-full"
        />
        <span className="error-492"></span>
        <div style={{ marginTop: '24px' }}>
          <label htmlFor="loanAmount" className="text-sm sm:text-lg my-2 text-gray-600 font-medium"> Are you an authorized owner for this business?</label>

          <div className="flex my-4 items-center gap-2">
            <button
              className={`min-w-[80px] md:min-w-[120px] py-3 rounded-full text-sm sm:text-xl ${isAuthorizedOwner ? 'bg-dark text-white ' : 'text-dark bg-dark-200 hover:bg-dark-200'}`}
              onClick={() => handleAuthorizationClick(true)}
            >
              Yes
            </button>
            &nbsp;
            <button
              className={`min-w-[80px] md:min-w-[120px] py-3 rounded-full text-sm md:text-xl ${!isAuthorizedOwner ? 'bg-primary text-white' : 'text-dark bg-dark-200 hover:bg-primary-400'}`}
              onClick={() => handleAuthorizationClick(false)}
            >
              No
            </button>
            <input type="hidden" id="Ownership-manager" name="Ownership-manager" value={isAuthorizedOwner ? '1' : '0'} />
          </div>
        </div>
      </div>
      <br /><br />
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default OwnershipForm;
