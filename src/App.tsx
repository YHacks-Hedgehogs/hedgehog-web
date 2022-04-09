import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  const defaultLoanAmount = 360000;
  const [loanAmount, setLoanAmount] = useState(defaultLoanAmount);

  return (
    <>
      <Navbar />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Home loanAmount={loanAmount} setLoanAmount={setLoanAmount}/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
