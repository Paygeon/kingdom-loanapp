// lender = body["broker_name"]
// lender_email = body["broker_email"]
// amount = body["amount"]
// business_name = body["businessName"]
// borrower = body["borrower"]
// commision = body["commission"]
// notes = body["notes"]

import { message } from "antd";
import { ChangeEventHandler, FormEventHandler, useState } from "react";
export default function useForm(email:string,businessName:string){
    const [api,contextHolder] = message.useMessage()
    const [accepted,setAccepted] = useState(false)
    const [rejected,setRejected] = useState(false)
    const [notes,setNotes] = useState("")
    const [lender,setLender] = useState("")
    const [commission,setCommision] = useState(10)
    const [amount,setAmount] = useState("")
    const [loadingSubmit,setSubmitLoading] = useState(false)

    const validateData = ()=>{
        if(!(parseFloat(amount) || parseFloat(amount) > 0)) return {isValid:false,message:"loan amount should be greater than 0"}
        if(!lender) return {isValid:false,message:"Lender is required"};
        if(lender.trim().length === 0) return {isValid:false,message:"Lender is required"}
        if(lender.trim().length < 3) return {isValid:false,message:"Lendername should atleast be 3 characters"}
        return {isValid:true,message:""}
    }

    const handleSubmit:FormEventHandler<HTMLFormElement> = async(e)=>{
        e.preventDefault()
        const {isValid,message} = validateData()
        if(!isValid){
            api.error(message)
            return;
        }
        setSubmitLoading(true)
        try {
            const response = await fetch("http://localhost:3000/_hooks/broker-acceptance",{
            method: "POST",
            headers:{
                "Content-Type": "application/json",
            },
            body:JSON.stringify({
                notes,
                brokerName:lender,
                brokerEmail:"codablack24@gmail.com",
                amount,
                businessName,
                borrower:email,
                commission
            })
        })
        const data = await response.json()
        if(data.status !== "success"){
           return api.error(data.error_message)
         }
         setAccepted(true)
        } catch (error) {
            console.log(error)
            
            api.error("Sorry could not approve application at the moment try again later")
        }finally{
            setSubmitLoading(false)
        }
    }
    const handleSetNotes:ChangeEventHandler<HTMLTextAreaElement> = (e)=>{
        setNotes(e.target.value)
    }
    const handleSetAmount:ChangeEventHandler<HTMLInputElement> = (e)=>{
        setAmount(e.target.value)
    }
    const handleSetCommsion = (commision:number)=>{
        setCommision(commision)
    }
    const handleSetLender = (value:string)=>{
        setLender(value)
    }

    return{
        handleSetNotes,
        notes,
        rejected,
        setRejected,
        accepted,
        handleSetAmount,
        amount,
        handleSetCommsion,
        commission,
        handleSetLender,
        lender,
        contextHolder,
        handleSubmit,
        loadingSubmit
    }
}