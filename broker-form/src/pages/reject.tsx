/* eslint-disable @typescript-eslint/no-explicit-any */
// import { Select } from "antd"


import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import Loader from "../components/Loader"
import NotFound from '../components/404';
import FirebaseService from "../services/FirebaseService";
import RejectLoanForm from "../components/RejectForm";


interface Data{
    [key:string]:any
}


export default function RejectLoan(){
    const [loading,setLoading] = useState(true)
    const [applicationData,setApplicationData] = useState<Data | null>(null)
    const {loan_id} = useParams()
    useEffect(()=>{
        async function getData(){
            if(loan_id){
                const response = await FirebaseService.getData(loan_id)
                if(response.status == "success"){
                    setApplicationData(response.data as Data)
                }
            }
            setLoading(false)
        }
        getData()
        console.log(loan_id)
    },[loan_id])
    
    if(loading) return <Loader/>;
    if(applicationData === null){
        return (
            <div className="container">
                <NotFound/>
            </div>
        )
    }
    return (
        <RejectLoanForm
            email={applicationData.email}
            businessName={applicationData.businessName}
        />
    )
}