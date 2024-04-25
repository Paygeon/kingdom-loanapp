import { useState } from "react";
import FirebaseService from "../services/FirebaseService";
// import forms from "../constants/forms";
import useMessage from "antd/es/message/useMessage";

interface AddressInfo{
    address: string,
    apt:string,
    city:string,
    state:string,
    postalCode:string,

}

export default function useData(){
    const [completedStep,setCompletedStep] = useState<number[]>([0])
    const [isSubmitted,setIsSubmitted] = useState(false);
    const [isAuthorizedOwner,setIsAuthorizedOwner] = useState(true);
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
    const [password,setPassword] = useState("")
    const [ownershipDetails,setOwnershipDetails] = useState({
        ownershipPercentage:0,
        isAuthorizedOwner:false,
    })
    const [ssn,setSSN] = useState("")
    const [addressInfo,setAddressInfo] = useState<AddressInfo>({
            address: "",
            apt:"",
            city:"",
            state:"",
            postalCode:"",

    })
    const [homeAddressInfo,setHomeAddressInfo] = useState<AddressInfo>({
            address: "",
            apt:"",
            city:"",
            state:"",
            postalCode:"",

    })
    const [businessTaxID,setBusinessTaxID] = useState("")
    const [signature,setSignature] = useState("")
    const [bankStatement,setBankStatement] = useState("")
    const [message,context] = useMessage()
    const nextStep = () => {
        setCurrentStep(currentStep + 1);
        if(!completedStep.includes(currentStep + 1)){
            setCompletedStep(prev=>[...prev,currentStep+1])
        }
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
        isAuthorizedOwner,
        ssn,
        addressInfo,
        })
        
        if(response.status !== "success"){
            // alert("Your form have been submitted and we will get back to you as soon we process this info")
            message.error(response.errror_message)
            return;
        }
        const response2 = await FirebaseService.createUser(email,password)
        setLoading(false)
        if(response2.status !== "success"){
            message.error(response.errror_message)
            return;
        }
        setIsSubmitted(true)
    }

    return {
        businessType,
        isSubmitted,
        setBusinessType,
        isAuthorizedOwner,
        setIsAuthorizedOwner,
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
        password,
        setPassword,
        currentStep,
        ownershipDetails,
        setOwnershipDetails,
        ssn,
        setSSN,
        addressInfo,
        setAddressInfo,
        homeAddressInfo,
        setHomeAddressInfo,
        submitData,
        isLoading,
        setCurrentStep,
        completedStep,
        context
    }
}