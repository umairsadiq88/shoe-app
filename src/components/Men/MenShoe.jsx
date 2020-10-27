import React from 'react'
import menShoes from './MenShoesData';
import { useParams } from 'react-router-dom'

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

export default MenShoe;