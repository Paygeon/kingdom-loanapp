import React from 'react';

const BusinessStartDateForm: React.FC = () => {
  return (
    <div className="form-nl1 vis-h5b">
      <h2>When did you start your business?</h2>
      <div className="wrapper-bv7">
        <div className="dates-dlh">
          <div className="date-idl">
            <label htmlFor="startMonth">Month</label>
            <input
              type="text"
              id="startMonth"
              name="month-When did you start your business?"
              placeholder="MM"
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="date-idl" style={{ display: 'none' }}>
            <label htmlFor="startDay"></label>
            <input
              type="text"
              id="startDay"
              name="day-When did you start your business?"
              placeholder="DD"
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
          <div className="date-idl">
            <label htmlFor="startYear">Year</label>
            <input
              type="text"
              id="startYear"
              name="year-When did you start your business?"
              placeholder="YYYY"
              className="border border-gray-400 rounded-md p-2"
            />
          </div>
        </div>
        <span className="error-8y9"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessStartDateForm;
