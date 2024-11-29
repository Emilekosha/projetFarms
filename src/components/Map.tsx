import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { farms } from '../data/farms';
import 'leaflet/dist/leaflet.css';

export default function Map() {
  return (
    <MapContainer
      center={[4.3947, 17.3244]}
      zoom={3}
      className="w-full h-[600px]"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {farms.map((farm) => (
        <Marker key={farm.id} position={[farm.latitude, farm.longitude]}>
          <Popup>
            <div className="p-2">
              <h3 className="font-bold">{farm.name}</h3>
              <p className="text-sm">{farm.description}</p>
              <p className="text-xs mt-1">{farm.address}</p>
              <div className="mt-2">
                <h4 className="font-semibold text-sm">Produits:</h4>
                <ul className="text-xs list-disc list-inside">
                  {farm.products.map((product, index) => (
                    <li key={index}>{product}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}