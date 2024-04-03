"use client"

import React, { PureComponent } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from 'recharts';

const data = [
    { id: 1, name: 'Tango 1', field: 'Alpha 1', timestamp: '2024-02-01', production_1D: '35.4733002', production_7D: '45.55006413', production_target: '32.66973369', average_cycle_time: '7451' },
    { id: 2, name: 'Tango 2', field: 'Alpha 2', timestamp: '2024-02-02', production_1D: '35.11643044', production_7D: '42.3755886', production_target: '30.06548101', average_cycle_time: '9600' },
    { id: 3, name: 'Tango 3', field: 'Alpha 2', timestamp: '2024-02-03', production_1D: '34.53149194', production_7D: '36.75618112', production_target: '34.64543356', average_cycle_time: '5430' },
    { id: 4, name: 'Tango 4', field: 'Alpha 3', timestamp: '2024-02-04', production_1D: '37.94294405', production_7D: '31.64114136', production_target: '26.52551354', average_cycle_time: '9747' },
    { id: 5, name: 'Tango 5', field: 'Alpha 1', timestamp: '2024-02-05', production_1D: '27.26184654', production_7D: '26.24093916', production_target: '35.43494297', average_cycle_time: '6800' },
    { id: 6, name: 'Tango 6', field: 'Alpha 2', timestamp: '2024-02-06', production_1D: '30.99041239', production_7D: '27.61955954', production_target: '32.66973369', average_cycle_time: '0989' },
    { id: 7, name: 'Tango 7', field: 'Alpha 2', timestamp: '2024-02-07', production_1D: '17.82567739', production_7D: '45.55006413', production_target: '26.77123972', average_cycle_time: '5912' },
    { id: 8, name: 'Tango 8', field: 'Alpha 3', timestamp: '2024-02-08', production_1D: '93.78384511', production_7D: '21.42483516', production_target: '35.38149905', average_cycle_time: '2800' },
    { id: 9, name: 'Tango 9', field: 'Alpha 4', timestamp: '2024-02-09', production_1D: '27.26184654', production_7D: '20.73308991', production_target: '28.71244932', average_cycle_time: '5080' },
    { id: 10, name: 'Tango 10', field: 'Alpha 4', timestamp: '2024-02-10', production_1D: '30.99041239', production_7D: '27.34817348', production_target: '32.66973369', average_cycle_time: '8400' },
    { id: 11, name: 'Tango 11', field: 'Alpha 4', timestamp: '2024-02-11', production_1D: '17.82567739', production_7D: '23.0230487', production_target: '5.841246785', average_cycle_time: '7451' },
    { id: 12, name: 'Tango 12', field: 'Alpha 4', timestamp: '2024-02-12', production_1D: '93.78384511', production_7D: '45.55006413', production_target: '65.66973369', average_cycle_time: '17130' },
  
  ];

export default class TimeSeries extends PureComponent {

  render() {
    return (
      <div style={{ width: '42%' }}>
        <h4 className='text-black pl-14 pt-2'>Time series plots for Production_1D</h4>

        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="production_1D" stroke="#8884d8" fill="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
        <p className='text-black pl-14'>Average Time Cycle</p>

        <ResponsiveContainer width="100%" height={150}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="average_cycle_time" stroke="#82ca9d" fill="#82ca9d" />
            <Brush />
          </LineChart>
        </ResponsiveContainer>

      </div>
    );
  }
}
