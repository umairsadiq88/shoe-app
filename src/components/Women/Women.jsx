import React from 'react'
import { Outlet} from 'react-router-dom';

const Women = () => {
    return (
        <div>
            <h1>This is Women Category</h1>
            <Outlet />
        </div>
    )
}

export default Women;