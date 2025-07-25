// IpInfo.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import './Pages.css';
import Map from '../components/Map.jsx';

export default function IpDisplay() {
  const [data, setData] = useState(null);
  const [location, setLocation] = useState(null);
  useEffect(() => {
    axios.get("https://find-my-ip.onrender.com")
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

useEffect(() => {
  if (data && data.lat && data.lon) {
    setLocation({ lat: data.lat, lon: data.lon });
  }
}, [data]);

if (!data) return <div>Loading...</div>;

return (
  <div className="container">
    <div className="ip-info">
    <h2>Your IP Information:</h2>
    <ul>
      <li><strong>IP Address:</strong> {data.ip}</li>
      <li><strong>Country:</strong> {data.country}</li>
      <li><strong>Region:</strong> {data.region}</li>
      <li><strong>City:</strong> {data.city}</li>
      <li><strong>ISP:</strong> {data.isp}</li>
      {/* Add more details as you like */}
    </ul>
    </div>
    <div className="map-container">
    <Map location={location} />
    </div>
  </div>
);
}

