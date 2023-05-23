import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import logo from "./Logo1.jpg";


const TopBar = () => {
    return(
        <Navbar bg="light" variant="light " className="Topbar">
            <Container>

            <Link to="/Teacher/">
          <img src={logo} alt="Logo" width={60} height={60} />
        </Link>
                <Navbar.Brand>
                    <h4>
                        <Link to="" style={{marginRight: "1rem", textDecoration: "none", color: "Black", fontFamily: "consolas", fontWeight:"bold"}}> </Link>{' |'}
                        <Link to="/Teacher/" style={{marginLeft: "1rem", textDecoration: "none", color: "Black", fontWeight: "300"}}>Teacher</Link>{'|'}
                        <Link to="/" style={{marginRight: "1rem", textDecoration: "none", color: "#92E0FF", fontFamily: "consolas", fontWeight:"bold"}}> <LogoutIcon/></Link>
                   
                        <i className="fas fa-shopping-cart"></i>
                    </h4>
                   
                 
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default TopBar;