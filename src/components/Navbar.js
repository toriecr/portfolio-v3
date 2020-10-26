import React from "react"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/pageLinks"

const Navbar = ({ toggleSidebar }) => {
    return <nav className="navbar">
        <div className="nav-center">
           
            <button type="button" className="toggle-btn" onClick={toggleSidebar}>
                <FaAlignRight></FaAlignRight>
            </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
    </nav>
}

export default Navbar;