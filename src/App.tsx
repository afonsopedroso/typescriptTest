import React, { useState } from "react";
import "./App.css";
import AddList from "./Components/AddList";
import List from "./Components/ListPeople"
import { People } from "./People"

export interface IState {
  people: {
    name:string,
    age: number,
    url: string,
    note?: string
  }[]
}

function App() {
 const [people, setPeople] = useState<IState["people"]>(People);



  return (
    <div className="App">
      <h1>People Invited to my party</h1>
      <List people={people} />
      <AddList people={people} addPeople={setPeople}/>
    </div>
  );
}

export default App;
