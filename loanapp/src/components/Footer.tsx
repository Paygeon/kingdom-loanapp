import logo from "../logo-full-2.png"

export default function Footer(){
    return (
        <footer className="bg-white p-4 mt-28 pb-24  min-h-[500px]">
            <div className="max-w-5xl mx-auto text-sm sm:text-lg  sm:text-dark">
                <img src={logo} className="max-w-[140px] mx-auto" alt="Paygeon Footer Logo" />
                <div className="flex justify-center gap-4  my-8 mb-12">
                    <a href="/" className="border-r pr-4 border-black">Terms and Conditions</a>
                    <a href="/" className="border-r pr-4 border-black">Privacy Policy</a>
                    <a href="/" className="pr-4 ">Partner With Us</a>
                </div>
                <p>© 2024 – Carat Card Club d/b/a Paygeon</p>
                <p className="my-4">‡ The Paygeon Line of Credit is issued by partner banks. Applications are subject to credit approval. Rates, credit lines, and terms may vary based on your creditworthiness and are subject to change. Additional fees apply.</p>
                <p className="my-4">PPP loans are made by one or more approved U.S. Small Business Administration (SBA) lenders. Loan agreements will identify the issuing lender to small businesses at signing. Qualified applications will be submitted to the SBA as soon as possible. Paygeon does not guarantee that applications will be processed and submitted before PPP funds are no longer available. Approval and loan forgiveness are subject to your availability to meet government-set eligibility requirements</p>
            </div>
        </footer>
    )
}