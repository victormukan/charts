import React, { useState } from 'react';
import '../App.css';
import Chart from 'react-apexcharts';


export default function FrequencyChart({ chartData }) {
  const [state] = useState({
    options: {
      chart: {
        id: 'basic-bar'
      },
      xaxis: {
        categories: chartData.map(i => i.key)
      }
    },
    series: [{
      name: 'letter frequency',
      data: chartData.map(i => i.frequency)
    }]
  });

  return (
    <div className="centered">
      <Chart
        options={state.options}
        series={state.series}
        type="bar"
        width="1000"
      />
    </div>
  );
}
