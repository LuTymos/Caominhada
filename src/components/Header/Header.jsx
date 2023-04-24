import './Header.css'

import { FiMenu } from 'react-icons/fi'
import { AiFillCloseCircle } from 'react-icons/ai'

import { Link } from 'react-router-dom'
import { useState } from 'react'

function Header() {

    const [Menu, setMenu] = useState('menu-none')


    return (
        <div className="Header">
            <div className="container">
                <img src="./img/logo.png" alt="" />

                <nav className="desktop-menu">
                    <ul>
                        <li>
                            <Link className='link' to='/'>Home</Link>
                        </li>
                        <li>
                            <Link className='link' to='/Sobre'>Sobre</Link>
                        </li>
                        <li>
                            <Link className='link' to='/blog'>Blog</Link>
                        </li>
                        <li>
                            <Link className='link' to='/faq'>FAQ</Link>
                        </li>
                    </ul>
                </nav>


                <span className='menu-mobile' onClick={() => { setMenu('menu-on') }}><FiMenu className='icon imenu' /></span>

                <div className={`menu ${Menu}`}>

                    <div className="opacity"></div>

                    <div className="menu_nav">


                    <div className="menu_top">

                    

                    <AiFillCloseCircle onClick={() => { setMenu('menu-none') }} className='close icon' />
                    </div>

                    <nav>
                        <ul>
                            <li>
                                <Link onClick={() => { setMenu('menu-none') }} className='link' to='/'>Home</Link>
                            </li>
                            <li>
                                <Link onClick={() => { setMenu('menu-none') }} className='link' to='/sobre'>Sobre nós</Link>
                            </li>
                            <li>
                                <Link onClick={() => { setMenu('menu-none') }} className='link' to='/blog'>Blog</Link>
                            </li>
                            <li>
                                <Link onClick={() => { setMenu('menu-none') }} className='link' to='/faq'>FAQ</Link>
                            </li>
                        </ul>
                    </nav>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Header;