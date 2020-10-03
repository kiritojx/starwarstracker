import React, { Component } from "react";
import "./App.css";
import CardList from "../components/CardList";
import { Header } from "../components/Header";
import "tachyons";
import SearchBox from "../components/SearchBox";
import ErrorBoundary from "../components/ErrorBoundary";
import Scroll from "../components/Scroll";

class App extends Component {
  constructor() {
    super();
    this.state = {
      people: [],
      searchField: "",
    };
  }

  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch(
      "https://raw.githubusercontent.com/akabab/starwars-api/master/api/all.json"
    )
      .then((resp) => resp.json())
      .then((people) => this.setState({ people: people }));
  }

  render() {
    const { people, searchField } = this.state;
    const filteredPeople = people.filter((person) => {
      return person.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="tc stars">
        <Header count={this.state.people.length} />
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundary>
            <CardList people={filteredPeople} />
          </ErrorBoundary>
        </Scroll>
      </div>
    );
  }
}

export default App;
