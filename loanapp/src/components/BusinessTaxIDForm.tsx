import React, { useState } from 'react';

const BusinessTaxIDForm: React.FC = () => {
  const [ein, setEIN] = useState<string>('');

  const handleEINChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEIN(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div>
      <h2>What's your Business Tax ID (EIN)?</h2>
      <div className="wrapper-81z">
        <label htmlFor="ein">EIN</label>
        <input
          type="text"
          id="ein"
          name="ein"
          placeholder="00-0000000"
          value={ein}
          onChange={handleEINChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-3k7"></span>
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          
        </button>
        <div className="dis-y6i">
          If you're a sole proprietor and your SSN is your TaxID, please select the  button.
        </div>
      </div>
    </div>
  );
};

export default BusinessTaxIDForm;
