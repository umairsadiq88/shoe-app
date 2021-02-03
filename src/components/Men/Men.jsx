import React from 'react'
import { Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Men = () => {
    return (
        <div>
            <h1>This is Men Category</h1>
            <Outlet />
        </div>
    )
};


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


const MenShoe = () => {
    const { slug } = useParams();
    const menShoe = menShoes[slug];

    if (!menShoe) {
        return <h2>Not Found!</h2>
    }

    const { name, img } = menShoe;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}


export default Men; 
export { MenIndex, MenShoe };