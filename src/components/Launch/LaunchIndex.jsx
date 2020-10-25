import React from 'react'
import shoes from '../../Shoesdata';
import {Link} from 'react-router-dom';

const LaunchIndex = () => {
    return (
       <ul>
           {Object.entries(shoes).map(([slug, {name, img}]) => (
               <li key={slug}>
                   <Link to={`/launch/${slug}`}>
                       <h2>{name}</h2>
                       <img src={img} alt={name}/>
                   </Link>
               </li>
           ))}
      </ul>
    );
}


export default LaunchIndex;