import React, { Component } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Container from "./components/Container";
import CharacterCard from "./components/CharacterCard";
import "./App.css";
const charactersArray =  [
  {
    id: 1,
    name: "King of fighter",
    image: "https://tse1.mm.bing.net/th?id=OIP.kUdUna4FqxbYis3DHl7DPQHaNK&pid=15.1&P=0&w=300&h=300"
  },
  {
    id: 2,
    name: "Von",
    image: "https://static.giantbomb.com/uploads/original/15/151939/2295197-von_kaiser.jpg"
  },
  {
    id: 3,
    name: "Craig",
    image: "https://www.fightersgeneration.com/characters/marduk-hqt5.jpg"
  },
  {
    id: 4,
    name: "SoulCalibur",
    image: "https://tse3.mm.bing.net/th?id=OIP.UjsbPPD-dJ0_gYKrgDMASwHaIr&pid=15.1&P=0&w=300&h=300"
  },
  {
    id: 5,
    name: "Galford",
    image: "http://www.fightersgeneration.com/characters/galfordz2.jpg"
  },
  {
    id: 6,
    name: "Elsword",
    image: "https://tse3.mm.bing.net/th?id=OIP.1APvhB-eMJVorbby1OeRlAHaIp&pid=15.1&P=0&w=300&h=300"
  },
  {
    id: 7,
    name: "Character",
    image: "https://i.pinimg.com/736x/87/da/89/87da89647c3d9c7bbaeaf809ec0f8979--character-reference-character-concept.jpg"
  },
  {
    id: 8,
    name: "Justin",
    image: "https://i1.wp.com/operationrainfall.com/wp-content/uploads/2016/12/PUNISHER_002.jpg"
  },
  {
    id: 9,
    name: "Artwork character",
    image: "https://www.fightersgeneration.com/characters/axl-acc.jpg"
  },
  {
    id: 10,
    name: "Nobuyuki",
    image: "https://tse4.mm.bing.net/th?id=OIP.n90bxEqQGKgFWDHYiSjBpQHaI5&pid=15.1&P=0&w=300&h=300"
  },
  {
    id: 11,
    name: "Feng Wei",
    image: "https://tse2.mm.bing.net/th?id=OIP.0leEi-agPxWO7JE6gKSFfwHaJ4&pid=15.1&P=0&w=300&h=300"
  },
  {
    id: 12,
    name: "Erik",
    image: "http://1.bp.blogspot.com/-2zzOqxiWjgs/VjPUZpbUhRI/AAAAAAAAJj4/4fKUiHpYQZI/s1600/9%2BKagetora%2B.png"
  }
]

class App extends Component {
  state = {
    characters: charactersArray,
    score: 0,
    clicked: []
  }

  handleClick = (id)=> {
     this.shuffle(charactersArray);

    if(!this.state.clicked.includes(id)){
      this.setState({
        clicked: [...this.state.clicked, id],
        score: this.state.score + 1   
      })
    }else {
        this.setState({score:0, clicked: []});
    }
  }
  shuffle = (array) => {
        var x;
        var shuffleCards = array.length;
        var randomIndex;

        while (shuffleCards) {
          randomIndex = Math.floor(Math.random() * shuffleCards--);
      
          // shuffle cards 
          x = array[shuffleCards];
          array[shuffleCards] = array[randomIndex];
          array[randomIndex] = x;
        }      
  }

  render() {
    return (
      <div>
        <Nav title="Clicky Game" score={this.state.score}/>
        <Header/>
        <Container>
          {this.state.characters.map(character => (
            <CharacterCard
            id={character.id}
            handleClick={this.handleClick} 
            image={character.image} 
            name={character.name}
            />
          ))}
        </Container>
      </div>
    );
  }
}

export default App;

