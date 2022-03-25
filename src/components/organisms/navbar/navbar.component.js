import React from 'react';
import {Outlet} from 'react-router-dom';

const Navbar = () => {
    return <div>
        <div>
            NAVBAR !!!
            <ul>
                <li>len 1</li>
            </ul>
        </div>
        <div>
            <Outlet />
        </div>
    </div>
}

export default Navbar;
