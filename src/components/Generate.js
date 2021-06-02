import spinner from '../assets/spinner.gif'

function Generate(props) {
    function cancelHandler() {
        props.onCancel('Canceled generation operation!');
    }
    function completeHandler() {
        props.onComplete('PDF successfully generated!');
    }
    function errorHandler() {
        props.onError('An error was encountered!');
    }
    return (
        <div className='spinner'>
            <h4>Waiting for PDF Generation</h4>
            <div>
                <img src={spinner} alt="creating..." />
            </div>
            <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
            <button className='btn btn--alt' onClick={completeHandler}>Complete</button>
            <button className='btn btn--alt' onClick={errorHandler}>Error</button>
        </div>
    );

}

export default Generate;

