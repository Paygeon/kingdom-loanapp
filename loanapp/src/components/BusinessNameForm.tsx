import React from 'react';

const BusinessNameForm: React.FC = () => {
  return (
    <div className="form-9mr vis-bi7">
      <h2>What is your business name?</h2>
      <div className="wrapper-ehd">
        <label htmlFor="businessName">Business Name</label>
        <input
          type="text"
          id="businessName"
          name="What is your business name?"
          placeholder="Acme, Inc"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-lvg"></span>
        <div className="box-oxp vis-bi7">
          <div className="sug-976">
            <span></span> - We Suggest
          </div>
          <div className="con-yw9">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2 mr-2">
              Accept
            </button>
            <button className="bg-gray-500 text-white px-4 py-2 rounded-md mt-2">
              Ignore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessNameForm;
