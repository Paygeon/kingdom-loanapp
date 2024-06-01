import AnnualRevenueForm from "../components/AnnualRevenueForm";
import BusinessAddressForm from "../components/BusinessAddressForm";
import BusinessBankStatementsForm from "../components/BusinessBankStatementsForm";
import BusinessNameForm from "../components/BusinessNameForm";
import BusinessStartDateForm from "../components/BusinessStartDateForm";
import BusinessTaxIDForm from "../components/BusinessTaxIDForm";
import BusinessTypeSelector from "../components/BusinessTypeSelector";
import BusinessZipCodeForm from "../components/BusinessZipCodeForm";
import ContactForm from "../components/ContactForm";
import CreatePasswordForm from "../components/CreatePassword";
import CreditScoreForm from "../components/CreditScoreForm";
import DateofBirthForm from "../components/DateofBirthForm";
import EmailForm from "../components/EmailForm";
import FundingReasonForm from "../components/FundingReasonForm";
import IndustryForm from "../components/IndustryForm";
import LoanAmountForm from "../components/LoanAmountForm";
import NameForm from "../components/NameForm";
import OwnershipForm from "../components/OwnershipForm";
import SignatureForm from "../components/SignatureForm";
import SSNForm from "../components/SSNForm";

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
    <CreatePasswordForm/>,
    <BusinessBankStatementsForm />
  ];

export default forms;