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
      currentGuess: 0,
      guessList:[],
      count: 0,
      feedback: 'YUP!',
      answer: 0
    }
  }
  // this.setState(e => e.target.value)
  // want to push the currentGuess to the guessList
  // function should be called commitGuess
  newGame(){
    this.setState({answer: Math.floor(Math.random() * 100)+1});
  }
  commitGuess(guessInput){
    let newcount= this.state.count+1;
    this.setState({currentGuess:  guessInput});
    console.log(this.state.guessList , guessInput);
    if (this.state.guessList.includes(guessInput) > 0) {
      alert('You already made this guess!');
    } else if (guessInput>100 || guessInput<0 || isNaN(guessInput) ){
      alert('Guess a number between 1-100');
    } 
    else {
       this.setState({ guessList: [...this.state.guessList,guessInput]}); 
       this.setState({count: newcount});
    }
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