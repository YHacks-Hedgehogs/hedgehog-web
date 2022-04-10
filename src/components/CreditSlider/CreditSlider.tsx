import React from 'react';
import './CreditSlider.css';

interface CreditSliderProps {
  min?: number,
  max?: number,
  credit: number,
  setCredit: any,
  setIntrest: any,
  setStep: any,
}

const CreditSlider = ({credit, setCredit, min, max, setIntrest, setStep}:CreditSliderProps) => {
  const intrestRate = 8.63 - (0.01438333 * (credit - 600));

  return (
    <div className='credit-slider'>
      <h1 className='credit-slider-title'>Credit Score</h1>
      <input 
        type='range'
        className='credit-slider-range'
        min={min? min : 600}
        max={max? max : 850}
        step={1}
        value={credit}
        onChange={(e) => {setCredit(e.target.value); setIntrest(intrestRate / 100)}}
      />
      <div className='credit-slider-amounts'>
        <div className='credit-slider-amount-container'>
          <h1 className='credit-slider-amount'>{credit}</h1>
          <p className='credit-slider-amount-label'>Credit Score</p>
        </div>
        <div className='credit-slider-amount-container-right'>
          <h1 className='credit-slider-amount'>{intrestRate.toFixed(2)}%</h1>
          <p className='credit-slider-amount-label'>Intrest Rate</p>
        </div>
      </div>
      <button className='btn w-100' onClick={() => setStep(2)}>Continue</button>
    </div>
  );
}

export default CreditSlider;
