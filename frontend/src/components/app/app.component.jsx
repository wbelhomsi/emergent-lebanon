import React from 'react';
import { useSelector } from 'react-redux';
import './app.component.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ExplorePage from '../explore-page/explore-page.component';
import AboutPage from '../about-page/about-page.component';
import TakeActionPage from '../take-action-page/take-action-page.component';
import LibraryPage from '../library-page/library-page.component';

const AppComponent = () => {
  const { page } = useSelector((state) => state.router.routerState);

  return (
    <>
      { page === 'explore' ? <ExplorePage /> : null }
      { page === 'about' ? <AboutPage /> : null }
      { page === 'take-action' ? <TakeActionPage /> : null }
      { page === 'library' ? <LibraryPage /> : null }
      <footer />
    </>
  );
};

export default AppComponent;
