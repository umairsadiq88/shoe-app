import React from 'react'
import { Outlet} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { useParams } from 'react-router-dom'

const Women = () => {
    return (
        <div>
            <h1>This is Women Category</h1>
            <Outlet />
        </div>
    )
}


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
};


const WomenShoe = () => {
    const { slug } = useParams();
    const womenShoe = womenShoes[slug];

    if (!womenShoe) {
        return <h2>Not Found!</h2>
    }

    const { name, img } = womenShoe;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}


export default Women;
export { WomenIndex, WomenShoe } ;