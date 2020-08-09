import React from 'react';
import './App.module.css';
import Layout from '../UI/Layout/Layout'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;
