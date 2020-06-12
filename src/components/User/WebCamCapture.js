import React from 'react'
import Webcam from "react-webcam";
import { connect } from 'react-redux';
import { imageCaptured } from '../../redux/actions';

const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user"
    };
       
const WebcamCapture = (props) => {
        const webcamRef = React.useRef(null);
       
        const capture = () =>{
          const imageSrc = webcamRef.current.getScreenshot();
          props.urlChange(imageSrc)
        }
       
          return (
            <div>
              <h5>Report an issue!!</h5>
              <Webcam
                audio={false}
                height={500}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={450}
                videoConstraints={videoConstraints}
              />
              <br/>
              <button onClick={capture} className='btn btn-sm m-2 btn-outline-primary'>Capture photo</button>
            </div>
          );
      };



const mapDispatchToProps = dispatch =>{
  return {
    isCaptured : () => dispatch(imageCaptured()),
  }
}

export default connect(null,mapDispatchToProps)(WebcamCapture);