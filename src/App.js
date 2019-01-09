import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import "./App.css";


function shuffleCards(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};


class App extends Component {
  state = {
    characters,
    currentScore: 0,
    topScore: 8,
    clicked: [],
  };

  // Click event handler
  // score is added by each click
  // when click on same character start the game again
  // each character card holds each id 
  imageClicked = id => {
   //indexOf method returns the first index of a specified value (value = id)
   // because -1= 0; though -1 means "no match found"
    if (this.state.clicked.indexOf(id) === -1) {
      // until player clicked the same card of character, score remains stored
      this.handleScore();
      // keep comnnection with its component to track the clicked score each id hold
      this.setState({
        //merging id arrays
        clicked: this.state.clicked.concat(id)
      });
    } else {
      //reset the game
      this.resetGame();
    }
   
  };

  // keep tracking score until available cards are clicked.
  // while crossing the given top score will add value with each click to topscore ( for => score + 1)
  handleScore = () => {
    const newScore = this.state.currentScore + 1;
    this.setState({ currentScore: newScore });
    // if newscore > topscore happens topscore starts gaining value with newscore 
    if (newScore > this.state.topScore) {
      this.setState({ topScore: newScore});
      // clicking on the same card will shuffle the characters
    } else if (newScore < 0)
      this.shuffle();
  };

  //once done it shuffles the characters for further play
  shuffle = () => {
    const shuffledCards = shuffleCards(characters);
    this.setState({ characters: shuffledCards
 });
  };

  // reset the game 
  resetGame = () => {
     this.setState({
      // if player clicked the same cards will reset the score
      currentScore: 0,
      //if player sucessfully go beyond the top score will continue adding each click 
      topScore: this.state.topScore,
      clicked: []
    });
    this.shuffle();
  };
// render method transforming react components to display on the screen
// here map is used to convert an array to another array with shuffling characters 
  render() {
    return (
      <div>
        <Nav score={this.state.currentScore} topScore={this.state.topScore} />
        <Header/>
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              image={character.image}
              imageClicked={this.imageClicked}
              handleScore={this.handleScore}
              resetGame={this.resetGame}
              shuffle={this.shuffle}
            />
          ))}
        </Container>
      </div>
    );
  }
}
export default App;
