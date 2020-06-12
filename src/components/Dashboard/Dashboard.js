import React, { Component } from 'react'
// import ReactLeaflet from 'leaflet'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
// const { Map: LeafletMap, TileLayer, Marker, Popup } = ReactLeaflet


class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            lat: 0,
            lng: 0,
            zoom: 12
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

    render() {
        console.log(this.state)
        const position = [this.state.lat, this.state.lng];
        return (
            <div>
                <h3 className='text-center'>Google Maps Location</h3>

                <div>
                <div style={{ height: '300px', width: '100%'}}>
                    <Map center={position} zoom={15}>
                        <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                        />
                        <Marker position={position}>
                        <Popup>
                            A pretty CSS3 popup. <br/> Easily customizable.
                        </Popup>
                        </Marker>
                    </Map>
                </div>
                </div>
            </div>
        )
    }
}
export default Dashboard