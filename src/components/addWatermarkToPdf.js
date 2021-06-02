import {useState} from "react";
import Generate from "./Generate";
import Backdrop from "./Backdrop";
import Viewer from "./Viewer";
import Dashboard from "./Dashboard";
import InputForm from "./InputForm";

function AddWatermarkToPdf() {
    useState();
    const [inputIsOpen, setInputIsOpen] = useState(true);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
    const [generateIsOpen, setSpinnerIsOpen] = useState(false);
    const [inputIsReady, setInputIsReady] = useState(false);
    const [pdfIsReady, setPdfIsReady] = useState(false);
    const [userData, setUserData] = useState({});
    const [clientId, setClientId] = useState("3SkKbYpwK9yyRDzyCvYj"); // todo remove this
    const [clientSecret, setClientSecret] = useState("bkdqG5Rvw4fmMNyz53XFSYPh"); // todo remove this
    const [dashboardUrl, setDashboardUrl] = useState("https://4mile.looker.com/embed/dashboards-next/255"); // todo remove this

    // 1. Obtain Input
    function resetHandler() {
        setInputIsOpen(true);
        setInputIsReady(false);
        setPdfIsReady(false);
    }
    function cancelInputHandler() {
        setInputIsOpen(false);
    }
    function completeInputHandler(data) {
        setUserData(data);
        setClientId(data.clientId);
        setClientSecret(data.clientSecret);
        setDashboardUrl(data.dashboardUrl);
        setInputIsOpen(false);
        setInputIsReady(true);
    }
    // 2. Create Pdf
    function createHandler() {
        setSpinnerIsOpen(true);
    }
    function cancelCreateHandler() {
        setSpinnerIsOpen(false);
    }
    function completeCreateHandler() {
        setPdfIsReady(true);
        setSpinnerIsOpen(false);
    }
    function errorCreateHandler() {
        setSpinnerIsOpen(false);
    }

    // 3. Show Final Pdf
    function showHandler() {
        setViewerIsOpen(true);
    }
    function closeShowHandler() {
        setViewerIsOpen(false);
    }
    return (
        <div>
            {inputIsReady && <Dashboard userInput={userData}/>}
            {inputIsOpen && <InputForm onCancel={cancelInputHandler} onSubmit={completeInputHandler}
                                       clientId={clientId}
                                       clientSecret={clientSecret}
                                       dashboardUrl={dashboardUrl} />}
            {inputIsReady && !pdfIsReady && <button className='btn' onClick={createHandler}>Create Watermarked PDF</button>}
            {pdfIsReady && <div className='hyperlink' onClick={showHandler}>Show the watermarked PDF</div>}

            {generateIsOpen && <Generate onCancel={cancelCreateHandler}
                                        onComplete={completeCreateHandler}
                                        onError={errorCreateHandler}/>}
            {generateIsOpen && <Backdrop onClick={cancelCreateHandler}/>}
            {viewerIsOpen && <Viewer onExit={closeShowHandler}/>}
            {viewerIsOpen && <Backdrop onClick={closeShowHandler}/>}
            {!inputIsOpen && <button className='btn' onClick={resetHandler}>Restart</button>}
        </div>
    );
}

export default AddWatermarkToPdf;
