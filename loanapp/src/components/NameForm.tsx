import React from 'react';

const NameForm: React.FC = () => {
  return (
    <div className="form-8oa vis-a38">
      <h2>What is your name?</h2>
      <div className="wrapper-d83">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          id="firstName"
          name="What is your name?-firstName"
          placeholder="First Name"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-ohz"></span>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="What is your name?-lastName"
          placeholder="Last Name"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-ohz"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default NameForm;
