import React, { useState } from 'react';
import './App.css';
import BusinessTypeSelector from './components/BusinessTypeSelector';
import LoanAmountForm from './components/LoanAmountForm';
import FundingReasonForm from './components/FundingReasonForm';
import BusinessStartDateForm from './components/BusinessStartDateForm';
import AnnualRevenueForm from './components/AnnualRevenueForm';
import CreditScoreForm from './components/CreditScoreForm';
import IndustryForm from './components/IndustryForm';
import BusinessZipCodeForm from './components/BusinessZipCodeForm';
import BusinessNameForm from './components/BusinessNameForm';
import NameForm from './components/NameForm';
import ContactForm from './components/ContactForm';
import EmailForm from './components/EmailForm';
import OwnershipForm from './components/OwnershipForm';
import BusinessAddressForm from './components/BusinessAddressForm';
import BusinessTaxIDForm from './components/BusinessTaxIDForm';
import DateofBirthForm from './components/DateofBirthForm';
import SSNForm from './components/SSNForm';
import SignatureForm from './components/SignatureForm';
import BusinessBankStatementsForm from './components/BusinessBankStatementsForm';
import NeoPopTiltedButton from './components/buttons/NeoPopTiltedButton';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const forms = [
    <BusinessTypeSelector />,
    <LoanAmountForm />,
    <FundingReasonForm />,
    <BusinessStartDateForm />,
    <AnnualRevenueForm />,
    <CreditScoreForm />,
    <IndustryForm />,
    <BusinessZipCodeForm />,
    <BusinessNameForm />,
    <NameForm />,
    <ContactForm />,
    <EmailForm />,
    <OwnershipForm />,
    <BusinessAddressForm />,
    <BusinessTaxIDForm />,
    <DateofBirthForm />,
    <SSNForm />,
    <SignatureForm />,
    <BusinessBankStatementsForm />
  ];

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div>
      {forms[currentStep]}
      {currentStep > 0 && (
        <button onClick={previousStep}>Previous</button>
      )}
      {currentStep < forms.length - 1 && (
        <NeoPopTiltedButton onClick={nextStep}>Next Screen →</NeoPopTiltedButton>
      )}
    </div>
  );
};

export default App;
