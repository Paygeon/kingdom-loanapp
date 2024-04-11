import React from 'react';

const LoanAmountForm: React.FC = () => {
  return (
    <div className="form-r7n vis-t28">
      <h2>How much do you need?</h2>
      <div className="wrapper-ie2">
        <label htmlFor="loanAmount">Loan Amount</label>
        <input
          type="text"
          id="loanAmount"
          name="How much do you need?"
          placeholder="33,500"
          className="border border-gray-400 rounded-md p-2"
        />
        <i className="dollar-okz">$</i>
        <span className="error-5nq"></span>
      </div>
      <div className="dis-gsb"></div>
    </div>
  );
};

export default LoanAmountForm;
