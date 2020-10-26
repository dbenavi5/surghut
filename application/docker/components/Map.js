import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import { geolocated } from "react-geolocated";

const markerStyle = {
    position: 'absolute',
    transform: 'translate(-50%, -50%)'
}

function Position({ src }) {
    return (
        <div style={markerStyle}>
            <img
            width="30"
            height="30"
            src={src}/>
        </div>
    )
}

const handleApiLoaded = (map, maps) => {
    map.data.loadGeoJson(
        "/california-counties.geojson"
    );
    // use map and maps objects
};

function Map(props) {

    const [zoom, setZoom] = useState(6);

    
    if (props.coords) {
        const center = {
            lat: 36.778259,
            lng: -119.417931
        }
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyCKcBbyY43_ocqIJQUmQlSHZopPH-TPhuA" }}
                defaultCenter={center}
                defaultZoom={zoom}
                yesIWantToUseGoogleMapApiInternals
                onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
                >
                    <Position
                      lat={props.coords.latitude}
                      lng={props.coords.longitude}
                      src="https://image.flaticon.com/icons/png/128/3603/3603850.png"
                    />
                    {props.children}
                </GoogleMapReact>
            </div>
        )
    }

    //if (!props.isGeolocationAvailable) {
    //    return (
    //        <div>Your browser does not support Geolocation</div>
    //    )
    //}

    return (
        <div>Geolocation is not enabled</div>
    )
}

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(Map);