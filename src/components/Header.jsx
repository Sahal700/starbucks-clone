import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Navbar className='nav position-fixed w-100 d-none d-md-block' style={{zIndex:'99'}} data-bs-theme="light">
        <Container>
          <Navbar.Brand><Link to={'/'}><img src="https://www.starbucks.in/assets/icon/logo.png" alt="no image" width={"40px"} height={"40px"} className='ms-2'/></Link></Navbar.Brand>
          <Nav className="me-auto">
            <div className='d-flex align-items-center'>
              <Link to={'/'} className='nav-links ms-5'>Home</Link>
              <Link to={'/gift'} className='nav-links'>Gift</Link>
              <Link to={'/order'} className='nav-links'>Order</Link>
              <Link to={'/'} className='nav-links'>Pay</Link>
              <Link to={'/store'} className='nav-links'>Store</Link>
            </div>
          </Nav>
          <div className='d-flex mt-2'>
            <div className='nav-div me-5'>
                <img src="https://www.starbucks.in/assets/icon/search.svg" alt="" />
                <input type="" className='border-0 ms-3 nav-input shadow py-2 ps-5 rounded-pill' placeholder='Looking for something specific?' />
            </div>
            <img className='ms-5' src="https://www.starbucks.in/assets/icon/account_thin.svg" alt="" width={'30px'} height={'30px'} />
          </div>
        </Container>
      </Navbar>
    </>
  )
}

export default Header