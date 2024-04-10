import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div className="form-s2p vis-bt1">
      <h2>What's the best way to reach you?</h2>
      <div className="wrapper-7x6">
        <label htmlFor="phoneNumber">Phone Number</label>
        <input
          type="text"
          id="phoneNumber"
          name="What's the best way to reach you?"
          placeholder="(111) 222-3333"
          className="border border-gray-400 rounded-md p-2"
        />
        <span className="error-hez"></span>
        <button type="button" className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Next
        </button>
      </div>
      <div className="dis-gpo mt-4">
        <p>
          By clicking on the "Next" button above, I consent, acknowledge, and agree to the following:
        </p>
        <ul>
          <li>
            Our <a href="https://www.Paygeon.com/terms-conditions">Terms of Use</a> and{' '}
            <a href="https://www.Paygeon.com/privacy">Privacy Policy</a> and to receive important
            notices, and other communications electronically.
          </li>
          <li>
            You are providing express written consent to share your information with up to five (5) network
            partners, and for Carat Card Club (Paygeon.com), parties calling on behalf of Carat Card Club
            (Paygeon.com), network partners, or an authorized third party on their behalf to call you
            (including through automated means; e.g. autodialing, text and pre-recorded messaging) via
            telephone, mobile device (including SMS and MMS - charges may apply) and/or email, even if your
            telephone number is currently listed on any internal, corporate, state, federal or national
            Do-Not-Call (DNC) list.
          </li>
          <li>
            Consent is not required as a condition to utilize Carat Card Club (Paygeon.com) services, and you
            may choose to be contacted by an individual customer care representative by calling (844)
            585-0656
          </li>
          <li>
            Carat Card Club's (Paygeon.com) network partners will contact you directly to discuss your loan
            options as well as to obtain additional financial information in relationship to your offer of
            credit you receive from them.
          </li>
          <li>
            I am directing Carat Card Club (Paygeon.com) to share my information to the providers in its
            network for the purpose of providing me with information about their financial services and
            products.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ContactForm;
