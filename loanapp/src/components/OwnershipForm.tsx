import React, { useContext, useEffect, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const OwnershipForm: React.FC = () => {
  const {setOwnershipDetails,ownershipDetails} = useContext(DataContext)
  const [ownershipPercentage, setOwnershipPercentage] = useState<number>(0);
  const [isAuthorizedOwner, setIsAuthorizedOwner] = useState<boolean>(true);

  const handleOwnershipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnershipPercentage(parseFloat(event.target.value));
  };

  const handleAuthorizationClick = (isAuthorized: boolean) => {
    setIsAuthorizedOwner(isAuthorized);
  };

  useEffect(()=>{
    setOwnershipDetails(
      {
        ownershipPercentage,
        isAuthorizedOwner
      }
    )
  },[isAuthorizedOwner,ownershipPercentage,setOwnershipDetails])

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
      <h2>What's your ownership percentage?</h2>
      <div className="wrapper-p3a">
        <label htmlFor="ownershipPercentage">Ownership Percentage</label>
        <input
          type="number"
          id="ownershipPercentage"
          name="Ownership-pct"
          placeholder="100"
          style={{color:"black"}}
          value={ownershipPercentage}
          onChange={handleOwnershipPercentageChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-492"></span>
        <div style={{ marginTop: '10px' }}>
          <label>Are you an authorized owner for this business?</label>
          <div style={{ display: 'flex',gap:"4px" }}>
            <button
              className={`button-yvf p-4 rounded-md text-xl ${isAuthorizedOwner ? 'bg-blue-500' : 'bg-blue-200'}`}
              onClick={() => handleAuthorizationClick(true)}
            >
              Yes
            </button>
            &nbsp;
            <button
              className={`button-yvf p-4 rounded-md text-xl ${!isAuthorizedOwner ? 'bg-blue-500' : 'bg-blue-200'}`}
              onClick={() => handleAuthorizationClick(false)}
            >
              No
            </button>
            <input type="hidden" id="Ownership-manager" name="Ownership-manager" value={isAuthorizedOwner ? '1' : '0'} />
          </div>
        </div>
      </div>
      <div className="dis-vo3"></div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default OwnershipForm;
