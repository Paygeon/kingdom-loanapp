import Footer from "./Footer";
import {SubmitHeader} from "./Header";

export default function AfterSubmitting(){
    return(
     <main>
        <SubmitHeader/>
        <div className="flex items-center justify-center h-[80vh]">
            <header className="max-w-[600px] p-2 mx-auto text-center">
                <h2 className="font-bold text-xl sm:text-4xl text-dark">Loan Application Submitted</h2>
                <p className="file-upload-lcm my-4 text-sm sm:text-xl">
                   Your form have been submitted and we will get back to you as soon we process this info
                </p>
                <button className="text-white bg-dark rounded-full text-sm sm:text-lg font-medium px-8 py-2">Back to Home</button>
            </header>
        </div>
        <Footer/>
     </main>
    )
}