"use client"

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { parse } from 'papaparse'; // Importing papaparse for CSV to JSON conversion
import './page.css' // Assuming there's a CSS file for basic table styling

export default function Page() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://drive.google.com/uc?id=1N7BqdH0Wx6SjuxTGUE5wsmwJmpVN4mvc', {
        responseType: 'blob', // Fetching the data as a Blob
      });
      result.data.text().then(text => {
        const jsonData = parse(text, { header: true }).data; // Using papaparse to convert CSV text to JSON
        setData(jsonData);
      });
    };

    fetchData();
  }, []);

  return (
    <div className='text-black'>
      <h1 className='text-lg font-medium px-4 py-1'>Production Table</h1>
      <table>
        <thead>
          <tr>
            <th>Well Name</th>
            <th>Field Name</th>
            <th>Timestamp</th>
            <th>Production_1D</th>
            <th>Production_7D</th>
            <th>Production Target</th>
            <th>Average Cycle Time</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row['Well Name']}</td>
              <td>{row['Field Name']}</td>
              <td>{row.Timestamp}</td>
              <td>{row.Production_1D}</td>
              <td>{row.Production_7D}</td>
              <td>{row['Production Target']}</td>
              <td>{row['Average Cycle Time']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

