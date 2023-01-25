import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import CartWidget from './CartWidget'
import './styles/NavBar.css'

const NavBar = ({background}) => {
// const Logo = ''
    return(
<header className={`header background--${background}`}>
<div className='header-container'>
<Navbar bg="light" expand="lg">
      <Container>
        {/* <Navbar.Brand href="">PEDALES BOSS</Navbar.Brand> */}
          <Nav className="me-auto">
            <Nav.Link href="">Inicio</Nav.Link>
            <Nav.Link href="">Productos</Nav.Link>
            <Nav.Link href="">Blog</Nav.Link>
            <Nav.Link href="">Contacto</Nav.Link>
            <Nav.Link href=""><CartWidget /></Nav.Link>
          </Nav>
      </Container>
</Navbar>
</div>
</header>
    )
}
export default NavBar