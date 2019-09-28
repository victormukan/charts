import React from 'react';
import './App.css';
import FrequencyChart from './components/FrequencyChart';
import Table from './components/Table'
import { toEncodeChartData, decodedChartData } from './components/data';

const App = () =>  (
  <div className="app">
    <div className="flex-container">        
      <Table chartData={decodedChartData} />
      <FrequencyChart chartData={decodedChartData} />
    </div>
  </div>
);

export default App;
