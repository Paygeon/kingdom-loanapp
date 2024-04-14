export default function AfterSubmitting(){
    return(
        <div className="flex items-center justify-center h-[80vh]">
            <header className="container-d15">
                <h2>Loan Application Submitted</h2>
                <p className="file-upload-lcm" style={{ fontSize: '1.5rem', maxWidth: '50rem' }}>
                   Your form have been submitted and we will get back to you as soon we process this info
                </p>
                <button className="text-white bg-blue-600 text-2xl font-medium px-4 py-2">Back to Home</button>
            </header>
        </div>
    )
}