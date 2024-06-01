import { ChangeEventHandler, useContext,useState } from 'react';
import { DataContext } from '../context/DataContext';
import FirebaseService from '../services/FirebaseService';
import Navigator from './shared/Navigator';
import { Spin } from 'antd';
// import { FormError } from '../interfaces';

const BusinessBankStatementsForm: React.FC = () => {
  const {bankStatement,setBankStatement,isLoading} = useContext(DataContext)
  const [verifyClicked,setVerifiedCick] = useState(false);
  const [isUploading,setUploading] = useState(false)
  const [file,setFile] = useState<File | null>(null);

  const handleSelectFile:ChangeEventHandler<HTMLInputElement>=(e)=>{
     const currentFile = e.target.files?e.target.files[0]:null;
     if(currentFile) {
      if(currentFile.name.endsWith(".pdf")){
        return setFile(currentFile);
      }
      alert("Only PDF files are supported");
     }
     
  }
  const uploadFile=async()=>{
    if(file){
      setUploading(true)
      const res = await FirebaseService.uploadFile(file,file?.name)
      setUploading(false)
      if(res.status === "success"){
        setBankStatement(res.data as string)
        alert("Bank Statement Upload Successfully")
        return null
      }
      alert(res.errror_message)
    }
  }

  const verify = ()=>{
    
    if(!bankStatement){
      return {
        isValid:false,
        message:"please submit your bank statement",
      }
    }
    if(!verifyClicked){
      return{
        isValid:false,
        message:"please verify with plaid",
      }
    }
    return {
      isValid: true,
      message: null
    }
  }

  const handleVerification = ()=>{
    const link ="https://verify.plaid.com/verify/idv_d2LgF7k6Z6KoDn?key=4bb833e811be1f706ece055d9382a9a6"
    setVerifiedCick(true);
    window.open(link,"_blank")
  }
  return (
    <div className="mb-32">
     {isUploading && (
       <div className="fixed top-0 text-center  z-[100] left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
        <div>
             <Spin
             size={"large"}
             />
            <p className="my-3 text-lg font-bold" style={{color:"white"}}>Uploading....</p>
        </div>
     </div>
     )} 
     {isLoading && (
       <div className="fixed top-0 text-center z-[100] left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
        <div>
             <Spin
             size={"large"}
             />
            <p className="my-3 text-lg font-bold" style={{color:"white"}}>Submitting....</p>
        </div>
     </div>
     )}
      <div className="max-w-3xl">
        <header className="max-w-3xl">
          <h2 className="font-bold text-dark text-3xl md:text-5xl">Business Bank Statements</h2>
          <p className="my-2 font-medium text-sm sm:text-lg text-dark-500">Upload Your Last 3 Months Of Business Bank Statements. This is what our team will use to analyze and approve your business for funding.</p>
        </header>
        <div className="flex mb-8 items-start sm:items-center gap-2 my-2">
          <div>
            <img className="h-6 w-6 sm:h-4 sm:w-4" src="https://cdn.businessloans.com/images/lock_vector.svg" alt="Lock Vector" />
          </div>
          <div className="text-sm sm:text-base">We take your privacy seriously, all documents are encrypted and stored securely.</div>
        </div>
        <main>
          <section className="container-d15">
            <label htmlFor="file-input">
              {file?
              (
                <div className="w-full h-[120px] rounded-md flex items-center justify-center p-4 border-dashed border text-center border-gray-300 text-gray-300">
                <div>
                <p className="font-bold text-sm sm:text-xl text-dark-700">{file.name}</p>
                <p className="text-sm sm:text-base">Click to change document</p>
                </div>
              </div>
              )
              :(
                <div className="w-full h-[120px] bg-gray-100 cursor-pointer rounded-md flex items-center justify-center p-4 border-dashed border text-center border-gray-300 text-gray-300">
                <p className="text-sm sm:text-xl font-semibold">Drag &amp; drop .PDF files here or <span>click to upload</span></p>
              </div>
              )}
            
            </label>
            <input hidden onChange={handleSelectFile} className="" id="file-input" name="file-input" type="file" />
            {file?
            (
              <div>
                <button onClick={uploadFile} className="px-4 py-3 my-4 rounded-md text-lg font-medium bg-secondary-dark text-dark">Upload Statement</button>
              </div>
            )
            :null}
            <div className="container-bjw my-4">
              <p className="text-sm font-bold text-center text-dark-500 ">AND</p>
            </div>

            <button
            onClick={handleVerification}
            className="p-2 sm:py-4 w-full bg-secondary-dark my-2 rounded-xl justify-center sm:flex items-center gap-2">
                <span className="text-dark text-sm sm:text-lg font-medium">Verify your identity with </span>
                <img className="h-7 mx-auto md:mx-0" src="https://cdn.businessloans.com/images/Plaid_logo.svg" alt="Plaid Logo" />
            </button>
            <div className="">

              <div className="my-4">
              <div className="text-dark text-sm sm:text-base mb-4">Learn more at <a className="text-secondary-dark font-medium" href="https://plaid.com/safety/">https://plaid.com/safety/</a></div>
                <br />
                <div className="flex items-center my-2 gap-2">
                  <img className="h-6 w-5" src="https://cdn.businessloans.com/images/lock.png" alt="Lock" />
                  <div className="text-sm sm:text-base">All data is securely encrypted</div>
                </div>
                <div className="flex items-center my-2 gap-2">
                    <img className="h-6 w-5" src="https://cdn.businessloans.com/images/secure-cloud.png" alt="Secure Cloud" />
                    <div className="text-sm sm:text-base">Secure cloud infrastructure</div>
                </div>

                <div className="flex items-center my-2 gap-2">
                  <img className="h-6 w-5" src="https://cdn.businessloans.com/images/data-integrity.png" alt="Data Integrity" />
                  <div className="text-sm sm:text-base">Verified data integrity</div>
                </div>

              </div>
            </div>

          </section>
        </main>
      </div>
      <Navigator verifyForm={verify}/>
      <footer className="mt-20 font-bold text-dark">Powered by <a href="Payygeon.com">Paygeon.com</a></footer>

    </div>
  );
};

export default BusinessBankStatementsForm;
