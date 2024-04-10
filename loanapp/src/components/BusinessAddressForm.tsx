import React, { useState } from 'react';

const BusinessAddressForm: React.FC = () => {
  const [street, setStreet] = useState<string>('');
  const [apt, setApt] = useState<string>('');
  const [zip, setZip] = useState<string>('');
  const [state, setState] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [useAsHomeAddress, setUseAsHomeAddress] = useState<boolean>(false);

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const handleAptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApt(event.target.value);
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setZip(event.target.value);
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setState(event.target.value);
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const handleUseAsHomeAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUseAsHomeAddress(event.target.checked);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="form-dfr vis-r4o">
      <h2>What is your business address?</h2>
      <div className="wrapper-oyw">
        <label htmlFor="street">Address</label>
        <input
          type="text"
          id="street"
          name="street"
          placeholder="123 Main St"
          value={street}
          onChange={handleStreetChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-9pr"></span>
        <label htmlFor="apt">Apt</label>
        <input
          type="text"
          id="apt"
          name="apt"
          placeholder="123"
          value={apt}
          onChange={handleAptChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-9pr"></span>
        <div className="d-sry">
          <div>
            <label htmlFor="zip">Postal Code</label>
            <input
              type="text"
              id="zip"
              name="zip"
              value={zip}
              onChange={handleZipChange}
              className="border border-gray-400 rounded-md p-2"
            />
            <span className="error-9pr"></span>
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="state">State</label>
            <div className="wrapper-s2r">
              <select
                id="state"
                name="state"
                value={state}
                onChange={handleStateChange}
                className="border border-gray-400 rounded-md p-2"
              >
                {/* Options */}
              </select>
            </div>
            <span className="error-9pr"></span>
          </div>
        </div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          placeholder="Charleston"
          value={city}
          onChange={handleCityChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-9pr"></span>
        <div className="vis-r4o">
          <label htmlFor="useAsHomeAddress" style={{ display: 'inline-block' }}>
            Use my business address as home address
            <input
              type="checkbox"
              id="useAsHomeAddress"
              name="useAsHomeAddress"
              checked={useAsHomeAddress}
              onChange={handleUseAsHomeAddressChange}
              className="style-s6y13"
            />
          </label>
        </div>
        <button type="button" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
    </div>
  );
};

export default BusinessAddressForm;
