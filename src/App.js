import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
import PastExhb from './pages/PastExhb';
import AboutUs from './pages/AboutUs';
import OurMission from './pages/OurMission';
import ContactUs from './pages/ContactUs';
import Services from './pages/Services';
import Events from './pages/Events';
import { createTheme, CssBaseline, ThemeProvider, } from '@mui/material';
import Nav from './components/Nav'
import Video from './components/Video';
import Footer from './pages/Footer';
import ArtistOfTheMonthJson from './content/artistOfTheMonth/artistOfTheMonth.json'
import ArtistOfTheMonth from "./pages/ArtistOfTheMonth";



const App = () => { 
  console.log("ArtistOfTheMonthJson", ArtistOfTheMonthJson)

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
      borderRadius: "0 !important", // Set the global borderRadius to 0 to remove it
    },
    typography: {
      fontFamily: ["Blinker", 'Ropa Sans'].join(",")
    }


  })


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline defaultMode="dark" />
      {console.log("artistOfTheMonthData", ArtistOfTheMonthJson)}

      <Nav />
      <Video videoHeight={"100vh"} />
      <OurMission />
      <AboutUs />
      <Events />
      {/* Check if artistOfTheMonthData exists before rendering the component */}
      {ArtistOfTheMonthJson.length > 0 && (
        <ArtistOfTheMonth artistOfTheMonthData={ArtistOfTheMonthJson[0]} />
      )}
      <PastExhb />
      <Services services={services} />
      <ContactUs />
      <Footer />
      {/* <Container style={{display:"none"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/artistofthemonth" element={<ArtistOfTheMonth />} />
        <Route path="/ourmission" element={<OurMission />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/services" element={<Services services={services}/>} />
        <Route path="/pastevents" element={<PastEvents />} />
        <Route path="/pastexhibitions" element={<PastExhb />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventgallery" element={<EventGallery />} />
      </Routes>
    </Container> */}
    </ThemeProvider>
  )
}

export default App

