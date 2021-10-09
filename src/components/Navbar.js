import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click,setClick] = useState(false);
    const handleClick =()=> setClick(!click);
    const closeMobileMenu =()=>setClick(false);
    return (
        <>
        {
            /* Navbar */}
            <nav className ="navbar">
                <div className="navbar-container">
                    <Link to ="/" className="navbar-logo">
                    TRVL<i class='fab fa-typo3' />
                    </Link>
                    <div className="menu-icon" onClick={handleClick}>
                        {/* If click */}
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active':'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>HOME</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/services' className='nav-links' onClick={closeMobileMenu}>SERVICES</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobileMenu}>PRODUCTS</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links' onClick={closeMobileMenu}>SIGN UP</Link>
                        </li>
                    </ul>
                </div>            
            </nav>            
        </>
    )
}

export default Navbar
