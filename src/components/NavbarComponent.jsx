import { useState, useEffect } from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap'

import {navLinks} from "../data/index"
import {Navigate, NavLink, useNavigate, useLocation} from "react-router-dom"

const NavbarComponent = () => {
  const navigate = useNavigate()

  // let navigate = useNavigate()
  // const location = useLocation()

  const [changeColor, setChangeColor] = useState(false)
  const changeBackgroundColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
  }else{}
   setChangeColor(false);
};

useEffect (()=>{
  changeBackgroundColor()
  window.addEventListener("scroll", changeBackgroundColor)
  return ()=>{
      window.removeEventListener("scroll", changeBackgroundColor)
  }
}, [])

// const handleJoinClick = ()=>{
//   navigate("")

// }





  return (
    <div>

    <Navbar   expand="lg" className={changeColor ? "color-active" : ""}>
      <Container>
        <Navbar.Brand href="#home" className='fs-3 fw-bold' onClick={()=> nagivate("/home")} >First Class.</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((link)=>{
              return(
                <div className='nav-link text-center' ey={link.id}>
                  <NavLink to={link.path} className={({isActive, isPending})=>
                   isPending ? "pending" : isActive ? "active" : ""
                    }end>
                    {link.text}</NavLink>
                </div>
              )
            })}
       

          </Nav>
        
        <div>

            <div className='text-center'>
              <button className='btn btn-outline-danger rounded-3 '
                type='submit'
                
              >
              Join With Us</button>
            </div>
            
        
        </div>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )

}



export default NavbarComponent