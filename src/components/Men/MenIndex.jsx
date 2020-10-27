import React from 'react'
import {Link} from 'react-router-dom';
import menShoes from './MenShoesData';

const MenIndex = () => {
    return (
       <ul>
           {Object.entries(menShoes).map(([slug, {name, img}]) => (
               <li key={slug}>
                   <Link to={`/Men/${slug}`}>
                       <h2>{name}</h2>
                       <img src={img} alt={name}/>
                   </Link>
               </li>
           ))}
      </ul>
    );
}


export default MenIndex;