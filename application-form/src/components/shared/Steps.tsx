import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import forms from "../../constants/forms";


export default function Steps(){
    const {currentStep} = useContext(DataContext)
    return(
        <div className="flex items-center py-4 gap-2 md:gap-4 justify-end sm:justify-center">
            <button className="h-6 w-6 sm:h-10 sm:w-10 text-xs sm:text-lg bg-dark text-white rounded-full flex items-center justify-center">{currentStep + 1}</button>
            <p>of</p>
            <button className="h-6 w-6 sm:h-10 sm:w-10 text-xs sm:text-lg rounded-full flex items-center justify-center bg-dark-200 text-gray-600">{forms.length}</button>
        </div>
    )
}