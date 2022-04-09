import React from 'react';
import LoanSlider from '../LoanSlider';
import './Home.css';

interface HomeProps {
  loanAmount: any,
  setLoanAmount: any,
}

const Home = ({loanAmount, setLoanAmount}:HomeProps) => {
  return (
    <div className='home'>
      <div className='home-body'>
        <div className='home-body-section'>
          <h1 className='home-title'>Easiest place to apply for your loan</h1>
          <p className='home-text'>Need cash fast? Don’t understand the technical jargon used by traditional lenders? Hedgehog aims to alleviate these pains</p>
        </div>
        <div className='home-body-section'>
          <LoanSlider loanAmount={loanAmount} setLoanAmount={setLoanAmount}/>
        </div>
      </div>
    </div>
  );
}

export default Home;
