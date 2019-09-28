import React from 'react';
import './App.css';
import FrequencyChart from './components/FrequencyChart';
import Table from './components/Table'

const App = () =>  (
  <div className="app">
    <div className="flex-container">        
      <Table />
      <FrequencyChart />
    </div>
  </div>
);

export default App;
