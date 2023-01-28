import { Component } from "react";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component.jsx";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  async componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { monsters: users };
        })
      );
  }
  onSearchChange = (event) => {
    //[ { name: 'Leanne'}, [ { name: 'Yihua'}]]
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); //includes() is case sensitive, must lowercase
    });

    return (
      <div className="App">
        <h1 className="app-title">Kitty Finder</h1>
        {/*filteredMonsters.map((monster) => {
          return (
            <div key={monster.name}>
              <h1>{monster.name}</h1>;<h3>{monster.email}</h3>;
            </div>
          );
        })*/}
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search kitties"
          className="monsters search-box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
