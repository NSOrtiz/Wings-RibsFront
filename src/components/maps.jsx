import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

const SucursalMap = ({ lat, lng }) => (
  <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY}>
    <GoogleMap
      mapContainerStyle={{ width: '100%', height: '400px' }}
      center={{ lat, lng }}
      zoom={15}
    >
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  </LoadScript>
);
