import React from 'react';
import './Choice.css';


interface ChoiceProps {
  selected: string | undefined,
  setSelected: any,
  choices: string[],
}

const Choice = ({selected, setSelected, choices}:ChoiceProps) => {
  return (
    <div className='choices'>
      {
        choices.map((choice) => {
          return (
            <button className={ choice === selected ? 'choice choice-selected' : 'choice' } onClick={() => setSelected(choice)}>{choice}</button>
          );
        })
      }
    </div>
  );
}

export default Choice;
