import React, { useEffect, useState } from 'react';
import './library-page.component.css';
import CustomNavBar from '../nav-bar/nav-bar.component';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../loader/loader.component';

const LibraryPage = () => {
  const dispatch = useDispatch();

  return (
    <>
      <CustomNavBar />
      <div className="container" >
        Library Page
      </div>
    </>
  )
}

export default LibraryPage;