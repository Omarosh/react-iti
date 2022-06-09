import { NavLink } from "react-router-dom";

let Header = ()=>{
    return (
        <div id="menu-outer">
            <div className="table">
                <ul id="horizontal-list">
                    <li><NavLink to={'/home'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'*'}>Error</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;