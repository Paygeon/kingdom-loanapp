import { useContext, useState, useEffect } from "react";
import {DataContext} from "../context/DataContext";

export default function useAddressForm(){
    const {addressInfo,setAddressInfo,homeAddressInfo,setHomeAddressInfo} = useContext(DataContext)
    const [isHomeAddress,setIsHomeAddress] = useState(true)
  
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
  
    const handleUseAsHomeAddressChange = (value:boolean) => {
      return ()=>{
        setIsHomeAddress(value)
      }
    };


  const handleHomeStreetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHomeAddressInfo({
        ...homeAddressInfo,
        address: event.target.value,
      })
    };
  
    const handleHomeAptChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHomeAddressInfo({
        ...homeAddressInfo,
        apt: event.target.value,
      })
    };
  
    const handleHomeZipChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHomeAddressInfo({
        ...homeAddressInfo,
        postalCode: event.target.value,
      })
    };
  
    const handleHomeStateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHomeAddressInfo({
        ...homeAddressInfo,
        state: event.target.value,
      })
    };
  
    const handleHomeCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setHomeAddressInfo({
        ...homeAddressInfo,
        city: event.target.value,
      })
    };


    const verifyForm= ()=>{
      if(!(addressInfo.address && addressInfo.city && addressInfo.postalCode && addressInfo.state)){
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
      if(addressInfo.state.trim().length < 2){
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
      if(!(homeAddressInfo.address && homeAddressInfo.city && homeAddressInfo.postalCode && homeAddressInfo.state)){
        return {
          isValid:false,
          message:"Some fields are still missing in your home address form please fill them out",
        }
      }
      if(homeAddressInfo.address.trim().length < 3){
        return{
          isValid:false,
          message:"your home address should atleast be 3 characters long"
        }
      } 
      if(homeAddressInfo.postalCode.trim().length < 3){
        return{
          isValid:false,
          message:"your home postal code should atleast be 3 characters long"
        }
      } 
      if(homeAddressInfo.state.trim().length < 2){
        return{
          isValid:false,
          message:"your home state should atleast be 3 characters long"
        }
      } 
      if(homeAddressInfo.city.trim().length < 3){
        return{
          isValid:false,
          message:"your home city should atleast be 3 characters long"
        }
      }
      return {
        isValid:true,
        message:null
      }
    }

    useEffect(() => {
        if(isHomeAddress){
          setHomeAddressInfo(addressInfo)
        }
      },[addressInfo,isHomeAddress,setHomeAddressInfo])
  
    return {
        verifyForm,
        handleAptChange,
        handleCityChange,
        handleStateChange,
        handleStreetChange,
        handleUseAsHomeAddressChange,
        handleZipChange,
        handleHomeAptChange,
        handleHomeCityChange,
        handleHomeStateChange,
        handleHomeStreetChange,
        handleHomeZipChange,
        homeAddressInfo,
        addressInfo,
        isHomeAddress
    }
}