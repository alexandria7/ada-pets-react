import React from 'react';
import PropTypes from 'prop-types';
import PetCard from './PetCard';

import 'bootstrap/dist/css/bootstrap.min.css';


const PetList = (props) => { 
  const pets = props.allPets.map((pet, i) => {
    return (
      <li key={i}>
        <PetCard
          index={i}
          {...pet} />
      </li>
    );
  });

  return (
    <div className="card-group">
      <ul>
        {pets}
      </ul>
    </div>
  )
}

PetList.propTypes = {
  pets: PropTypes.array.isRequired,
  onSelectPet: PropTypes.func,
};

export default PetList;
