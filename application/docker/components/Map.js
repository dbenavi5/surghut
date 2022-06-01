import React, {useState} from 'react';
import GoogleMapReact from 'google-map-react';
import {geolocated} from 'react-geolocated';

const markerStyle = {
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
};

function Position({src}) {
  return (
    <div style={markerStyle}>
      <img
        width="30"
        height="30"
        src={src}
        alt="marker"/>
    </div>
  );
}

const handleApiLoaded = (map, maps) => {
  map.data.loadGeoJson(
      '/california-counties.geojson',
  );
  // use map and maps objects
};

function Map(props) {
  const [zoom, setZoom] = useState(6);


  if (props.coords) {
    const center = {
      lat: 36.778259,
      lng: -119.417931,
    };
    return (
    // Important! Always set the container height explicitly
      <div style={{height: '100vh', width: '100%'}}>
        <GoogleMapReact
          bootstrapURLKeys={{key: "AIzaSyA29Fg4-R5iHJQlaN7sEr0B6OgAIc-2q8o"}}
          defaultCenter={center}
          defaultZoom={zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({map, maps}) => handleApiLoaded(map, maps)}
          className={'map-container'}
	 >
          <Position
            lat={props.coords.latitude}
            lng={props.coords.longitude}
            src="https://img.icons8.com/color/96/undefined/marker--v1.png"
            alt="marker"
          />
          {props.children}
        </GoogleMapReact>
      </div>
    );
  }

  // if (!props.isGeolocationAvailable) {
  //    return (
  //        <div>Your browser does not support Geolocation</div>
  //    )
  // }

  return (
    <div>Geolocation is not enabled</div>
  );
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Map);
