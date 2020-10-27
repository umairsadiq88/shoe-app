import React from 'react'
import { Outlet} from 'react-router-dom';

const Kids = () => {
    return (
        <div>
            <h1>This is Kids Category</h1>
            <Outlet />
        </div>
    )
}

export default Kids;