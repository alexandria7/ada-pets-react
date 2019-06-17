import React, { Component } from 'react';
import PetList from './components/PetList';
import PetCard from './components/PetCard'
import PetDetails from './components/PetDetails';
import SearchBar from './components/SearchBar';
import NewPetForm from './components/NewPetForm';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import pets from './data/pets.json';

class App extends Component {
  constructor(props) {
    super(props);

    const lastId = pets[pets.length - 1]["id"];

    this.state = {
      petList: pets,
      maxId: lastId,
      currentPet: undefined,
    };
  }

  getPetDetails = (index) => {
    this.setState({
      currentPet: this.state.petList[index]
    })

    console.log(typeof this.state.petList[index])
  }

  removePet = (index) => {
    const listOfPets = this.state.petList;
    listOfPets.splice(index, 1);
    this.setState({
      petList: listOfPets
    });

    console.log(this.state.petList.length)
  }

  addPetToList = (pet) => {
    const listOfPets = this.state.petList;
    listOfPets.push(pet);
    const currentMaxId = this.state.maxId;
    this.setState({
      petList: listOfPets,
      maxId: currentMaxId + 1
    });

    console.log(this.state.petList.length)
  }

  render() {
    const { currentPet } = this.state;
    
    return (
      <main className="App">
        <header className="app-header">
          <h1>Ada Pets</h1>
        </header>
        <section className="search-bar-wrapper">
          { /* Wave 4:  Place to add the SearchBar component */ }
          <SearchBar />
        </section>

        <section>
          {currentPet !== undefined ? <PetDetails currentPet={currentPet}/> : ""}
        </section>

        <section className="pet-list-wrapper">
          <PetList 
            pets={this.state.petList}
            onSelectPet={this.getPetDetails}
            onRemovePet={this.removePet}
          />
        </section>
        <section className="new-pet-form-wrapper">
          <NewPetForm 
            addPetCallback={this.addPetToList}
            maxId={this.state.maxId}
          />
        </section>
      </main>
    );
  }
}

export default App;
