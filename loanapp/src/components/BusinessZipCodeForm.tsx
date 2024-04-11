import React from 'react';

const BusinessZipCodeForm: React.FC = () => {
  return (
    <div>
      <h2>What's the business zip code?</h2>
      <div className="wrapper-2aw">
        <label htmlFor="businessZipCode">Zip Code</label>
        <input
          type="text"
          id="businessZipCode"
          name="What's the business zip code?"
          placeholder="29401"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-ybr"></span>
      </div>
    </div>
  );
};

export default BusinessZipCodeForm;
