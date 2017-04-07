import React from 'react';

export default function GuessForm(props) {
let guessInput = null;
return (
  <div>
    <h3 className="react-feedback">{props.feedback}</h3>
    <form onSubmit={e=> {
      e.preventDefault();
      props.commitGuess(guessInput.value);
      guessInput.value='';
      }}>
      <input type="text" name="userGuess" id="userGuess"
      className="text" maxLength="3" autoComplete="off"
      placeholder="Enter your Guess" required 
      ref={(input) => {guessInput = input;}}/>
      <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
    </form>
  </div>
);
};

