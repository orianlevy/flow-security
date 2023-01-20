import React from 'react';
import {Link} from "react-router-dom";

const Nav = () => {
    return (
        <div>
            <nav className="bp4-navbar bp4-dark">
                <div >
                    <div className="bp4-navbar-group bp4-align-left">
                        <div className="bp4-navbar-heading">Blog Posts</div>
                    </div>
                    <div className="bp4-navbar-group bp4-align-right">
                        <Link to="/posts"><button className="bp4-button bp4-minimal bp4-icon-home">Posts</button></Link>
                        <Link to="/statistics"><button className="bp4-button bp4-minimal bp4-icon-document">Statistics</button></Link>
                        <span className="bp4-navbar-divider"></span>
                        <button className="bp4-button bp4-minimal bp4-icon-user"></button>
                        <button className="bp4-button bp4-minimal bp4-icon-notifications"></button>
                        <button className="bp4-button bp4-minimal bp4-icon-cog"></button>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Nav;