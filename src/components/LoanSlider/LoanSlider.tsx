import React from 'react';
import './LoanSlider.css';

interface LoanSliderProps {
  loanAmount: number,
  setLoanAmount: any,
  intrestRate?: number,
  min?: number,
  max?: number,
  submitText: string,
  onSubmit: any,
  termLength?: number,
}

const LoanSlider = ({loanAmount, setLoanAmount, intrestRate, min, max, submitText, onSubmit, termLength}:LoanSliderProps) => {
  const loanMinimum = min ? min : 50000;
  const loanMaximum = max ? max : 1000000;
  const loanStep = 5000;
  const annualIntrestRate = intrestRate ? intrestRate : .0623;
  const monthlyIntrestRate = annualIntrestRate / 12;
  const termMonths = termLength ? termLength : 240;
  const principle = Number(loanAmount);
  const termYears = termMonths / 12;
  const monthlyCost = principle * (monthlyIntrestRate * (1 + monthlyIntrestRate) ** termMonths) / ((1 + monthlyIntrestRate) ** termMonths - 1);
  const totalCost = monthlyCost * termMonths;

  return (
    <div className='loan-slider'>
      <input 
        type='range'
        className='loan-slider-range'
        min={loanMinimum}
        max={loanMaximum}
        step={loanStep}
        value={loanAmount}
        onChange={(e) => setLoanAmount(e.target.value)}
      />
      <div className='loan-slider-amounts'>
        <div className='loan-slider-amount-container'>
          <h1 className='loan-slider-amount'>${monthlyCost.toLocaleString('en-US', {maximumFractionDigits: 0})}</h1>
          <p className='loan-slider-amount-label'>Per Month</p>
        </div>
        <div className='loan-slider-amount-container-right'>
          <h1 className='loan-slider-amount'>${principle.toLocaleString('en-US')}</h1>
          <p className='loan-slider-amount-label'>Loan Amount</p>
        </div>
      </div>
      <div className='loan-slider-info'>
        <div className='loan-slider-stat-container'>
          <p className='loan-slider-stat-label'>Intrest Rate</p>
          <h2 className='loan-slider-stat'>{(annualIntrestRate * 100).toFixed(2)}%</h2>
        </div>
        <div className='divider'></div>
        <div className='loan-slider-stat-container'>
          <p className='loan-slider-stat-label'>Total Cost</p>
          <h2 className='loan-slider-stat'>${totalCost.toLocaleString('en-US', {maximumFractionDigits: 0})}</h2>
        </div>
        <div className='divider'></div>
        <div className='loan-slider-stat-container'>
          <p className='loan-slider-stat-label'>Length (years)</p>
          <h2 className='loan-slider-stat'>{termYears}</h2>
        </div>
      </div>
      <button className='btn w-100' onClick={() => onSubmit()}>{submitText}</button>
    </div>
  );
}

export default LoanSlider;
