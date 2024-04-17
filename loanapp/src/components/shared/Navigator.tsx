import { useContext } from "react"
import { DataContext } from "../../context/DataContext"
import NeoPopTiltedButton from "../buttons/NeoPopTiltedButton"
import forms from "../../constants/forms"
import { NavigatorProps } from "../../interfaces"


export default function Navigator({verifyForm}:NavigatorProps){
    const {currentStep,previousStep,nextStep,submitData} = useContext(DataContext)

    const handleNext = ()=> {
      const error = verifyForm()
      if(error.isValid){
        return nextStep()
      }
      alert(error.message)
    }
    const handleSubmit = async()=> {
      const error = verifyForm()
      if(error.isValid){
        return await submitData()
      }
      alert(error.message)
    }
    return(
        <div className="md:flex my-8 items-center gap-16">
        {currentStep > 0 && (
          <div className="hidden md:block my-6 md:my-0">
            <NeoPopTiltedButton onClick={previousStep}>Previous Screen</NeoPopTiltedButton>
          </div>
        )}
        {currentStep < forms.length - 1 && (
        <div className="ml-auto"> 
          <NeoPopTiltedButton onClick={handleNext}>Next Screen →</NeoPopTiltedButton>
        </div>
      )}
      {currentStep === forms.length - 1 && (
        <div className="ml-auto">
          <NeoPopTiltedButton onClick={handleSubmit}>Submit →</NeoPopTiltedButton>
        </div>
      )}
      </div>
    )
}