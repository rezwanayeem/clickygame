import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import characters from "./characters.json";
import Container from "./components/Container";
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
    score: 0,
    topScore: 0,
    clicked: [],
  };


  // Click event handler
  // score is added by each click
  // when click on same card start the game again
  imageClicked = id => {
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.resetGame();
    }
  };

  // keep tracking score until 5 available cards are clicked.
  // till press the same card, it will add new score to the top score 
  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({
      score: newScore,
    });
    if (newScore >= this.state.topScore) {
      this.setState({
        topScore: newScore
      });
    } else if (newScore === 5)
      this.handleShuffle();
  };

  //once done it shuffles the cards for further play
  handleShuffle = () => {
    const shuffledCards = shuffleCards(characters);
    this.setState({
      characters: shuffledCards
    });
  };

  // reset the game 
  resetGame = () => {
    this.setState({
      score: 0,
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };

  render() {
    return (
      <div>
        <Nav
          name="Clicky Game" score={this.state.score} topScore={this.state.topScore} />
        <Header h1="To earn score, click on an image but don't click on any more than once!" />
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
              id={character.id}
              image={character.image}
              imageClicked={this.imageClicked}
              handleScore={this.handleScore}
              resetGame={this.resetGame}
              handleShuffle={this.handleShuffle}
            />
          ))}
        </Container>
      </div>
    );
  }
}
export default App;
