import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
    return (
        <header>
            <Navbar bg='dark' variants="dark" expand="md" collapseOnSelect></Navbar>
            <Container>
                <Navbar.Brand href='/'>
                <img src={logo} alt="" />
                ProShop</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="/cart"><FaShoppingCart/>Cart
                    </Nav.Link>
                    <Nav.Link href="/login"><FaUser/>Sign In
                    </Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </header>
    )
}

export default Header;