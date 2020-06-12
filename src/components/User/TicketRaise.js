import React, { Component } from 'react'
import { connect } from 'react-redux'
import Navbar from '../Navbar'
import firebase from '../../firebase/firebase' 

class TicketRaise extends Component {
    constructor(props){
        super(props)
        this.state = {
            url: this.props.url,
            title: '',
            description: '',
            lat: 0, 
            lng: 0,
            type: 'Garbage Collection',
            
        }
    }

    componentDidMount(){
        let options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
          };
          
         const success = (pos) => {
            var crd = pos.coords;
          
            console.log('Your current position is:');
            console.log(`Latitude : ${crd.latitude}`);
            console.log(`Longitude: ${crd.longitude}`);
            console.log(`More or less ${crd.accuracy} meters.`);

            console.log(crd.latitude, crd.longitude)
            
            this.setState({
                lat: crd.latitude,
                lng: crd.longitude
            })

          }
          
          function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
          }
          
          navigator.geolocation.getCurrentPosition(success, error, options);
    }

    handleChange = e =>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        // firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        // .then(res => console.log(res))
        // .then(res => {
            return firebase.database().ref('authority/').push({
                url: this.state.url,
                title: this.state.title,
                description: this.state.description,
                lat: this.state.lat, 
                lng: this.state.lng,
                type: this.state.type
            })
        // })
    }

    render(){
        console.log(this.state)
        return (
            <div>
                <Navbar />
                <div className='container w-50 mt-5 border'>
                <h3>Raise A Ticket</h3>
                <form className='p-3' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="title">Title</label>
                        <input type="text" className="form-control" value={this.state.title} onChange={this.handleChange} id="title" aria-describedby="emailHelp" />
                    </div>
                    <div className='form-group text-center'>
                        <img src={this.state.url} alt='target'></img>
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className='w-100' value={this.state.description} id='description' onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="coordinates">Co-ordinates</label>
                        <input disabled type="text" className="form-control" value={'Latitude: '+ (this.state.lat)} onChange={this.handleChange} id="coordinates" aria-describedby="emailHelp" />
                        <input disabled type="text" className="form-control" value={'Longitude: ' + this.state.lng} onChange={this.handleChange} id="coordinates" aria-describedby="emailHelp" />
                    </div>
                    <select value={this.state.type} id='type' onChange={this.handleChange} classname='w-100'>
                        <option value='Garbage Collection'>Garbage Collection</option>
                        <option value='Roads Repair'>Roads Repair</option>
                        <option value='Sewage Dept.'>Sewage Dept.</option>
                    </select>
                    
                    <button type="submit" className="btn btn-primary ml-5" onClick={()=>this.props.history.push('/success')}>Post</button>
                </form>
             </div>
            </div>
            
        )
    }
}


const mapStateToProps = state =>{
    return {
      url : state.capturedUrl
    }
  }

export default connect(mapStateToProps)(TicketRaise)