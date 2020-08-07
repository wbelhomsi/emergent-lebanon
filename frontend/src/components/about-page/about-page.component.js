import React, { useEffect, useState } from 'react';
import './about-page.component.css';
import CustomNavBar from '../nav-bar/nav-bar.component';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/loader.component';

const AboutPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <CustomNavBar />
      <div className="container" >
        About Page
      </div>
    </>
  )
}

export default AboutPage;