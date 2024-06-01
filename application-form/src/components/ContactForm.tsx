import React, { useContext, useState } from 'react';
import { DataContext } from '../context/DataContext';
import Navigator from './shared/Navigator';
import { Modal } from 'antd';

const ContactForm: React.FC = () => {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  const {phone,setPhone} = useContext(DataContext)
  const openModal = ()=>{
    setShowPrivacyPolicy(true)
  } 
  const closeModal = ()=>{
    setShowPrivacyPolicy(false)
  }
  const verifyForm= ()=>{
    if(!phone){
      return {
        isValid:false,
        message:"please add your phone number",
      }
    }
    if(phone.length < 6){
      return{
        isValid:false,
        message:"your phone number should atleast be 6 digits long"
      }
    }
    return {
      isValid:true,
      message:null
    }
  }
  return (
  <>
    <Modal centered open={showPrivacyPolicy} maskClosable={false} onCancel={closeModal} footer={null}>
    <ul>
          <p className="text-sm sm:text-lg my-4 font-semibold">Privacy Policy and Terms and Service</p>
          <p className="my-2">
            Our <a href="https://www.Paygeon.com/terms-conditions">Terms of Use</a> and{' '}
            <a href="https://www.Paygeon.com/privacy">Privacy Policy</a> and to receive important
            notices, and other communications electronically.
          </p>
          <p className="my-4">
            You are providing express written consent to share your information with up to five (5) network
            partners, and for Carat Card Club (Paygeon.com), parties calling on behalf of Carat Card Club
            (Paygeon.com), network partners, or an authorized third party on their behalf to call you
            (including through automated means; e.g. autodialing, text and pre-recorded messaging) via
            telephone, mobile device (including SMS and MMS - charges may apply) and/or email, even if your
            telephone number is currently listed on any internal, corporate, state, federal or national
            Do-Not-Call (DNC) list.
          </p>
          <p className="my-4">
            Consent is not required as a condition to utilize Carat Card Club (Paygeon.com) services, and you
            may choose to be contacted by an individual customer care representative by calling (844)
            585-0656
          </p>
          <p className="my-4">
            Carat Card Club's (Paygeon.com) network partners will contact you directly to discuss your loan
            options as well as to obtain additional financial information in relationship to your offer of
            credit you receive from them.
          </p>
          <p className="my-4">
            I am directing Carat Card Club (Paygeon.com) to share my information to the providers in its
            network for the purpose of providing me with information about their financial services and
            products.
          </p>
        </ul>
    </Modal>
    <div className="form-s2p vis-bt1">
      <h2 className="mb-8 text-3xl font-bold text-dark max-w-3xl md:text-5xl">What's the best way to reach you?</h2>
      <div className="max-w-2xl">
      <label htmlFor="loanAmount" className="text-sm sm:text-lg mx-4 font-medium text-gray-600 block">Phone Number</label>
        <input
          type="number"
          id="phoneNumber"
          style={{outline: "none",}}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          name="What's the best way to reach you?"
          placeholder="(111) 222-3333"
          className="bg-gray-100 rounded-full text-sm md:text-lg px-4 w-full p-2"
        />
      </div>
      <div  className="mt-4 ml-4 max-w-2xl">
        <p className="text-sm sm:text-base">
          By clicking on the button, you consent, acknowledge, and agree to our <span onClick={openModal} className="font-semibold text-primary cursor-pointer">Privacy Policy and Terms and Services</span>
        </p>
      </div>
    </div>
    <Navigator verifyForm={verifyForm}/>
  </>
  );
};

export default ContactForm;
