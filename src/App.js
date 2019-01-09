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
    score: 0,
    topScore: 0,
    clicked: [],
  };


  // Click event handler
  // score is added by each click
  // when click on same card start the game again
  imageClicked = id => {
   //indexOf method returns the first index of a specified value (value = id)
   // because -1= 0; though -1 means "no match found"
    if (this.state.clicked.indexOf(id) === -1) {
      this.handleScore();
      this.setState({
        //merging id arrays
        clicked: this.state.clicked.concat(id)
      });
    } else {
      this.resetGame();
    }
  };

  // keep tracking score until 5 available cards are clicked.
  // Top score remaining the score till player clicked the same card
  // while top score go beyond 5, a value added with it ( for => score + 1)
  handleScore = () => {
    const newScore = this.state.score + 1;
    this.setState({ score: newScore });
    if (newScore >= this.state.topScore) {
      this.setState({ topScore: newScore});
      //while player clicked the same card will shuffle the card of characters
    } else if (newScore === 8)
      this.handleShuffle();
  };

  //once done it shuffles the cards for further play
  handleShuffle = () => {
    const shuffledCards = shuffleCards(characters);
    this.setState({ characters: shuffledCards
 });
  };

  // reset the game 
  resetGame = () => {
     this.setState({
      // if player clicked the same cards will reset the score
      score: 0,
      //if player clicked the same cards on which top score be continue adding each click till 7
      topScore: this.state.topScore,
      clicked: []
    });
    this.handleShuffle();
  };
// render method transforming react components to display on the screen
  render() {
    return (
      <div>
        <Nav score={this.state.score} topScore={this.state.topScore} />
        <Header/>
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
