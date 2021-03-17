import React, { useState, useCallback, memo } from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const center = {
  lat: -3.745,
  lng: -38.523
};

const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map);
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
      <GoogleMap
        mapContainerClassName="w-full h-96"
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        width="100%"
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
  ) : <></>
}

export default memo(Maps);