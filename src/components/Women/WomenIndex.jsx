import React from 'react'
import {Link} from 'react-router-dom';
import womenShoes from './WomenShoesData';

const WomenIndex = () => {
    return (
       <ul>
           {Object.entries(womenShoes).map(([slug, {name, img}]) => (
               <li key={slug}>
                   <Link to={`/Women/${slug}`}>
                       <h2>{name}</h2>
                       <img src={img} alt={name}/>
                   </Link>
               </li>
           ))}
      </ul>
    );
}


export default WomenIndex;