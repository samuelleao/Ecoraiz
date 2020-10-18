import React from 'react';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import LogoOne from '../images/logo/logoPrimary.png';
import '../styles/components/header.css';

function Header() {

    function backToTopScroll() {
        window.scrollTo(0, 0)
    }

    function showMenuMobile() {
        const menu_button_mobile = document.querySelector('.menu_button_mobile')
        const menu = document.querySelector('.menu-links')
        if (menu_button_mobile.classList.contains('menu_button_active')) {
            menu_button_mobile.classList.remove('menu_button_active');
            menu.classList.remove('show_menu');
            document.querySelector('body').style = 'overflow-y: auto';
        } else {
            menu_button_mobile.classList.add('menu_button_active');
            menu.classList.add('show_menu');
            document.querySelector('body').style = 'overflow-y: hidden';
        }
    }

    return (
        <Navbar className='navbar fixed-top' expand="lg">
            <Container>
                <Navbar.Brand>
                    <img src={LogoOne} alt='Ecoraiz' title='Ecoraiz' />
                </Navbar.Brand>
                <label className="menu_button_mobile" type="button" onClick={showMenuMobile}>
                    <span className="menu_button_mobile_icon_custom"></span>
                    <span className="menu_button_mobile_icon_custom"></span>
                    <span className="menu_button_mobile_icon_custom"></span>
                </label>
                <Nav className='ml-auto align-items-center menu-links'>

                    <div className='nav-link nav-link-active'>
                        <NavLink activeClassName='nav-link-active' className='link' to='/' onClick={backToTopScroll} exact>Início</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink activeClassName='nav-link-active' className='link' to='/sobre' onClick={backToTopScroll}>Sobre</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink activeClassName='nav-link-active' className='link' to='/receitas'>Receitas</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink activeClassName='nav-link-active' className='link' to='/blog'>Blog</NavLink>
                    </div>
                    <div className='nav-link'>
                        <NavLink activeClassName='nav-link-active' className='link' to='/contatos'>Contatos</NavLink>
                    </div>
                    <Button className='bt-standard bg-color-second bt-standard-second m-0'>Produto</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;