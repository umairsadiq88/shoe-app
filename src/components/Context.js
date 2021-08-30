import React, { createContext } from 'react';
import Consumer from './Consumer';
import Data from './Data';

export const AllCategorieShoes = createContext();



const Context = () => {

    return (
        
            <allCategorieShoes.Provider value={Data}>
                <Consumer />
            </allCategorieShoes.Provider>
            )
};


export default Context;