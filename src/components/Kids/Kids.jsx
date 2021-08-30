import React from 'react'
import Data from '../Data'
import { Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom'

console.log(Data)

const Kids = () => {
    return (
        <div>
            <h1>This is Kids Category</h1>
            <Outlet />
        </div>
    )
};


const KidsIndex = () => {
    return (
       <ul>
           {Object.entries(Data.kidsShoes).map(([slug, {name, img}]) => (
               <li key={slug}>
                   <Link to={`/Kids/${slug}`}>
                       <h2>{name}</h2>
                       <img src={img} alt={name}/>
                   </Link>
               </li>
           ))}
      </ul>
    );
};


const KidsShoe = () => {
    const { slug } = useParams();
    const kidsShoe = kidsShoes[slug];

    if (!kidsShoe) {
        return <h2>Not Found!</h2>
    }

    const { name, img } = kidsShoe;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
};

export { KidsIndex, KidsShoe }
export default Kids