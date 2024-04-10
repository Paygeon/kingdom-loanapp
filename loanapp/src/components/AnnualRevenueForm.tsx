import React from 'react';

const AnnualRevenueForm: React.FC = () => {
  return (
    <div className="form-wzh">
      <h2>What's your annual revenue?</h2>
      <div className="wrapper-b8b">
        <label htmlFor="annualRevenue">Annual Revenue</label>
        <input
          type="text"
          id="annualRevenue"
          name="What's your annual revenue?"
          placeholder="500,000"
          className="border border-gray-400 rounded-md p-2"
        />
        <i className="dollar-tvy">$</i>
        <span className="error-p9f"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
      <div className="dis-9w8"></div>
    </div>
  );
};

export default AnnualRevenueForm;
