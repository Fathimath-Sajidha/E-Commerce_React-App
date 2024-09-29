
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import './NavBar.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCategory } from '../Redux/ProductSlice';
import {store} from '../../Components/Redux/Store'

function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { cartCount } = useSelector((store) => store.cartData);
  const { userName } = useSelector((store) => store.login);
  const handleCategoryClick = (category) => {
    dispatch(filterByCategory(category));
    navigate('/'); 
  };

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        <img className="logo" src="https://png.pngitem.com/pimgs/s/248-2488288_transparent-shopping-centre-clipart-transparent-background-shopping-cart.png" alt="logo" />
        <Navbar.Brand className='navbar-left'>{userName}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
           
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={() => handleCategoryClick('jewelery')}>Jewelry</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategoryClick("men's clothing")}>Men's Clothing</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategoryClick("women's clothing")}>Women's Clothing</NavDropdown.Item>
              <NavDropdown.Item onClick={() => handleCategoryClick('electronics')}>Electronics</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => handleCategoryClick('all')}>All Products</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <div className="navbar-right">
          <Nav.Link as={Link} to="/cart">
        
            <FaShoppingCart size={28} className="cartlogo" /><Badge pill variant="danger">{cartCount}</Badge>
            
          </Nav.Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default NavBar;