import React, { Component } from "react";
import WonderCard from "./components/WonderCard";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import wonder from "./wonder.json";
import Title from "./components/Title";

let clickedArr = [];

class App extends Component {
  // Setting this.state.wonder to the wonder json array
  state = {
    message: "Click an image to begin!",
    score: 0,
    topScore: 0,
    clicked: clickedArr,
    data: wonder
  };

  componentDidMount() {
    this.setState({ data: this.shuffleData(this.state.data) });
  }

  guessChecker = guess => {
    const { score, topScore } = this.state;
    const updatedScore = score + 1;
    let updatedTopScore = 0;

    // Update top score only if score is greater or equal
    if (updatedScore > topScore) {
      updatedTopScore = score + 1;
    } else {
      updatedTopScore = topScore;
    }
    if (!clickedArr.includes(guess)) {
      // Array doesn't include user's guess ("win")
      this.setState({ message: "Good Guess" });
      clickedArr.push(guess);

      // Check if user won (cliked all pics without clicking a pic twice)
      if (clickedArr.length === wonder.length) {
        this.setState({ message: "You Win" });
      }

      this.setState({
        score: updatedScore,
        topScore: updatedTopScore,
        data: this.shuffleData(this.state.data)
      });
    } else {
      // Array does include user's guess ("lose")
      this.setState({ message: "Oops, Try Again" });
      updatedTopScore--;
      clickedArr = [];
      this.setState({
        score: 0,
        topScore: updatedTopScore,
        clicked: clickedArr,
        data: this.shuffleData(this.state.data)
      });
    }
  };

  // Randomly shuffles pics
  shuffleData = data => {
    for (let i = wonder.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = data[i];
      data[i] = data[j];
      data[j] = temp;
    }
    return data;
  };

  // Handle a click
  handleClick = id => {
    console.log(`Already clicked picture: ${this.state.clicked}`);
    console.log(`Clicked picture: ${id}`);
    this.guessChecker(id);
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Navbar
          message={this.state.message}
          score={this.state.score}
          topScore={this.state.topScore}
        />
        <Title />
        {this.state.data.map(wonder => (
          <WonderCard
            id={wonder.id}
            key={wonder.id}
            image={wonder.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
