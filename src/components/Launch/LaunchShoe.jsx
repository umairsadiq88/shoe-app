import React from 'react'
import shoes from '../../Shoesdata'
import { useParams } from 'react-router-dom'

const LaunchShoe = () => {
    const { slug } = useParams();
    const shoe = shoes[slug];

    if (!shoe) {
        return <h2>Not Found!</h2>
    }

    const { name, img } = shoe;
    return (
        <div>
            <h2>{name}</h2>
            <img src={img} alt={name} />
        </div>
    )
}

export default LaunchShoe;