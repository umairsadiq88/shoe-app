import React from 'react'
import { Outlet} from 'react-router-dom';

const Launch = () => {
    return (
        <div>
            <h1>This is Launch Page</h1>
            <Outlet />
        </div>
    )
}

export default Launch;