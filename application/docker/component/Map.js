import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map(props) {

    const [center, setCenter] = useState(
        {
            lat: 59.95,
            lng: 30.33
        }
    );
    const [zoom, setZoom] = useState(11);

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyCKcBbyY43_ocqIJQUmQlSHZopPH-TPhuA" }}
            defaultCenter={center}
            defaultZoom={zoom}
            >
                <AnyReactComponent
                  lat={59.955413}
                  lng={30.337844}
                  text="My Marker"
                />
            </GoogleMapReact>
        </div>
    )
}

export default Map;