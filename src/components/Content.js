import React from 'react';
import Home from './Home';
import Main from './Main';
import Tool from './Tool';
import ContactUs from './ContactUs';
import './Content.css';

function Content({ activePage }) {
  return (
    <div className="content">
            <div className="content-inner">
    <main className="content">
      {activePage === 'home' && <Home />}
      {activePage === 'main' && <Main />}
      {activePage === 'tool' && <Tool />}
      {activePage === 'contact' && <ContactUs />}
    </main>
            </div>
    </div>
  );
}

export default Content;