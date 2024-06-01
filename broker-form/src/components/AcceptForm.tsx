import { Spin } from "antd"
import useForm from "../hooks/useForm"

const commissionOptions = [
    {label: "10%", value: 10},
    {label: "15%", value: 15},
    {label: "20%", value: 20},
    {label: "25%", value: 25},
]

interface Props {
    email:string,
    businessName:string
}
export default function AcceptForm(props:Props){
    const {
        loadingSubmit,
        amount,
        accepted,
        lender,
        contextHolder,
        handleSetLender,
        handleSubmit,
        commission,
        notes,
        handleSetAmount,
        handleSetNotes,
        handleSetCommsion
    } = useForm(props.email,props.businessName)
    if(accepted){
        return (
            <div className="my-20 p-2 text-center max-w-[600px] mx-auto">
                <p className="text-2xl sm:text-5xl font-bold text-dark border-r pr-2">Approval Success </p>
                <p className="sm:text-lg my-3 text-dark">You have successfully Approved <b>${amount}</b> loan for <b>{props.businessName}</b>,</p>
                {/* <div className="bg-dark text-white p-3">
                    <p >Disclaimer !!!</p>
                    <p>If you need to contact this borrower directly, make sure to address yourself as Paygeon if calling by phone or use an authorized Paygeon domain email. Failing to do this will result in churn of the borrower.</p>
                </div> */}
            </div>
        )
    }
    return(
        <>
        {contextHolder}
        <form onSubmit={handleSubmit} className="max-w-[600px] p-2 sm:p-8 py-6" action="">
                    <p className="text-2xl font-bold sm:text-4xl text-dark mb-8">Accept Loan Application</p>
                    <div>
                        <label className="sm:text-lg text-dark font-bold"  htmlFor="">How much ($)</label>
                        <input
                        value={amount}
                        onChange={handleSetAmount}
                        placeholder="0"
                        className="border-dark-200 border  rounded-full w-full p-2 sm:text-lg"
                        type="number"
                        />
                    </div>
                    <div className="mt-6">
                        <label className="sm:text-lg text-dark font-bold"  htmlFor="">Which Lender</label>
                        <input
                        value={lender}
                        style={{background:"none"}}
                        onChange={(e)=>handleSetLender(e.target.value)}
                        placeholder="Please add your company name"
                        className="border-dark-200 border  rounded-full w-full p-2 sm:text-lg"
                        />
                    </div>
                    <div className="mt-6">
                        <label className="sm:text-lg block text-dark font-bold"  htmlFor="">Paygeon Commsion</label>
                        <select
                            className="w-full p-2 rounded-full border-dark-200 border"
                            value={commission}
                            onChange={(e)=>handleSetCommsion(parseFloat(e.target.value))}
                        >
                            {commissionOptions.map((option, index) => (
                                <option key={index} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                    <div className="mt-6">
                        <label className="sm:text-lg block text-dark font-bold"  htmlFor="">Notes (optional)</label>
                        <textarea onChange={handleSetNotes} value={notes} rows={6} className="w-full resize-none p-2 rounded-lg border-dark-200 border"></textarea>
                    </div>
                    <button type="submit" disabled={loadingSubmit} className="mt-8 bg-dark py-3 disabled:cursor-not-allowed text-white px-8 sm:min-w-[250px] rounded-full text-lg">
                        {loadingSubmit
                        ?<Spin/>
                        :"Submit"
                        }
                    </button>
                </form>
        </>
    )
}