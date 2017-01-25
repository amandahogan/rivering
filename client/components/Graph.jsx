import React from 'react'
import {AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

const data = [
      {name: '6:00am', usercumecs: 27, rcumecs: 15},
      {name: '8:00am', usercumecs: 30, rcumecs: 20},
      {name: '10:00am', usercumecs: 32, rcumecs: 27},
      {name: '12:00am', usercumecs: 36, rcumecs: 30},
      {name: '2:00pm', usercumecs: 32, rcumecs: 32},
      {name: '4:00pm', usercumecs: 32, rcumecs: 32},
      {name: '6:00pm', usercumecs: 32, rcumecs: 30},
];

export default React.createClass({
  render() {
    return (
      // <ResponsiveContainer width={700} height="80%">
        <AreaChart width={600} height={400} data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Area type="monotone" dataKey="usercumecs" stroke="#8884d8" fillOpacity={0.3} fill="#8884d8" />
          <Area type="monotone" dataKey="rcumecs" stroke="#82ca9d" fillOpacity={0.3} fill="#82ca9d" />
        </AreaChart>
      // </ResponsiveContainer>

    )
  }
})
