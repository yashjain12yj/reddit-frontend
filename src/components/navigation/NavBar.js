import React from 'react'
import './NavBarStyle.css'

const NavBar = () => (
    <div className="navbar navbar-default" id="Menu">
        <div className="container-fluid NavBar">
            <div className="navbar-header">
                <a href="#" id="header-img">reddit.com</a>
            </div>

            <ul className="nav navbar-nav" id="tabmenu">
                <li><a>Hot</a></li>
                <li><a>New</a></li>
                <li><a>rising</a></li>
                <li><a>controversial</a></li>
                <li><a>top</a></li>
                <li><a>gilded</a></li>
                <li><a>wiki</a></li>
            </ul>
        </div>
    </div>
);

export default NavBar