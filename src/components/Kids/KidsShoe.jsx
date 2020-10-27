import React from 'react'
import kidsShoes from './KidsShoesData';
import { useParams } from 'react-router-dom'

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
}

export default KidsShoe;