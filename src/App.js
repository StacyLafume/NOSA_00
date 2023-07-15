import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PastExhb from './pages/PastExhb';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ArtistOfTheMonth from './pages/ArtistOfTheMonth'
import OurMission from './pages/OurMission';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import PastEvents from './pages/PastEvents';
import Events from './pages/Events';
import EventGallery from './pages/EventGallery';



const App = () => {
  return (
  <>
  <head>
  <meta name="viewport" content="initial-scale=1, width=device-width" />
  </head>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/aboutus" element={<AboutUs />}/>
    <Route path="/artistofthemonth" element={<ArtistOfTheMonth />}/>
    <Route path="/ourmission" element={<OurMission/>}/>
    <Route path="/contactus" element={<ContactUs />}/>
    <Route path="/services" element={<Services/>}/>
    <Route path="/pastevents" element={<PastEvents />}/>
    <Route path="/pastexhibitions" element={<PastExhb />}/>
    <Route path="/events" element={<Events />}/>
    <Route path="/eventgallery" element={<EventGallery />}/>
  </Routes>
  </>)
}

export default App

