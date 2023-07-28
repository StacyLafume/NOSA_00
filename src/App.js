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
import Map from './components/Map';
import ContactForm from './components/ContactForm';
import Video from './components/Video';
import KPI from './components/KPI';

const App = () => {

  const kpiNumbers = [75, 50, 25, 46, 55];
  const services = [{ 
    title: "Photo Shoot", 
    video: "https://www.shutterstock.com/shutterstock/videos/1031450246/preview/stock-footage-backstage-of-the-photo-shoot-make-up-artist-applies-makeup-on-beautiful-black-model-in-a-moment.webm",
    price: "$100.00"
  },
  { 
    title: "Podcasts", 
    video: "https://www.shutterstock.com/shutterstock/videos/1072038289/preview/stock-footage-three-diverse-female-radio-hosts-wearing-headphones-talking-on-microphone-for-radio-podcast.webm",
    price: "$200.00"
  },
  { 
    title: "Events", 
    video: "https://www.shutterstock.com/shutterstock/videos/1055170904/preview/stock-footage-waiter-is-pouring-champagne-pour-the-champagne-into-a-glass-bartender-pouring-champagne-into.webm",
    price: "$300.00"
  },
  { 
    title: "Co Working Space", 
    video: "https://www.shutterstock.com/shutterstock/videos/1057496554/preview/stock-footage--d-rendering-of-comfortable-co-working-space.webm",
    price: "$400.00"
  },
  
  
];

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
    shape: {
      borderRadius: 0, // Set the global borderRadius to 0 to remove it
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Video videoHeight={900} />
      <KPI numbers={kpiNumbers} interval={15} />
      <Map />
      <Services services={services} theme={theme} />
      <ContactForm />
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

