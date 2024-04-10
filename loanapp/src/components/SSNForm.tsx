import React, { useState } from 'react';

const SSNForm: React.FC = () => {
  const [ssn, setSSN] = useState<string>('');

  const handleSSNChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSSN(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div>
      <h2>What is your SSN?</h2>
      <div className="wrapper-iyj">
        <label htmlFor="Wha-4wi">SSN</label>
        <input
          type="text"
          id="Wha-4wi"
          name="What is your SSN?"
          placeholder="012-34-5678"
          value={ssn}
          onChange={handleSSNChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-3aq"></span>
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
      <div className="dis-a52">
        Clicking the Next button to see the offers page will not affect your credit score. As part of our services, we
        will look at your credit report. This is not a hard credit check, will not register as an inquiry, and will not
        adversely affect your credit. Your SSN details are protected.
      </div>
    </div>
  );
};

export default SSNForm;
