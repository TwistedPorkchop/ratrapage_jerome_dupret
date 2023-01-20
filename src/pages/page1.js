import React, { PureComponent } from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import ca from '../json-data/ca.json'
import uvs from '../json-data/uvs.json'

export class FirstGraph extends PureComponent{

    render(){
        return(
            <ResponsiveContainer width="50%" height="50%">
                <LineChart
                    width={500}
                    height={300}
                    data={ca}
                    margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                    }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}
  