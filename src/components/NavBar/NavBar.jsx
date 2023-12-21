import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'
const NavBar = () => {
  return (
      <header>
        <h1>E-Skateshop </h1>
        <nav>
            <ul>
                <li>Tablas</li>
                <li>Trucks</li>
                <li>Ruedas</li>
                <li>Rodamientos</li>
                <li>Accesorios</li>
            </ul>
        </nav>
        <CardWidget/>
      </header>
    
  )
}

export default NavBar
