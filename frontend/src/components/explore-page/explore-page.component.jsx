import React, { useState } from 'react';
import './explore-page.component.css';
import CustomNavBar from '../nav-bar/nav-bar.component';
import GoogleMap from '../google-map/google-map.component';
import { CircleComponent } from '../util-components/util-components.component';

const CircleArray = ({
  array, selectedFilter, setSelectedFilter,
}) => array.map((circleComp) => (
  <CircleComponent
    title={circleComp.title}
    coordinatedByText={circleComp.coordinatedByText}
    selected={selectedFilter === circleComp.id}
    onClick={() => setSelectedFilter(circleComp.id)}
  />
));

const ExplorePage = () => {
  const [selectedFilter, setSelectedFilter] = useState(-1);
  const highlightBarCircles = [{
    id: 1,
    title: 'GROUND RELIEF',
    coordinatedByText: 'Muwatin Lebnene',
  }, {
    id: 2,
    title: 'DONATE FUNDS',
    coordinatedByText: 'Coordinator Name',
  }, {
    id: 3,
    title: 'DONATE TIME',
    coordinatedByText: 'The Volunteer Circle',
  }];
  const markersArr = [{
    lat: 33.7,
    lng: 35.7,
  }, {
    lat: 33.5,
    lng: 35.5,
  }];
  return (
    <>
      <CustomNavBar />
      <div className="container">
        <CircleArray array={highlightBarCircles} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
        <GoogleMap markers={markersArr} />
      </div>
    </>
  );
};

export default ExplorePage;
