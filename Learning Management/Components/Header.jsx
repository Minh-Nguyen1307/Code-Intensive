import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
 

export default function Header() {
  return (
    <div className='header'>
        <div className='header1'>
            <a href=""><img src="./public/Byway.png" alt="logoByway" /></a>
        </div>
        <div className='header2'>
            Categories <a href=""></a>
        </div>
        <div className='header3'>
            <span><FontAwesomeIcon icon={faMagnifyingGlass} class='search-icon' /></span>
            <input type="search" placeholder='Search courses' className='search-input' />
        </div>
        <div className='header4'>
           Teach on Byway <a href=""></a>
        </div>
        <div className='header5'>
            <span><FontAwesomeIcon icon={faCartShopping} class='cart-icon' /><a href=""></a></span>
            <button className='logIn'>Log in</button>
            <button className='signIn'>Sign up</button>
        </div>
        
    </div>
  )
}
