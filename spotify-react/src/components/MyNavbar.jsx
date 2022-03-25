import {Navbar, Nav,NavDropdown} from 'react-bootstrap'
import '../App.css'

 const NavbarStyle={
    backgroundColor: "transparent"
}
const myStyle={
    backgroundColor:"black",
    border: "1px solid black",
    borderRadius: "25px",
    color: "white",
    transform: "translateX(1100px)"
} 
const MyNavbar = () =>{
    return(

        <Navbar variant="light" style={NavbarStyle}>
        
        <Nav className="mr-auto">
          <NavDropdown title="Adam" className="Adam" id="basic-nav-dropdown" style={myStyle}>
        <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Upgrade to Premium</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Private Session</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Settings</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">Log out</NavDropdown.Item>
      </NavDropdown>
        </Nav>
      </Navbar> 


      


        
    )
}

export default MyNavbar