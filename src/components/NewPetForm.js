import React, { Component } from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import './NewPetForm.css'

class NewPetForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // lengthOfList: props.listLength.length,
      id: "",
      name: "",
      location: "",
      about: "",
      species: "",
      images: "",
    };
  }

  onChangeHandler = (event) => {
    const field = {}
    field[event.target.name] = event.target.value;

    this.setState(field);
    // console.log(event.target.id)
  }
  
  handleSubmit = (event) => {
    event.preventDefault();
    
    this.props.addPetCallback({
      id: this.props.maxId + 1,
      name: this.state.name,
      location: this.state.location,
      about: this.state.about,
      species: this.state.species,
      images: this.state.images,
    });

    this.setState({
      id: "",
      name: "",
      location: "",
      about: "",
      species: "",
      images: "",
    });
  }

  render() {
    return (
      <form  className="new-pet-form" onSubmit={this.handleSubmit}>
        <h3>Add a Pet</h3>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            name="name"
            onChange={this.onChangeHandler}
            value={this.state.name}
          />
        </div>
        <div>
          <label htmlFor="location">Location:</label>
          <input
            // className={emailValid ? 'valid' : 'invalid'}
            name="location"
            value={this.state.location}
            onChange={this.onChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="about">About:</label>
          <input 
            name="about"
            value={this.state.about}
            onChange={this.onChangeHandler}/>
        </div>
        <div>
          <label htmlFor="species">Species:</label>
          <input 
            name="species"
            value={this.state.species}
            onChange={this.onChangeHandler}/>
        </div>
        <div>
          <label htmlFor="images">Image:</label>
          <input 
            name="images"
            value={this.state.images}
            onChange={this.onChangeHandler}/>
        </div>
        <input className="btn btn-success new-pet-form--submit" type="submit" name="submit" value="Add a Pet" />
      </form>
    );
  }


}

NewPetForm.propTypes = {
  addPetCallback: PropTypes.func.isRequired,
};

export default NewPetForm;