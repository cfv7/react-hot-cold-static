import React from 'react';

export default function GuessForm(props) {
let guessInput = null;
return (
  <form onSubmit={e=> {
    e.preventDefault();
    props.commitGuess(guessInput.value)}}>
    <input type="text" name="userGuess" id="userGuess"
    className="text" maxLength="3" autoComplete="off"
    placeholder="Enter your Guess" required 
    ref={(input) => {guessInput = input;}}/>
    <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
  </form>
);
};

