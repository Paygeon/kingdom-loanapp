import React from 'react';

const EmailForm: React.FC = () => {
  return (
    <div>
      <h2>What's your email address?</h2>
      <div className="wrapper-98c">
        <label htmlFor="emailAddress">Email Address</label>
        <input
          type="email"
          id="emailAddress"
          name="What's your email address?"
          placeholder="email@company.com"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-jws"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
      <div className="dis-y6i mt-4">
        <p>
          You understand that by clicking on the Next button that you are providing written instructions to
          Carat Card Club (Paygeon.com) under the Fair Credit Reporting Act authorizing Carat Card Club
          (Paygeon.com) to obtain information from your personal credit profile or other information
          from a national credit reporting agency. You acknowledge by clicking the Next button that you are
          a business owner and are personally liable for this business transaction. You authorize Carat Card Club
          (Paygeon.com) to obtain such information for the purposes of matching you with our network
          partners.
        </p>
      </div>
    </div>
  );
};

export default EmailForm;
