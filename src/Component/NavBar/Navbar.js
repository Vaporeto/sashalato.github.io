import Menu from '../MenuImage/Menu';
import './Navbar.css';
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Navbar(){

    const menuItem1 = useRef(null);
    const menuItem2 = useRef(null);
    const menuItem3 = useRef(null);
    const menuItem4 = useRef(null);

    const theme = useTheme();
    // Consultas de medios para diferentes tamaños de pantalla
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm')); // Pantallas pequeñas
    const isMediumScreen = useMediaQuery(theme.breakpoints.between('md', 'lg')); // Pantallas medianas
    const isLargeScreen = useMediaQuery(theme.breakpoints.up('xl')); // Pantallas grandes
   
    // Número de columnas para diferentes tamaños de pantalla
    const imageValid = isSmallScreen ? false : (isMediumScreen ? true : (isLargeScreen ? true : true));

    const handleMenuItem1Enter = () => {
        console.log(imageValid, isSmallScreen, isMediumScreen, isLargeScreen)
        if (!isOpen && imageValid){
            document.querySelector('#m-img-1').style.opacity = '1';
            menuItem2.current.style.opacity = ".12";
            menuItem3.current.style.opacity = ".12";
            menuItem4.current.style.opacity = ".12";
        }
      };
    
      const handleMenuItem1Leave = () => {
        if(imageValid){
            document.querySelector('#m-img-1').style.opacity = "0";
            menuItem2.current.style.opacity = "1";
            menuItem3.current.style.opacity = "1";
            menuItem4.current.style.opacity = "1";
        }
        
      };
    
      const handleMenuItem2Enter = () => {
        if (!isOpen && imageValid){
            document.querySelector('#m-img-2').style.opacity = "1";
            menuItem1.current.style.opacity = ".12";
            menuItem3.current.style.opacity = ".12";
            menuItem4.current.style.opacity = ".12";
        }
      };
    
      const handleMenuItem2Leave = () => {
        if (imageValid){
            document.querySelector('#m-img-2').style.opacity = "0";
            menuItem1.current.style.opacity = "1";
            menuItem3.current.style.opacity = "1";
            menuItem4.current.style.opacity = "1";
        }
        
      };
    
      const handleMenuItem3Enter = () => {
        if (!isOpen && imageValid){
            document.querySelector('#m-img-3').style.opacity = "1";
            menuItem1.current.style.opacity = ".12";
            menuItem2.current.style.opacity = ".12";
            menuItem4.current.style.opacity = ".12";
        }
      };
    
      const handleMenuItem3Leave = () => {
        if (imageValid){
            document.querySelector('#m-img-3').style.opacity = "0";
            menuItem1.current.style.opacity = "1";
            menuItem2.current.style.opacity = "1";
            menuItem4.current.style.opacity = "1";
        }
        
      };
    
      const handleMenuItem4Enter = () => {
        if (!isOpen && imageValid){
            document.querySelector('#m-img-4').style.opacity = "1";
            menuItem1.current.style.opacity = ".12";
            menuItem2.current.style.opacity = ".12";
            menuItem3.current.style.opacity = ".12";
        }
      };
    
      const handleMenuItem4Leave = () => {
        if (imageValid){
            document.querySelector('#m-img-4').style.opacity = "0";
            menuItem1.current.style.opacity = "1";
            menuItem2.current.style.opacity = "1";
            menuItem3.current.style.opacity = "1";
        }
        
      };

    const [isOpen, setOpen] = useState("false");
    const menuRef = useRef(null);
    const handleClick = (e) => {
        if(e.currentTarget.classList.contains('open')) {
            setOpen(!isOpen); 
            
            setTimeout(() => {
                menuRef.current.style.pointerEvents = 'auto';
                menuRef.current.style.zIndex = 'auto';
            }, 275);
        } else {
            setOpen(!isOpen);
            
            setTimeout(() => {
                menuRef.current.style.pointerEvents = 'auto';
                menuRef.current.style.zIndex = 'auto';
            }, 275);
        }
    };

    const routeClick = (e) => {
        setOpen(!isOpen); 
    };

   
    return(
    <>
        <Menu isOpen={isOpen}></Menu>
       
        {/* <!-- #Navbar --> */}
        <nav id="navbar" className="flexbox">
            <div className="navbar-inner">
                <div className="navbar-left flexbox-left">
                    <div id="nav-button" onClick={handleClick} className={!isOpen ? 'open' : null}
                    style={{ transform: !isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="navbar-center">

                </div>
                <div className="navbar-right flexbox-right">
                    <Link to="/about" style={{ textDecoration: 'none' }}>
                    <p>ABOUT</p>
                    </Link>
                </div>
            </div>
        </nav>
        {/* <!-- #Menu --> */}
        <div className="menu-wrapper flexbox"
         style={{
            opacity: !isOpen ? '1' : '0',
            pointerEvents: !isOpen ? 'auto' : 'none',
            zIndex: !isOpen ? '5' : 'auto',
          }}>

            {/* <!-- Menu Right --> */}
            <ul className="menu flexbox-col-left-start" ref={menuRef}>
                <li id="m-item-w-1" className="menu-item flexbox">
                    <Link to="/" onClick={routeClick}>
                        <h1 id="m-item-1" className="menu-item-inner"
                        ref={menuItem1}
                        onMouseEnter={() => handleMenuItem1Enter()}
                        onMouseLeave={() => handleMenuItem1Leave()}>Historical Costume</h1>
                    </Link>
                </li>
                <li id="m-item-w-2" className="menu-item flexbox">
                    <Link to="/" onClick={routeClick}>
                        <h1 id="m-item-2" className="menu-item-inner"
                        ref={menuItem2}
                        onMouseEnter={() => handleMenuItem2Enter()}
                        onMouseLeave={() => handleMenuItem2Leave()}>Modern Costume</h1>
                    </Link>
                </li>
                <li id="m-item-w-3" className="menu-item flexbox">
                    <Link to="/proyects" onClick={routeClick}>
                        <h1 id="m-item-3" className="menu-item-inner"
                        ref={menuItem3}
                        onMouseEnter={() => handleMenuItem3Enter()}
                        onMouseLeave={() => handleMenuItem3Leave()}>Fantasy & Fashion</h1>
                    </Link> 
                </li>
                <li id="m-item-w-4" className="menu-item flexbox">
                    <Link to="/proyects" onClick={routeClick}>
                        <h1 id="m-item-4" className="menu-item-inner"
                        ref={menuItem4}
                        onMouseEnter={() => handleMenuItem4Enter()}
                        onMouseLeave={() => handleMenuItem4Leave()}>Dye & Crafts</h1>
                    </Link>
                </li>
            </ul>

            <div className="menu-background"></div>

        </div>
    </>
    );
}

export default Navbar;

