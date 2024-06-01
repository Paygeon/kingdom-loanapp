import logo from "../logo-full.png";
import Steps from "./shared/Steps";

export default function Header(){
    return (
        <header className="bg-white sticky top-0 z-100 p-4">
            <div className="max-w-5xl flex items-center justify-between mx-auto">
                <img className="max-w-[80px] sm:max-w-[160px]" src={logo} alt="Paygeon-Logo"/>
                <div className="sm:hidden">
                    <Steps/>
                </div>
            </div>
        </header>
    )
}

export function SubmitHeader(){
   return(
    <header className="bg-white sticky top-0 z-100 p-4">
        <div className="max-w-5xl flex items-center justify-between mx-auto">
         <img className="max-w-[80px] sm:max-w-[160px]" src={logo} alt="Paygeon-Logo"/>
        </div>
    </header>
   )
}