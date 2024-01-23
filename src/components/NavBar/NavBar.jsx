import './NavBar.css';
import CardWidget from '../CardWidget/CardWidget';
import {Link, NavLink} from 'react-router-dom';

const NavBar = () => {
  return (
      <header>
        <Link to="/">
        <img className='imgNav' src="../img/Skatedeluxeee.png" alt="Skatedeluxe" />
        </Link>
        <nav>
            <ul>
                <li>
                  <NavLink to='/categoria/1' >
                    Tablas
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/categoria/2'>
                    Trucks
                  </NavLink>
                </li>
                <li>
                  <NavLink to='/categoria/3'>
                  Ruedas
                  </NavLink>
                  </li>
                <li>
                  <NavLink to='/categoria/4'>
                  Rodamientos
                  </NavLink>
                </li>
                <li>Accesorios</li>
            </ul>
        </nav>
        <CardWidget/>
      </header>
    
  )
}

export default NavBar
