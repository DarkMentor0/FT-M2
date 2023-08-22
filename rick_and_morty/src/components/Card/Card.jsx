import React from 'react';
import styles from './Card.module.css'
export default function Card(props) {
   const {id, name, status, species, gender, origin, image, onClose} = props;
   return (
      <div className={styles.div}>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <img src={image} alt='' /> 
         <h2>Status: {status}</h2>
         <h2>Specie: {species}</h2>
         <h2>Gender: {gender}</h2>
         <h2>{origin.name}</h2>
      </div>
   );
}
