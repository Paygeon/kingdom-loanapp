import { message, Spin } from "antd";
import { FormEvent, useState } from "react";

interface CheckBoxProps{
    checked?: boolean;
    onCheck?: () => void;
}
interface Props{
    email:string,
    businessName:string,
}
const creditPulledOptions = [
    "Equifax",
    "Experian",
    "Transunion"
]
const reasonsOptions = [
    "Not enough revenue",
    "Not enough time in business",
    "Credit score is too low"
]

function Checkbox(props:CheckBoxProps){
    const {checked, onCheck} = props;
    if (checked){
        return (
            <button onClick={onCheck} type="button" className="h-4 flex items-center justify-center w-4 cursor-pointer rounded-full border bg-dark border-dark">
                <span className="h-[6px] inline-block w-[6px] rounded-full bg-white"></span>
            </button>
        )
    }
    return (
        <button onClick={onCheck} type="button" className="h-4 w-4 cursor-pointer rounded-full border border-dark"></button>
    )
}

export default function RejectLoanForm(props:Props){
    const [successful,setSuccessful] = useState(false)
    const [api,contextHolder] = message.useMessage()
    const [creditPulled,setCreditPulled] = useState(false)
    const [loading,setLoading] = useState(false)
    const [creditPulledReport,setCreditPulledReport] = useState<string[]>([])
    const [reasons,setReasons] = useState<string[]>([])
    const handleCheck=(value:string)=>{
        return ()=>{
            if(reasons.includes(value)) {
                return setReasons(prev=>prev.filter(r=>r!== value))
            }
            setReasons(prev=>[...prev,value])
        }
    } 
    const handleCheck2=(value:string)=>{
        return ()=>{
            if(creditPulledReport.includes(value)) {
                return setCreditPulledReport(prev=>prev.filter(r=>r!== value))
            }
            setCreditPulledReport(prev=>[...prev,value])
        }
    }
    async function handleSubmit(e:FormEvent<HTMLFormElement>){
        e.preventDefault()
        if(reasons.length === 0){
            return api.error("Please select atleast one reason for rejecting this application")
        }
        setLoading(true)
        try {
            const data = {
                reasons:reasons.join(", "),
                businessName:props.businessName,
                borrower:props.email,
                creditPulled:creditPulled?"Yes":"No",
                creditPulledBureau:creditPulledReport
            }
            const body = JSON.stringify(data)
            console.log(body)
            const query = await fetch("http://localhost:3000/_hooks/reject-application",{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body
            })
            const response = await query.json()
            console.log(response)
            if(response.status !== "success"){
                return api.error(response.error_message)
            }
            setSuccessful(true)
        } catch (error) {
            console.log(error)
            api.error("Sorry could reject application at the time please try again later")
        }
        finally{
            setLoading(false)
        }
    }
    if(successful){
        return(
            <div className="my-20 p-4 text-center max-w-[600px] mx-auto">
                <p className="text-2xl sm:text-5xl font-bold text-dark border-r pr-2">Application Rejected</p>
                <p className="sm:text-lg my-3 text-dark">You have successfully rejected a loan application from <b>{props.businessName}</b>, we would reach out to this business with reasons why you didn't approve this loan</p>
            </div>
        )
    }
    return (
        <>
        {contextHolder}
        <div className="container">
            <form onSubmit={handleSubmit} className="text-sm sm:text-lg w-full sm:max-w-[600px] p-2 sm:p-8 py-6" action="">
                <p className="text-2xl sm:text-4xl font-bold text-dark">Why are they denied?</p>
                <p className="text-lg mt-2">Select All that Applies</p>
                <div className="my-8">
                    {reasonsOptions.map((reason)=>{
                        return (
                            <div className="">
                                <div key={reason} className="flex items-center gap-2 my-3">
                                    <Checkbox onCheck={handleCheck(reason)} checked={reasons.includes(reason)}/>
                                    <p className="capitalize">{reason}</p>
                                </div>
                                {
                                    reason === "Credit score is too low" && (reasons.includes("Credit score is too low"))
                                    ?(
                                     <div className="ml-8">
                                        <p>Was a credit report pulled?</p>
                                        <div className="flex gap-4 items-center">
                                            <div key={reason} className="flex items-center gap-2 my-3">
                                                <Checkbox onCheck={()=>setCreditPulled(true)} checked={creditPulled}/>
                                                <p className="capitalize">Yes</p>
                                            </div>
                                            <div key={reason} className="flex items-center gap-2 my-3">
                                                <Checkbox onCheck={()=>setCreditPulled(false)} checked={!creditPulled}/>
                                                <p className="capitalize">No</p>
                                            </div>
                                        </div>
                                     </div>
                                    )
                                    :null
                                }
                            </div>
                        )
                    })}
                    {
                    creditPulled?(
                        <div className="ml-8">
                            <p className="mb-2">From which bureau?</p>
                        {creditPulledOptions.map(option=>{
                            return (
                                <div className="flex my-1 items-center gap-2" key={option}>
                                    <Checkbox onCheck={handleCheck2(option)} checked={creditPulledReport.includes(option)}/>
                                    <p>{option}</p>
                                </div>
                            )
                        })}
                        </div>
                    ):null
                }
                </div>
                <div className="flex justify-end">
                      <button disabled={loading} className="border disabled:cursor-not-allowed border-dark px-8 py-2 rounded-full">
                        {loading
                        ?(<Spin/>)
                        :"Submit"
                        }
                      </button>
                </div>
            </form>
        </div>
        </>
    )
}

