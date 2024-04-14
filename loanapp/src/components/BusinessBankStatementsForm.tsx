import { ChangeEventHandler, useContext,useState } from 'react';
import { DataContext } from '../context/DataContext';
import FirebaseService from '../services/FirebaseService';
import Navigator from './shared/Navigator';
import { FormError } from '../interfaces';

const BusinessBankStatementsForm: React.FC = () => {
  const {bankStatement,setBankStatement,isLoading} = useContext(DataContext)
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
    const error:FormError = {
      isValid:false,
      message:"please submit your bank statement",
    }
    if(bankStatement){
      error.isValid = true
      error.message = null
    }
    return error
  }

  
  return (
    <>
     {isUploading && (
       <div className="fixed top-0  z-[100] left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
       <p style={{color:"white"}}>Uploading....</p>
     </div>
     )} 
     {isLoading && (
       <div className="fixed top-0  z-[100] left-0 w-full h-full bg-[rgba(0,0,0,0.75)] flex items-center justify-center">
       <p style={{color:"white"}}>Submitting....</p>
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
                <div className="file-upload-drop-wq5">
                <p className="font-bold text-xl">{file.name} <span>Change</span></p>
              </div>
              )
              :(
                <div className="file-upload-drop-wq5">
                <p>Drag &amp; drop .PDF files here or <span>click to upload</span></p>
              </div>
              )}
            
            </label>
            <input onChange={handleSelectFile} className="input-8cb" id="file-input" name="file-input" type="file" />
            {file?
            (
              <div>
                <button onClick={uploadFile} className="p-4 my-4 rounded-md text-xl font-bold bg-blue-500 text-white">Upload Statement</button>
              </div>
            )
            :null}
            <div className="container-bjw">
              <span className="text-p6q">AND</span>
            </div>
          
            <div className="wrapper-nns">
              <button type="button" className="info-vec">Verify your identity with <img className="logo-4hz" src="https://cdn.businessloans.com/images/Plaid_logo.svg" alt="Plaid Logo" /></button>
              <div className="plaid-p72">Learn more at <a href="https://plaid.com/safety/">https://plaid.com/safety/</a></div>
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
            </div>
            <ul className="list-w61"></ul>
          </section>
        </main>
      </div>
      <div className="inv-mlb form-nhl">
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
            <label htmlFor="f7b9d9a737993bfe-file-input">
              <div className="file-upload-drop-wq5">
                <p>Drag &amp; drop .PDF files here or <span>click to upload</span></p>
              </div>
            </label>
            <input className="input-8cb" id="fil-vn6" name="file-input" type="file" />
            <div className="container-bjw">
              <span className="text-p6q">AND</span>
            </div>
            <div className="wrapper-nns">
              <button type="button" className="info-vec">Verify your identity with <img className="logo-4hz" src="https://cdn.businessloans.com/images/Plaid_logo.svg" alt="Plaid Logo" /></button>
              <div className="plaid-p72">Learn more at <a href="https://plaid.com/safety/">https://plaid.com/safety/</a></div>
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
            </div>
            <ul className="list-w61"></ul>
          </section>
        </main>
      </div>
      <Navigator verifyForm={verify}/>
      <footer className="powered-by-xfz">Powered by <a href="Payygeon.com">Paygeon.com</a></footer>

    </>
  );
};

export default BusinessBankStatementsForm;
