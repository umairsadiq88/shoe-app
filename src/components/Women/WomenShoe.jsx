import React from 'react'
import womenShoes from './WomenShoesData';
import { useParams } from 'react-router-dom'

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

export default WomenShoe;