import React from 'react'
import { useState } from 'react'
import './styles/nav.css'

const Navbar :React.FC = ()=>{
    const [toggleNav, setToggleNav] = useState<boolean>(false);

    function handleToggle(){
        setToggleNav((pre)=> !pre);
    }

    return(
        <nav>
           <h3>Нав Бранд</h3>
           <ul className='nav-links'>
            <li><a href="#">Хоме</a></li>
            <li><a href="#">парламента</a></li>
            <li><a href="#">парламента</a></li>
            <li><a href="#">чланци</a></li>
            <li><a href="#">Галерија</a></li>
            <li><a href="#">Контакт</a></li>
           </ul>
           <div className="hamburger"
                onClick={handleToggle}>
             <div className="hamburger-line"></div>
             <div className="hamburger-line"></div>
             <div className="hamburger-line"></div>
           </div>
        </nav>
    )
}

export default Navbar;
