import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

export default function Map({ location }) {
  if (!location) return <div>Loading map...</div>;

  const { lat, lon } = location;

  return (
    <MapContainer center={[lat, lon]} zoom={13} style={{ height: "200px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[lat, lon]}>
        <Popup>
          Here I am! ({lat}, {lon})
        </Popup>
      </Marker>
    </MapContainer>
  );
}