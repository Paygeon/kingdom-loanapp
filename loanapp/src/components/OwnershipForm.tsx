import React, { useState } from 'react';

const OwnershipForm: React.FC = () => {
  const [ownershipPercentage, setOwnershipPercentage] = useState<string>('');
  const [isAuthorizedOwner, setIsAuthorizedOwner] = useState<boolean | null>(null);

  const handleOwnershipPercentageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOwnershipPercentage(event.target.value);
  };

  const handleAuthorizationClick = (isAuthorized: boolean) => {
    setIsAuthorizedOwner(isAuthorized);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="vis-5ir">
      <h2>What's your ownership percentage?</h2>
      <div className="wrapper-p3a">
        <label htmlFor="ownershipPercentage">Ownership Percentage</label>
        <input
          type="text"
          id="ownershipPercentage"
          name="Ownership-pct"
          placeholder="100"
          value={ownershipPercentage}
          onChange={handleOwnershipPercentageChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-492"></span>
        <div style={{ marginTop: '10px' }}>
          <label>Are you an authorized owner for this business?</label>
          <div style={{ display: 'flex' }}>
            <button
              className={`button-yvf ${isAuthorizedOwner === true ? 'bg-blue-500' : ''}`}
              onClick={() => handleAuthorizationClick(true)}
            >
              Yes
            </button>
            &nbsp;
            <button
              className={`button-yvf ${isAuthorizedOwner === false ? 'bg-blue-500' : ''}`}
              onClick={() => handleAuthorizationClick(false)}
            >
              No
            </button>
            <input type="hidden" id="Ownership-manager" name="Ownership-manager" value={isAuthorizedOwner ? '1' : '0'} />
          </div>
          <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
            Continue
          </button>
        </div>
      </div>
      <div className="dis-vo3"></div>
    </div>
  );
};

export default OwnershipForm;
