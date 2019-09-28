import React from 'react';
import './App.css';
import FrequencyChart from './components/FrequencyChart';
import Table from './components/Table'

const App = () =>  (
  <div className="app">
    <Table />
    <FrequencyChart />
  </div>
);

export default App;
