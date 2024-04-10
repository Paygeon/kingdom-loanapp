import React from 'react';

const IndustryForm: React.FC = () => {
  return (
    <div className="form-5c5 vis-v6c">
      <h2>What industry are you in?</h2>
      <div className="wrapper-gfs">
        <div className="wrapper-33b relative">
          <select
            id="industry"
            name="Industry"
            className="border border-gray-400 rounded-md p-2 appearance-none"
          >
            <option value="">Select One</option>
            <option value="accommodation_food_services">Accommodation and Food Services</option>
            <option value="admin_support_waste_remediation">Administrative & Support and Waste Management & Remediation Services</option>
            <option value="agriculture_forestry">Agriculture, Forestry, Fishing and Hunting</option>
            <option value="arts_entertainment">Arts, Entertainment, and Recreation</option>
            <option value="construction">Construction</option>
            <option value="education">Educational Services</option>
            <option value="finance_insurance">Finance and Insurance</option>
            <option value="healthcare_social">Health Care and Social Assistance</option>
            <option value="information">Information</option>
            <option value="management_companies">Management of Companies and Enterprises</option>
            <option value="manufacturing">Manufacturing</option>
            <option value="mining">Mining</option>
            <option value="other">Other Services (except Public Administration)</option>
            <option value="science_tech">Professional, Scientific, and Technical Services</option>
            <option value="public_admin">Public Administration</option>
            <option value="real_estate">Real Estate Rental and Leasing</option>
            <option value="retail_trade">Retail Trade</option>
            <option value="transport_warehousing">Transportation and Warehousing</option>
            <option value="utilities">Utilities</option>
            <option value="wholesale_trade">Wholesale</option>
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
        <span className="error-qg2"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default IndustryForm;
