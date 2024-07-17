import React, { useState } from 'react';
import {FaReact, FaBars} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import {Link} from 'react-router-dom';
import './styles.scss'

const data = [
    {
        label : 'HOME',
        to : '/'
    },
    {
        label : 'ABOUT',
        to : '/about'
    },
    {
        label : 'CONTACT',
        to : '/contact'
    },
    {
        label : 'PROJECTS',
        to : '/projects'
    },
    {
        label : 'RESUME',
        to : '/resume'
    },
    {
        label : 'SKILLS',
        to : '/skills'
    }
]

const Navbar = () =>
{
    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () =>
    {
        setToggleIcon(!toggleIcon);
    };

    return(
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to = {'/'} className='navbar-container-logo'>
                    <FaReact fontSize={30} />
                    </Link>
                </div>

                <ul className={`navbar-container-menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key = {key} className='navbar-container-menu-item'>
                            <Link className='navbar-container-menu-item-link' to = {item.to}>
                            {item.label}
                            </Link>
                            </li>
                        ))
                    }
                </ul>

                <div className='nav-icon' onClick={handleToggleIcon}>
                    {
                    toggleIcon ? <HiX size={30}/> : <FaBars size={30}/>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar;