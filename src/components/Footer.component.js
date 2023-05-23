import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import LogoutIcon from '@mui/icons-material/Logout';
import logo from "./Footer.png";


const Footer = () => {
    return(
        
            <Container>

            <Link to="/Teacher/">
          <img src={logo} alt="Logo" width={1000} height={15} />
        </Link>
                
            </Container>
      
    );
}

export default Footer;