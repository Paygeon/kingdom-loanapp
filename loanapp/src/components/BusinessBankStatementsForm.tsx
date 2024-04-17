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
    <>
     {isUploading && (
       <div className="fixed top-0  z-[100] left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
        <div>
             <Spin
             size={"large"}
             />
            <p className="my-3 text-lg font-bold" style={{color:"white"}}>Uploading....</p>
        </div>
     </div>
     )} 
     {isLoading && (
       <div className="fixed top-0  z-[100] left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
        <div>
             <Spin
             size={"large"}
             />
            <p className="my-3 text-lg font-bold" style={{color:"white"}}>Submitting....</p>
        </div>
     </div>
     )}
      <div className="stepgroup-transition-r3h inv-mlb">&nbsp;</div>
      <div className="inv-mlb">&nbsp;</div>
      <div className="inv-mlb"> &nbsp; </div>
      <div className="inv-mlb form-nhl">
        <header className="container-d15">
          <h2>Business Bank Statements</h2>
          <p className="file-upload-lcm" style={{ fontSize: '1.5rem', maxWidth: '50rem' }}>Upload Your Last 4 Months Of Business Bank Statements</p>
        </header>
        <div className="icon-gio">
          <div className="icon-qc4">
            <div className="icon-5ix">
              <img src="https://cdn.businessloans.com/images/lock.png" alt="Lock" />
            </div>
            <div className="text-6kp">All data is securely encrypted</div>
          </div>
          <div className="icon-qc4">
            <div className="icon-5ix">
              <img src="https://cdn.businessloans.com/images/secure-cloud.png" alt="Secure Cloud" />
            </div>
            <div className="text-6kp">Secure cloud infrastructure</div>
          </div>
          <div className="icon-qc4">
            <div className="icon-5ix">
              <img src="https://cdn.businessloans.com/images/data-integrity.png" alt="Data Integrity" />
            </div>
            <div className="text-6kp">Verified data integrity</div>
          </div>
        </div>
        <main>
          <section className="container-d15">
            <div className="wrapper-nns">
              <button type="button" className="info-vec">Connect with <img className="logo-4hz" src="https://cdn.businessloans.com/images/Plaid_logo.svg" alt="Plaid Logo" /></button>
              <div className="plaid-p72">Learn more at <a href="https://plaid.com/safety/">https://plaid.com/safety/</a></div>
            </div>
          </section>
        </main>
      </div>
      <img src="https://insight.adsrvr.org/track/pxl/?adv=ock00o1&amp;ct=0:4yvws9i&amp;fmt=3" alt="something" width="0" height="0" className="style-c2UsG" id="style-c2UsG" />
      <div className="container-sjk logo-j4d hdp-g9g style-IYgN5" id="style-IYgN5"></div>
      <div className="container-sjk logo-j4d hdp-g9g style-1t7ai" id="style-1t7ai"></div>
      <div className="container-sjk logo-j4d hdp-g9g style-hWrLI" id="style-hWrLI"></div>
      <div className="inv-mlb">&nbsp;</div>
      <div className="inv-mlb"> &nbsp; </div>
      <div className="form-nhl vis-fxd">
        <header className="container-d15">
          <h2>Business Bank Statements</h2>
          <p className="file-upload-lcm" style={{ fontSize: '1.5rem', maxWidth: '50rem' }}>Upload Your Last 3 Months Of Business Bank Statements. This is what our team will use to analyze and approve your business for funding.</p>
        </header>
        <div className="icon-v7w">
          <div>
            <img src="https://cdn.businessloans.com/images/lock_vector.svg" alt="Lock Vector" />
          </div>
          <div>We take your privacy seriously, all documents are encrypted and stored securely.</div>
        </div>
        <main>
          <section className="container-d15">
            <label htmlFor="file-input">
              {file?
              (
                <div className="w-full h-[100px] rounded-md flex items-center justify-center p-4 border-dashed border text-center border-gray-300 text-gray-300">
                <p className="font-bold text-xl">{file.name} <span>Change</span></p>
              </div>
              )
              :(
                <div className="w-full h-[100px] rounded-md flex items-center justify-center p-4 border-dashed border text-center border-gray-300 text-gray-300">
                <p className="text-xl font-semibold">Drag &amp; drop .PDF files here or <span>click to upload</span></p>
              </div>
              )}
            
            </label>
            <input onChange={handleSelectFile} className="input-8cb" id="file-input" name="file-input" type="file" />
            {file?
            (
              <div>
                <button onClick={uploadFile} className="p-4 my-4 rounded-md text-xl font-bold bg-yellow-500 text-black">Upload Statement</button>
              </div>
            )
            :null}
            <div className="container-bjw my-2">
              <span className="text-p6q">AND</span>
            </div>

            <button
            onClick={handleVerification}
            className="p-2 w-full bg-yellow-400 my-2 rounded-xl justify-center flex items-center gap-2"
            >
               <span className="text-black text-lg font-medium">Verify your identity with </span>
              <img className="" src="https://cdn.businessloans.com/images/Plaid_logo.svg" alt="Plaid Logo" />
              </button>
            <div className="">

              <div className="icon-gio">
              <div className="text-white mb-4">Learn more at <a className="text-yellow-400 font-medium" href="https://plaid.com/safety/">https://plaid.com/safety/</a></div>
                <div className="icon-qc4">
                  <div className="icon-5ix">
                    <img src="https://cdn.businessloans.com/images/lock.png" alt="Lock" />
                  </div>
                  <div className="text-6kp">All data is securely encrypted</div>
                </div>

                <div className="icon-qc4">
                  <div className="icon-5ix">
                    <img src="https://cdn.businessloans.com/images/secure-cloud.png" alt="Secure Cloud" />
                  </div>
                  <div className="text-6kp">Secure cloud infrastructure</div>
                </div>

                <div className="icon-qc4">
                  <div className="icon-5ix">
                    <img src="https://cdn.businessloans.com/images/data-integrity.png" alt="Data Integrity" />
                  </div>
                  <div className="text-6kp">Verified data integrity</div>
                </div>

              </div>
            </div>

          </section>
        </main>
      </div>
      <Navigator verifyForm={verify}/>
      <footer className="powered-by-xfz">Powered by <a href="Payygeon.com">Paygeon.com</a></footer>

    </>
  );
};

export default BusinessBankStatementsForm;
