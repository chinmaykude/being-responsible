import React, { Component } from 'react'
import Navbar from '../Navbar'
// import Camera from 'react-html5-camera-photo';
import WebCamCapture from './WebCamCapture';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import {saveImageUrl} from '../../redux/actions';

// import 'react-html5-camera-photo/build/css/index.css';

class UserPage extends Component {
    constructor(props){
        super(props)
        this.state = {
            captureImage : false,
            url:'',
            imageCaptured:false,
        }
    }

    urlChange = url =>{
        console.log(url)
        // this.setState({
        //     url:url,
        //     imageCaptured:this.state.imageCaptured
        // })
        this.props.saveImageUrl(url)
        this.setState({
            imageCaptured: !this.state.imageCaptured
        })
    }

    render(){
        console.log(this.state.url)
        console.log(this.props.isCaptureDone)
        if(this.state.imageCaptured){
            return <Redirect to='/ticket-raise'/>
        }else{
            return (
                <div>
                    <Navbar {...this.props} />
                    <div className='container w-75 border shadow-sm p-5'>
                        <p>Welcome,</p>
                        <p>Each man is questioned by life; and he can only answer to life by answering for his own life; to life he can only respond by being responsible.</p>
                        <div>
                        {this.state.captureImage ? <WebCamCapture urlChange={this.urlChange} />:
                            <button className='btn btn-sm btn-outline-success' onClick={() => this.setState({
                                captureImage:!this.state.captureImage
                            })}>Report an issue!!</button>
                            }
                        </div>    
                    </div>
                </div>
            )
        }
    }   
 }


const mapDispatchToProps = dispatch =>{
    return {
      saveImageUrl: (url) => dispatch(saveImageUrl(url))
    }
  }


export default connect(null,mapDispatchToProps)(UserPage)