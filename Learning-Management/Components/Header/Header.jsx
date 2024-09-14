
import { Link } from 'react-router-dom';

import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

 

export default function Header() {
  return (
    
    <div className='header'>
        <div className='header1'>
        <Link to="/"><img src="./public/Byway.png" alt="logoByway" /></Link>
        </div>
        <div className='header2'>
        <Link to ="/DetailCourses">Categories</Link>
        </div>
        <div className='header3'>
            <span><FontAwesomeIcon icon={faMagnifyingGlass} className='search-icon' /></span>
            <input type="search" placeholder='Search courses' className='search-input' />
        </div>
        <div className='header4'>
          Teach on Byway
        </div>
        <div className='header5'>
            <span><FontAwesomeIcon icon={faCartShopping} className='cart-icon' /><a href=""></a></span>
            <button className='logIn'>Log in</button>
            <button className='signIn'>Sign up</button>
        </div>
    </div>
    
  )
}
