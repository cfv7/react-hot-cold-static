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
      feedback: 'WELCOME... TAKE A GUESS!',
      answer: 25
    }
  }
  // this.setState(e => e.target.value)
  // want to push the currentGuess to the guessList
  // function should be called commitGuess
  newGame(){
    this.setState({answer: Math.floor(Math.random() * 100)+1});
    console.log('new game');
  }
  commitGuess(guessInput){
    this.setState({currentGuess:  guessInput});
    console.log(this.state.guessList , guessInput);
    if (this.state.guessList.includes(guessInput) > 0) {
      alert('You already made this guess!');
    } else if (guessInput>100 || guessInput<0 || isNaN(guessInput) ){
      alert('Guess a number between 1-100');
    } 
    else {
       this.setState({ guessList: [...this.state.guessList,guessInput]}); 
       this.setState({count: this.state.count+1});
       const difference = Math.abs(guessInput - this.state.answer);
       console.log(difference);
       if (difference>=20) {
         this.setState({feedback: 'Cold.'});
       } else if (difference>=10) {
         this.setState({feedback: 'Warmer.'});
       } else if (difference>=5) {
         this.setState({feedback: 'Hot!'});
       } else if (difference>=1) {
         this.setState({feedback: 'ALMOST!'});
       } else {
         this.setState({feedback: 'WINNER!!'});
       }
    }
  }

  render() { 
    return (
      <div>
        <Header newGame={() => this.newGame()} />
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