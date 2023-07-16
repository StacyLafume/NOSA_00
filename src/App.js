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
import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';
import { Button } from '@mui/material';
import MasonryGrid from './components/MasonryGrid';
import StandardGrid from './components/StandardGrid'
import Nav from './components/Nav'



const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#161616',
        contrastText: 'rgba(255,255,255,0.87)',
      },
      secondary: {
        main: '#ff6d00',
      },
      warning: {
        main: '#ffd54f',
      },
      info: {
        main: '#ff9e80',
      },
      error: {
        main: '#f44336',
      },
      success: {
        main: '#ff6e40',
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MasonryGrid/>
      <StandardGrid/>
      <Nav/>
      {/* <head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head> */}
      <Button variant="contained" >Hello worlds</Button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/artistofthemonth" element={<ArtistOfTheMonth />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pastevents" element={<PastEvents />} />
        <Route path="/pastexhibitions" element={<PastExhb />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventgallery" element={<EventGallery />} />
      </Routes>
    </ThemeProvider>)
}

export default App

