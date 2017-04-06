import React from 'react';

import Header from './header';
// import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import GuessForm from './guess-form';

export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentGuess: 3,
      guessList:[33, 10, 15],
      count: 4,
      feedback: 'YUP!'
    }
  }
  // this.setState(e => e.target.value)
  // want to push the currentGuess to the guessList
  // function should be called commitGuess
  commitGuess(guessInput){
    console.log('commitGuess ran.');
    console.log(guessInput);
    this.setState({...this.state.guessList, guessInput});
  }
  render() { 
  return (
    <div>
      <Header />
      <GuessForm
        commitGuess={(value) => this.commitGuess(value)}
        feedback={this.state.feedback}
      />
      <GuessCount count={this.state.count} />
      <GuessList guesses={this.state.guessList} />
    </div>
  );
  };
}