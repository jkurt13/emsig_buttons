import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'

import NavBar from './components/Navbar'
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className='container' >
      <Dashboard></Dashboard>
      </div>
    </div>
  );
}

export default App;
