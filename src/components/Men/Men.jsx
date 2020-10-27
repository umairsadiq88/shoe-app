import React from 'react'
import { Outlet} from 'react-router-dom';

const Men = () => {
    return (
        <div>
            <h1>This is Men Category</h1>
            <Outlet />
        </div>
    )
}

export default Men;