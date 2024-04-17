import Navigator from './shared/Navigator';
import useAddressForm from '../hooks/useAddressForm';

const BusinessAddressForm: React.FC = () => {
   const {
    addressInfo,
    verifyForm,
    handleAptChange,
    handleCityChange,
    handleStateChange,
    handleStreetChange,
    handleUseAsHomeAddressChange,
    handleZipChange,
    handleHomeZipChange,
    handleHomeAptChange,
    handleHomeCityChange,
    handleHomeStateChange,
    handleHomeStreetChange,
    isHomeAddress,
    homeAddressInfo
    } =
    useAddressForm()


  return (
    <>
    <div className="form-dfr vis-r4o">
      <h2 className="mb-8">What is your business address?</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="">
        <label htmlFor="loanAmount" className="text-lg my font-bold"> Address</label>
          <input
            type="text"
            id="street"
            name="street"
            style={{color:"black",textAlign:"left",padding:"8px"}}
            placeholder="123 Main St"
            value={addressInfo.address}
            onChange={handleStreetChange}
            className="border border-gray-400 rounded-md p-2"
          />
          <span className="error-9pr"></span>
        </div>

      <div>
      <label htmlFor="apt" className="text-lg my font-bold">Apt</label>
        <input
          type="text"
          id="apt"
          name="apt"
          style={{color:"black",textAlign:"left",padding:"8px"}}
          placeholder="123"
          value={addressInfo.apt}
          onChange={handleAptChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-9pr"></span>
      </div>

      <div>
      <label htmlFor="zip" className="text-lg my font-bold">Postal Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={addressInfo.postalCode}
            style={{color:"black",textAlign:"left",padding:"8px"}}
            onChange={handleZipChange}
            className="border border-gray-400 rounded-md  p-2"
          />
          <span className="error-9pr"></span>
      </div>
      <div>
        <label htmlFor="state" className="text-lg my font-bold">State</label>
            <input
              // id="state"
              name="state"
              style={{color:"black",textAlign:"left",padding:"24px 8px"}}
              value={addressInfo.state}
              onChange={handleStateChange}
              className="border border-gray-400 text-xl font-medium text-center w-full rounded-xl p-2"
          />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="city" className="text-lg my font-bold">City</label>
          <input
            type="text"
            id="city"
            name="city"
            style={{color:"black",textAlign:"left",padding:"8px"}}
            placeholder="Charleston"
            value={addressInfo.city}
            onChange={handleCityChange}
            className="border border-gray-400 rounded-md p-2"
          />
          <span className="error-9pr"></span>
      </div>
      <div className="flex items-center gap-2">
            <input
                type="checkbox"
                id="useAsHomeAddress"
                name="useAsHomeAddress"
                style={{color:"black",height:"24px", width:"24px",borderRadius:"10px"}}
                checked={isHomeAddress}
                onChange={handleUseAsHomeAddressChange}
                className="rounded-md"
              />
              <label htmlFor="useAsHomeAddress" className="text-lg my font-bold" style={{ display: 'inline-block' }}>
              Use my business address as home address
            </label>
      </div>
      </div>
      {!isHomeAddress?(
        <>
        <h2 className="mb-8 mt-8">What is your Home address?</h2>
        <div className="grid md:grid-cols-2 gap-8">
        <div className="">
        <label htmlFor="loanAmount" className="text-lg my font-bold"> Address</label>
          <input
            type="text"
            id="street"
            name="street"
            style={{color:"black",textAlign:"left",padding:"8px"}}
            placeholder="123 Main St"
            value={homeAddressInfo.address}
            onChange={handleHomeStreetChange}
            className="border border-gray-400 rounded-md p-2"
          />
          <span className="error-9pr"></span>
        </div>

      <div>
      <label htmlFor="apt" className="text-lg my font-bold">Apt</label>
        <input
          type="text"
          id="apt"
          name="apt"
          style={{color:"black",textAlign:"left",padding:"8px"}}
          placeholder="123"
          value={homeAddressInfo.apt}
          onChange={handleHomeAptChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-9pr"></span>
      </div>

      <div>
      <label htmlFor="zip" className="text-lg my font-bold">Postal Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={homeAddressInfo.postalCode}
            style={{color:"black",textAlign:"left",padding:"8px"}}
            onChange={handleHomeZipChange}
            className="border border-gray-400 rounded-md  p-2"
          />
          <span className="error-9pr"></span>
      </div>
      <div>
        <label htmlFor="state" className="text-lg my font-bold">State</label>
            <input
              // id="state"
              name="state"
              style={{color:"black",textAlign:"left",padding:"24px 8px"}}
              value={homeAddressInfo.state}
              onChange={handleHomeStateChange}
              className="border border-gray-400 text-xl font-medium text-center w-full rounded-xl p-2"
          />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="city" className="text-lg my font-bold">City</label>
          <input
            type="text"
            id="city"
            name="city"
            style={{color:"black",textAlign:"left",padding:"8px"}}
            placeholder="Charleston"
            value={homeAddressInfo.city}
            onChange={handleHomeCityChange}
            className="border border-gray-400 rounded-md p-2"
          />
          <span className="error-9pr"></span>
      </div>

      </div>
      </>
      ):null}
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessAddressForm;
