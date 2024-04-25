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
    <div className="mb-32">
      <h2 className="mb-8 font-bold text-dark text-2xl max-w-3xl md:text-5xl">What is your Address?</h2>

      <h2 className="font-semibold text-dark text-lg sm:text-3xl max-w-xl my-4 mb-6 md:text-2xl">Business Address</h2>
      <div className="sm:grid md:grid-cols-2 gap-4 gap-x-8 max-w-4xl">
        <div className="mb-4 sm:mb-0">
          <label htmlFor="loanAmount" className="text-sm sm:text-lg mx-4 text-dark-800 block font-medium"> Address</label>
          <input
            type="text"
            id="street"
            name="street"
            placeholder="123 Main St"
            value={addressInfo.address}
            onChange={handleStreetChange}
            className="bg-gray-100 text-sm sm:text-base w-full text-dark px-4 rounded-full p-2"
            style={{outline:"none"}}
          />
          <span className="error-9pr"></span>
        </div>

      <div className="mb-4 sm:mb-0">
        <label htmlFor="apt" className="text-sm sm:text-lg text-dark-800 mx-4 block font-medium">Apt</label>
        <input
          type="text"
          id="apt"
          name="apt"
          className="bg-gray-100 text-base w-full text-dark px-4 rounded-full p-3 sm:text-lg"
          style={{outline:"none"}}
          placeholder="123"
          value={addressInfo.apt}
          onChange={handleAptChange}
        />
        <span className="error-9pr"></span>
      </div>

      <div className="mb-4 sm:mb-0">
          <label htmlFor="zip" className="text-sm sm:text-lg text-dark-800 block mx-4 font-medium">Postal Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={addressInfo.postalCode}
            className="bg-gray-100 w-full text-dark px-4 rounded-full p-3 text-sm sm:text-lg"
            style={{outline:"none"}}
            onChange={handleZipChange}
          />
          <span className="error-9pr"></span>
      </div>

      <div className="mb-4 sm:mb-0">
            <label htmlFor="state" className="text-sm sm:text-lg text-dark-800 mx-4 block font-medium">State</label>
            <input
              name="state"
              className="bg-gray-100 w-full text-dark px-4 rounded-full p-3 text-sm sm:text-lg"
              style={{outline:"none"}}
              value={addressInfo.state}
              onChange={handleStateChange}
          />
      </div>

      <div className="md:col-span-2">
          <label htmlFor="city" className="text-sm sm:text-lg text-dark-800 block mx-4 font-medium">City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="bg-gray-100 w-full text-dark px-4 rounded-full p-3 text-sm sm:text-lg"
            style={{outline:"none"}}
            placeholder="Charleston"
            value={addressInfo.city}
            onChange={handleCityChange}
          />
          <span className="error-9pr"></span>
      </div>

      <div className="flex items-center ml-4 mt-6 col-span-2 gap-2">
              {/* <input
                type="checkbox"
                id="useAsHomeAddress"
                name="useAsHomeAddress"
                style={{color:"black",height:"20px", width:"20px",borderRadius:"10px"}}
                checked={isHomeAddress}
                onChange={handleUseAsHomeAddressChange}
                className="rounded-md cursor-pointer"
              /> */}
              <label 
              htmlFor=""
              onClick={handleUseAsHomeAddressChange(!isHomeAddress)}
              className={`h-5 w-5 sm:h-6 sm:w-6 ${isHomeAddress?"bg-dark":""} my-checkbox rounded-full border cursor-pointer border-dark flex items-center justify-center`}>
                {isHomeAddress?(
                  <i className="bi bi-check text-lg sm:text-2xl text-white"></i>
                ):null}
              </label>
              <label htmlFor="useAsHomeAddress" className="text-sm sm:text-lg text-dark-800 font-medium" >
              Use my business address as home address
            </label>
      </div>

      </div>
      {!isHomeAddress?(
        <>
       <h2 className="font-semibold text-dark text-lg max-w-xl my-4 mb-6 sm:text-2xl mt-12">Home Address</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
        <div className="">
        <label htmlFor="loanAmount" className="text-sm sm:text-lg block mx-4 font-medium text-dark"> Address</label>
          <input
            type="text"
            id="street"
            name="street"
            className="bg-gray-100 text-sm sm:text-base w-full text-dark px-4 rounded-full p-2"
            style={{outline:"none"}}
            placeholder="123 Main St"
            value={homeAddressInfo.address}
            onChange={handleHomeStreetChange}
          />
          <span className="error-9pr"></span>
        </div>

      <div>
      <label htmlFor="apt" className="text-sm sm:text-lg block mx-4 font-medium text-dark">Apt</label>
        <input
          type="text"
          id="apt"
          name="apt"
          className="bg-gray-100 w-full text-sm sm:text-base text-dark px-4 rounded-full p-2"
          style={{outline:"none"}}
          placeholder="123"
          value={homeAddressInfo.apt}
          onChange={handleHomeAptChange}
        />
        <span className="error-9pr"></span>
      </div>

      <div>
      <label htmlFor="zip" className="text-sm sm:text-lg block mx-4 font-medium text-dark">Postal Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            value={homeAddressInfo.postalCode}
            className="bg-gray-100 w-full text-sm sm:text-base text-dark px-4 rounded-full p-2"
            style={{outline:"none"}}
            onChange={handleHomeZipChange}
          />
          <span className="error-9pr"></span>
      </div>
      <div>
        <label htmlFor="state" className="text-sm sm:text-lg block mx-4 font-medium text-dark">State</label>
            <input
              // id="state"
              name="state"
              className="bg-gray-100 w-full text-sm sm:text-base text-dark px-4 rounded-full p-2"
              style={{outline:"none"}}
              value={homeAddressInfo.state}
              onChange={handleHomeStateChange}
          />
      </div>
      <div className="md:col-span-2">
        <label htmlFor="city" className="text-base sm:text-lg block mx-4 font-medium text-dark">City</label>
          <input
            type="text"
            id="city"
            name="city"
            className="bg-gray-100 text-sm sm:text-base w-full text-dark px-4 rounded-full p-2"
            style={{outline:"none"}}
            placeholder="Charleston"
            value={homeAddressInfo.city}
            onChange={handleHomeCityChange}
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
