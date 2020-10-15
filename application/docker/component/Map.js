import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { geolocated } from "react-geolocated";

const Mark = ({ src }) => <img src={src}/>;

function Map(props) {

    const [zoom, setZoom] = useState(11);

    
    if (props.coords) {
        const center = {
            lat: props.coords.latitude,
            lng: props.coords.longitude
        }
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCKcBbyY43_ocqIJQUmQlSHZopPH-TPhuA" }}
                defaultCenter={center}
                defaultZoom={zoom}
                >
                    <Mark
                      lat={props.coords.latitude}
                      lng={props.coords.longitude}
                      src="https://image.flaticon.com/icons/png/128/3603/3603850.png"
                    />
                </GoogleMapReact>
            </div>
        )
    }

    if (!props.isGeolocationAvailable) {
        return (
            <div>Your browser does not support Geolocation</div>
        )
    }

    return (
        <div>Geolocation is not enabled</div>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Map);;