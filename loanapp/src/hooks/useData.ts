import { useState } from "react";
import FirebaseService from "../services/FirebaseService";

interface AddressInfo{
    address: string,
    apt:string,
    isHomeAddress:boolean,
    city:string,
    state:string,
    postalCode:string,

}

export default function useData(){
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [isLoading,setLoading] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [businessType,setBusinessType] = useState("");
    const [dateOfBirth,setDateOfBirth] = useState("")
    const [loanAmount,setLoanAmount] = useState(0);
    const [loanReason,setLoanReason] = useState("");
    const [businessStartDate,setBusinessStartDate] = useState("");
    const [annualRevenue,setAnnualRevenue] = useState(0);
    const [creditScore,setCreditScore] = useState("");
    const [industry,setIndustry] = useState("");
    const [businessZipCode,setBusinessZipCode] = useState("");
    const [businessName,setBusinessName] = useState("");
    const [personalDetails,setPersonalDetails] = useState({
        firstname:"",
        lastname:""
    })
    const [phone,setPhone] = useState("")
    const [email,setEmail] = useState("")
    const [ownershipDetails,setOwnershipDetails] = useState({
        ownershipPercentage:0,
        isAuthorizedOwner:false,
    })
    const [ssn,setSSN] = useState("")
    const [addressInfo,setAddressInfo] = useState<AddressInfo>({
            address: "",
            apt:"",
            isHomeAddress:true,
            city:"",
            state:"",
            postalCode:"",

    })
    const [businessTaxID,setBusinessTaxID] = useState("")
    const [signature,setSignature] = useState("")
    const [bankStatement,setBankStatement] = useState("")

    const nextStep = () => {
        setCurrentStep(currentStep + 1);
    };

    const previousStep = () => {
        setCurrentStep(currentStep - 1);
    };
    const submitData=async ()=>{
        setLoading(true)
        const response = await FirebaseService.create({
        businessType,
        loanAmount,
        loanReason,
        businessStartDate,
        annualRevenue,
        creditScore,
        industry,
        businessZipCode,
        businessName,
        personalDetails,
        dateOfBirth,
        businessTaxID,
        signature,
        bankStatement,
        phone,
        email,
        currentStep,
        ownershipDetails,
        ssn,
        addressInfo,
        })
        setLoading(false)
        if(response.status === "success"){
            alert("Your form have been submitted and we will get back to you as soon we process this info")
            setIsSubmitted(true)
        }
        else{
            alert(response.errror_message)
        }
    }

    return {
        businessType,
        isSubmitted,
        setBusinessType,
        loanAmount,
        setLoanAmount,
        loanReason,
        setLoanReason,
        businessStartDate,
        setBusinessStartDate,
        annualRevenue,
        setAnnualRevenue,
        creditScore,
        setCreditScore,
        industry,setIndustry,
        businessZipCode,setBusinessZipCode,
        businessName,
        setBusinessName,
        personalDetails,
        setPersonalDetails,
        dateOfBirth,
        setDateOfBirth,
        businessTaxID,
        setBusinessTaxID,
        signature,
        setSignature,
        nextStep,
        previousStep,
        bankStatement,
        setBankStatement,
        phone,
        setPhone,
        email,
        setEmail,
        currentStep,
        ownershipDetails,
        setOwnershipDetails,
        ssn,
        setSSN,
        addressInfo,
        setAddressInfo,
        submitData,
        isLoading,
    }
}