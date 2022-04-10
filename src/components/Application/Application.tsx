import React, { useState } from 'react';
import Choice from '../Choice';
import CreditSlider from '../CreditSlider';
import LoanSlider from '../LoanSlider';
import MoneyInput from '../MoneyInput';
import TextInput from '../TextInput';
import './Application.css';

interface ApplicationProps {
  loanAmount: number,
  setLoanAmount: any,
}

const Application = ({loanAmount, setLoanAmount}:ApplicationProps) => {
  const [email, setEmail] = useState<string>('');
  const [first, setFirst] = useState<string>('');
  const [last, setLast] = useState<string>('');
  const [married, setMarried] = useState<string | undefined>(undefined);
  const [dependents, setDependents] = useState<string | undefined>(undefined);
  const [education, setEducation] = useState<string | undefined>(undefined);
  const [selfEmployed, setSelfEmployed] = useState<string | undefined>(undefined);
  const [income, setIncome] = useState<number>(0);
  const [step, setStep] = useState<number>(0);
  const [intrestRate, setIntrestRate] = useState<number>(0.0623);
  const [creditScore, setCreditScore] = useState<number>(720);

  const formIsValid = () => {
    const emailValid = email !== '';
    const firstValid = first !== '';
    const lastValid = last !== '';
    const marriedValid = married !== undefined;
    const dependentsValid = dependents !== undefined;
    const educationValid = education !== undefined;
    const selfEmmployedValid = selfEmployed !== undefined;
    const incomeValid = income > 0;
    if (emailValid && firstValid && lastValid && marriedValid && dependentsValid && educationValid && selfEmmployedValid && incomeValid) {
      return true;
    } else {
      return false;
    }
  }

  const step0Markup = (
    <>
        <TextInput value={email} setValue={setEmail} placeholder='enter your email' type='email'/>
        <p className='input-label'>Enter your name</p>
        <div className='input-group'>
          <TextInput value={first} setValue={setFirst} placeholder='first'/>
          <TextInput value={last} setValue={setLast} placeholder='last'/>
        </div>
        <p className='input-label'>Are you married?</p>
        <Choice selected={married} setSelected={setMarried} choices={['yes', 'no']}/>
        <p className='input-label'>Select number of dependents</p>
        <Choice selected={dependents} setSelected={setDependents} choices={['0', '1', '2', '3+']}/>
        <p className='input-label'>Select your college eduction level</p>
        <Choice selected={education} setSelected={setEducation} choices={['High School', 'College']}/>
        <p className='input-label'>Are self-employed?</p>
        <Choice selected={selfEmployed} setSelected={setSelfEmployed} choices={['yes', 'no']}/>
        <p className='input-label'>Enter your monthly income</p>
        <MoneyInput value={income} setValue={setIncome}/>
        <button className={ formIsValid() ? 'btn w-100' : 'btn w-100 btn-muted'} onClick={() => { if (formIsValid()) {setStep(1)}}}>Continue</button>    
    </>
  );

  const step1Markup = (
    <>
      <CreditSlider credit={creditScore} setCredit={setCreditScore} setIntrest={setIntrestRate} setStep={setStep}/>
    </>
  );

  const step2Markup = (
    <>
      <LoanSlider loanAmount={loanAmount} setLoanAmount={setLoanAmount} intrestRate={intrestRate} submitText='Submit Application' onSubmit={() => setStep(3)}/>
    </>
  );

  return (
    <div className='application'>
      <h1 className='application-title'>Loan Application</h1>
      <div className='application-form'>
        {step === 0 && step0Markup}
        {step === 1 && step1Markup}
        {step === 2 && step2Markup}
      </div>
    </div>
  );
}

export default Application;
