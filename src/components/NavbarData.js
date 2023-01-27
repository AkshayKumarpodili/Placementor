import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navdata.css';


function NavbarData() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <div className='wd'>
        {/* <img className='zoom ' src='https://upload.wikimedia.org/wikipedia/en/4/47/VNRVJIETLogo.png' /> */}
        <Navbar.Brand href="#" className='ms-2 font zoom'>T&P Cell</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/contactus">ContactUs</Nav.Link>
            <Nav.Link href="/aboutus">AboutUs</Nav.Link>
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>



 
  );
}

export default NavbarData;