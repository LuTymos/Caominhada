import './Header.css'

import {FiMenu} from 'react-icons/fi'

function Header() {
    return ( 
    <div className="Header">
        <img src="./img/logo.png" alt="" />
        
        <FiMenu className='icon'/>
    </div> 
    );
}

export default Header;