import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import NeoPopTiltedButton from "../buttons/NeoPopTiltedButton"
import forms from "../../constants/forms"
import { NavigatorProps } from "../../interfaces"
import useMessage from "antd/es/message/useMessage"


export default function Navigator({verifyForm}:NavigatorProps){
    const {currentStep,nextStep,submitData} = useContext(DataContext)
    const [message,context] = useMessage()

    const handleNext = ()=> {
      const error = verifyForm()
      if(error.isValid){
        return nextStep()
      }
      // alert(error.message)
      message.error(error.message)
    }
    const handleSubmit = async()=> {
      const error = verifyForm()
      if(error.isValid){
        return await submitData()
      }
      message.error(error.message)
    }
    return(
      <div className="shadow-md fixed bg-white bottom-0 left-0 w-full md:pb-4 md:px-4">
      {context}
       <div className="flex border-t border-dark-100 max-w-5xl p-4 mx-auto items-center gap-16">
        {currentStep < forms.length - 1 && (
        <div className="ml-auto"> 
          <NeoPopTiltedButton onClick={handleNext}>Next</NeoPopTiltedButton>
        </div>
      )}
      {currentStep === forms.length - 1 && (
        <div className="ml-auto">
          <NeoPopTiltedButton onClick={handleSubmit}>Submit</NeoPopTiltedButton>
        </div>
      )}
      </div>
      </div>
    )
}