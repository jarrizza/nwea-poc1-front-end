// https://www.npmjs.com/package/react-pdf

function Viewer(props) {
    function exitHandler() {
      props.onExit();
    }
    return (
        <div className='viewer'>
            <h4>Watermarked PDF</h4>
            <button className='btn btn--alt' onClick={exitHandler}>Exit</button>
        </div>
    );

}

export default Viewer;
