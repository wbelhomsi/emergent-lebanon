import React, { useEffect, useState } from 'react';
import './explore-page.component.css';
import CustomNavBar from '../nav-bar/nav-bar.component';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/loader.component';
import GoogleMap from '../google-map/google-map.component';
import { CircleComponent } from '../util-components/util-components.component';

const ExplorePage = () => {
  const dispatch = useDispatch();
  const markersArr= [{
    lat: 33.7,
    lng: 35.7
  }, {
    lat: 33.5,
    lng: 35.5
  }]
  return (
    <>
      <CustomNavBar />
      <div className="container" >
        <CircleComponent text={"First Circle"} />
        <CircleComponent text={"Second Circle Testttttttttttttttt"} />
        <GoogleMap markers={markersArr} />
      </div>
    </>
  )
}

export default ExplorePage;