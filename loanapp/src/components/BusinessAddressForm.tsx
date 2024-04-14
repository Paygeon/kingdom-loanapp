import React, { useContext } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';

const BusinessAddressForm: React.FC = () => {
  const {addressInfo,setAddressInfo} = useContext(DataContext)

  // const [street, setStreet] = useState<string>('');
  // const [apt, setApt] = useState<string>('');
  // const [zip, setZip] = useState<string>('');
  // const [state, setState] = useState<string>('');
  // const [city, setCity] = useState<string>('');
  // const [useAsHomeAddress, setUseAsHomeAddress] = useState<boolean>(false);

  const handleStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInfo({
      ...addressInfo,
      address: event.target.value,
    })
  };

  const handleAptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInfo({
      ...addressInfo,
      apt: event.target.value,
    })
  };

  const handleZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInfo({
      ...addressInfo,
      postalCode: event.target.value,
    })
  };

  const handleStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInfo({
      ...addressInfo,
      state: event.target.value,
    })
  };

  const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInfo({
      ...addressInfo,
      city: event.target.value,
    })
  };

  const handleUseAsHomeAddressChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAddressInfo({
      ...addressInfo,
      isHomeAddress: event.target.checked,
    })
  };

  const verifyForm= ()=>{
    if(!(addressInfo.address && addressInfo.city && addressInfo.apt && addressInfo.postalCode && addressInfo.state)){
      return {
        isValid:false,
        message:"Some fields are still missing please fill them out",
      }
    }
    if(addressInfo.address.trim().length < 3){
      return{
        isValid:false,
        message:"your address should atleast be 3 characters long"
      }
    } 
    if(addressInfo.postalCode.trim().length < 3){
      return{
        isValid:false,
        message:"your Postal should atleast be 3 characters long"
      }
    } 
    if(addressInfo.state.trim().length < 3){
      return{
        isValid:false,
        message:"your state should atleast be 3 characters long"
      }
    } 
    if(addressInfo.city.trim().length < 3){
      return{
        isValid:false,
        message:"your city should atleast be 3 characters long"
      }
    } 
    if(addressInfo.apt.trim().length < 3){
      return{
        isValid:false,
        message:"your apt should atleast be 3 characters long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }

  // const handleSubmit = () => {
  //   // Handle form submission
  // };

  return (
    <>
    <div className="form-dfr vis-r4o">
      <h2>What is your business address?</h2>
      <div className="wrapper-oyw">
        <label htmlFor="street">Address</label>
        <input
          type="text"
          id="street"
          name="street"
          style={{color:"black"}}
          placeholder="123 Main St"
          value={addressInfo.address}
          onChange={handleStreetChange}
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-9pr"></span>
        <label htmlFor="apt">Apt</label>
        <input
          type="text"
          id="apt"
          name="apt"
          style={{color:"black"}}
          placeholder="123"
          value={addressInfo.apt}
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
              value={addressInfo.postalCode}
              style={{color:"black"}}
              onChange={handleZipChange}
              className="border border-gray-400 rounded-md  p-2"
            />
            <span className="error-9pr"></span>
          </div>
          <div style={{ flex: 1 }}>
            <label htmlFor="state">State</label>
            <div className="wrapper-s2r">
              <input
                id="state"
                name="state"
                style={{color:"black"}}
                value={addressInfo.state}
                onChange={handleStateChange}
                className="border border-gray-400 text-xl font-medium text-center w-full py-4 rounded-xl p-2"
               />
            </div>
            <span className="error-9pr"></span>
          </div>
        </div>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          name="city"
          style={{color:"black"}}
          placeholder="Charleston"
          value={addressInfo.city}
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
              style={{color:"black"}}
              checked={addressInfo.isHomeAddress}
              onChange={handleUseAsHomeAddressChange}
              className="style-s6y13"
            />
          </label>
        </div>
    
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
    </>
  );
};

export default BusinessAddressForm;
