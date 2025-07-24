// IpInfo.js
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function IpDisplay() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get("https://find-my-ip.onrender.com")
      .then(response => setData(response.data))
      .catch(error => console.error(error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="container">
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
  );
}

