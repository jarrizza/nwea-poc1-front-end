import { useRef } from 'react';
import classes from './InputForm.module.css';

function InputForm(props) {
    const clientIdRef = useRef();
    const clientSecretRef = useRef();
    const dashboardUrlRef = useRef();

    function submitHandler(event) {
        event.preventDefault();
        const obj = {
            clientId: clientIdRef.current.value,
            clientSecret: clientSecretRef.current.value,
            dashboardUrl: dashboardUrlRef.current.value,
        }
        props.onSubmit(obj);
    }
    function cancelHandler() {
        props.onCancel();
    }
    return (
        <div>
            <div className="identity">
                <form className={classes.form} onSubmit={submitHandler} >
                    <div className={classes.control}>
                        <label htmlFor="clientId">client ID</label>
                        <input defaultValue={props.clientId} type="text" id="clientId" required ref={clientIdRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="clientSecret">client Secret</label>
                        <input defaultValue={props.clientSecret} type="text" id="clientSecret" required ref={clientSecretRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="dashboardUrl">Dashboard Url</label>
                        <input defaultValue={props.dashboardUrl} type="text" id="dashboardUrl" ref={dashboardUrlRef}/>
                    </div>
                    <div className={classes.actions}>
                        <button className="btn smallBtn">OK</button>
                        <button className="btn cancelBtn" type="button" name="cancel" value="cancel" onClick={cancelHandler}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );

}

export default InputForm;
