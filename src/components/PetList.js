import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => { 
  const showPetDetails = (index) => {
    props.onSelectPet(index)
  }

  const removePetDetails = (index) => {
    props.onRemovePet(index)
  }

  const allPets = props.pets.map((pet, i) => {
    return (
      <li key={i}>
        <PetCard
          index={i}
          {...pet} 
          petDetailsClickCallback={showPetDetails}
          petRemoveClickCallback={removePetDetails}
          />
      </li>
    );
  });

  return (
    <div className="card-group">
      <ul>
        {allPets}
      </ul>
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
