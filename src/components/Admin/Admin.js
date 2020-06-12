import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import mapboxgl from 'mapbox-gl'
import style from './admin.module.css'
import fire from '../../firebase/firebase'
import firebase from 'firebase'



export default class Admin extends Component {
    constructor(props) {
        super(props)
        // this.ref = fire.firestore().data('users');
        // this.unsubscribe = null;
        this.state = {
            lng: 79.0882,
            lat: 21.1458,
            zoom: 5,
            complaints: []
        }

        const gotData = (data) => {
            // console.log(data.val())
            var authority = data.val()
            var keys = Object.keys(authority)
            console.log(authority)

        }
        const err = (err) => {
            console.log(err)
        }

        const database = firebase.database()
        const rootRef = database.ref('authority')
        rootRef.on('value', gotData, err)

    }

    componentDidMount() {
        // const client = new MapboxClient('pk.eyJ1Ijoic2FnYXJrYWR1IiwiYSI6ImNrNndpcDlmaTBkMzQzZHJscGVubzhobDkifQ.01RVVfcCi5FqmRobJTo54g');
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnYXJrYWR1IiwiYSI6ImNrNndpcDlmaTBkMzQzZHJscGVubzhobDkifQ.01RVVfcCi5FqmRobJTo54g';

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });

        map.on('move', () => {
            this.setState({
                lng: map.getCenter().lng.toFixed(4),
                lat: map.getCenter().lat.toFixed(4),
                zoom: map.getZoom().toFixed(2)
            });
        });

        // this.unsubscribe = this.ref.onSnapshot(this.onComplaintUpdate);

    }

    handleClick = (lat, lng) => {
        mapboxgl.accessToken = 'pk.eyJ1Ijoic2FnYXJrYWR1IiwiYSI6ImNrNndpcDlmaTBkMzQzZHJscGVubzhobDkifQ.01RVVfcCi5FqmRobJTo54g';

        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: 17
        });

    }

    render() {
        let arr = []
        arr.push(this.state.complaints.values)
        console.log(arr)
        return (
            <div>
                <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                    <Link to='/' className="navbar-brand mx-auto font-weight-bold">Admin Dashboard</Link>
                </nav>
                <div className='d-flex'>
                    <div className='w-25 border h-100 text-center font-weight-bold'>Department
                        <button className='w-100 btn btn-light border py-5 border-danger'>Garbage Dump</button>
                        <button className='w-100 btn btn-light border py-5 border-danger'>PotHole</button>
                        <button className='w-100 btn btn-light border py-5 border-danger'>Improper Streets</button>
                        <button className='w-100 btn btn-light border py-5 border-danger'>Water Overflow</button>

                    </div>
                    <div className='w-50 border h-100 text-center font-weight-bold'>Tickets
                        <br />
                        <div class="card mb-3 ml-5" style={{ width: "18rem" }}>
                            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fdc-cdn.s3-ap-southeast-1.amazonaws.com%2Fdc-Cover-nepno9mm6htq9bkrchikfdm5l6-20160509001827.Medi.jpeg&f=1&nofb=1' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Collect garbage asap!</h5>
                                <p class="card-text">Please collect the garbage from pinned location as soon as possible. It has not been picked since 2 days.</p>
                                <button class="btn btn-primary" onClick={() => this.handleClick(12.9330976, 77.6122558)}>Ticket#1 User Location!</button>
                            </div>
                        </div>
                        <div class="card ml-5" style={{ width: "18rem" }}>
                            <img src='https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.thenewsminute.com%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fnews_detail%2Fpublic%2Fpothole_0_1.jpg%3Fitok%3D9T_q-8Mc&f=1&nofb=1' class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">Deadly pothole!</h5>
                                <p class="card-text">Please fix the this dangerous pothole asap, as all the residents of our area are facing issues of this.</p>
                                <button class="btn btn-primary" onClick={() => this.handleClick(18.5204, 73.8567)}>Ticket#2 User Location!</button>
                            </div>
                        </div>

                        {/* <button className='btn m-1 btn-primary' onClick={() => this.handleClick(12.9330976,77.6122558)}>Ticket#1 User Location!</button>
                        <br/>
                            <button className='btn m-1 btn-primary'onClick={() => this.handleClick(19.0760,72.8777)}>Ticket#2 User Location!</button>
                            <br/>
                            <button className='btn m-1 btn-primary'onClick={() => this.handleClick(18.5204,73.8567)}>Ticket#3 User Location!</button> */}
                    </div>

                    <div className='w-50' style={{ height: '800px' }} ref={el => this.mapContainer = el} />
                </div>
            </div>
        )
    }
}
