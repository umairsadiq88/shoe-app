import React from 'react'
import {Link} from 'react-router-dom';
import kidsShoes from './KidsShoesData';

const KidsIndex = () => {
    return (
       <ul>
           {Object.entries(kidsShoes).map(([slug, {name, img}]) => (
               <li key={slug}>
                   <Link to={`/Kids/${slug}`}>
                       <h2>{name}</h2>
                       <img src={img} alt={name}/>
                   </Link>
               </li>
           ))}
      </ul>
    );
}


export default KidsIndex;