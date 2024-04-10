import React from 'react';

const FundingReasonForm: React.FC = () => {
  return (
    <div className="form-sav vis-j1b">
      <h2>What are you seeking funding for?</h2>
      <div className="wrapper-z13">
        <div className="wrapper-pem relative">
          <select
            id="loanReason"
            name="Loan Reason"
            className="border border-gray-400 rounded-md p-2 appearance-none"
          >
            <option value="">Select One</option>
            <option value="expansion">Expansion</option>
            <option value="buy_equipment">Equipment Purchase</option>
            <option value="finance_ar">Finance Accounts Receivable</option>
            <option value="inventory">Inventory</option>
            <option value="marketing">Marketing / Sales</option>
            <option value="payroll">Payroll</option>
            <option value="buy_vehicle">Purchase Vehicle(s)</option>
            <option value="remodel">Remodel Building</option>
            <option value="refinance">Refinance Debt</option>
            <option value="capital_cash_flow">Working Capital / Cash Flow</option>
            <option value="other">Other</option>
          </select>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="select-handle absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            ></path>
          </svg>
        </div>
        <span className="error-vlw"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default FundingReasonForm;
