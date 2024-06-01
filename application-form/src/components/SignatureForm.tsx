import React, { useContext,useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';
import { FormError } from '../interfaces';
import { Modal } from 'antd';

const SignatureForm: React.FC = () => {
  const [open,setOpen] = useState(false)
  const {signature,setSignature} = useContext(DataContext)

  const verify = ()=>{
    const error:FormError = {
      isValid:false,
      message:"please add your signature",
    }
    if(signature){
      error.isValid = true
      error.message = null
    }
    return error
  }
  const openModal = ()=>{
    setOpen(true)
  } 
  const closeModal = ()=>{
    setOpen(false)
  }
  // const handleSubmit = () => {
  //   // Handle form submission
  //   console.log('Form submitted');
  // };

  return (
    <div>
      <Modal open={open} onCancel={closeModal} maskClosable={false} centered footer={null}>
        <div className="capitalize">
          <p className="text-2xl capitalize font-semibold my-4">Terms of Agreement</p>
        each of the above listed Business Owner(s)/Officer(s)/Principal(s) and Business (individually and collectively, "You") certify that all information and documents submitted in connection with this Funding Application ("Application") are accurate, true, correct and complete; and that You will immediately notify Carat Card Club (Paygeon.com) or any of its representatives, successors, assigns, designees, agents, partners or affiliates ("Recipients") of any change in such information or financial condition. You acknowledge that any false statements may be considered fraud. You acknowledge that the Recipients are relying on the information You provide. You further authorize Carat Card Club (Paygeon.com) and each of the Recipients that may be involved with or acquire commercial loans having daily repayment features or purchases of future receivables including Merchant Cash Advance transactions (collectively, "Transactions") to obtain consumer or personal, business and investigative reports and other information about You, including, but not limited to credit card processor statements and bank statements, from one or more consumer reporting agencies, such as TransUnion, Experian and Equifax, and from other credit bureaus, banks, financial institutions, creditors and other third parties. You authorize Recipients to receive relevant information regarding the commercial lease for the above-referenced premises from our leasing company and/or agent. You also authorize Carat Card Club (Paygeon.com) to transmit this Application, along with any of the foregoing information obtained in connection with this Application, to any or all of the Recipients for the foregoing purposes. A photocopy of the Application will be deemed acceptable for release of credit and/or investigatory information.
        </div>
      </Modal>
      <h2 className="mb-8 text-3xl sm:text-5xl text-dark font-bold max-w-3xl">Please Sign Below</h2>
      <div className="max-w-3xl">
        <input
        className="bg-gray-100 capitalize text-sm sm:text-base w-full text-dark px-4 rounded-full p-3"
        style={{outline:"none"}}
        value={signature} 
        onChange={(e)=>setSignature(e.target.value)} 
        id="signature"
        type="text"
        placeholder="Enter your signature" 
        />
      </div>
      <div className="mx-4 my-4 text-sm sm:text-base">
        By signing above, you agree to our <button onClick={openModal} className="text-dark font-bold">Terms of Agreement</button>
      </div>
      <Navigator verifyForm={verify}/>
    </div>
  );
};

export default SignatureForm;
