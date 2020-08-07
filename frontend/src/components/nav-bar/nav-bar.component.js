import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, Nav } from 'react-bootstrap';
import './nav-bar.component.css';
import { pushRouterState } from 'react-router-maa';

const CustomNavBar = ({}) => {
  return (
    <Navbar fixed="top" bg="dark" variant="dark" expand="sm">
      <Navbar.Brand href="/"><span color="red">Emergent Beirut</span></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className=" ml-auto">
          <NavButton fontColor={"white"} title="about" link="about" />
          <NavButton fontColor={"white"} title="take action" link="take-action" />
          <NavButton fontColor={"white"} title="explore" link="explore" />
          <NavButton fontColor={"white"} title="library" link="library" />
          <NavButton fontColor={"white"} title="login" link="explore" />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

const NavButton = ({ title, link, fontColor }) => {
  const { page } = useSelector((state) => state.router.routerState);
  return (
    <Nav.Link onClick={() => {
      pushRouterState({ page: link });
    }}><span className={ fontColor === "white" ? "nav-item-color-white": "nav-item-color-black" }>
        {(page === link) ?  <b>{title}</b> : title}
      </span>
    </Nav.Link>
  )
}

export default CustomNavBar;