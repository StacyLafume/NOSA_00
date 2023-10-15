import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import PastExhb from './pages/PastExhb';
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
import event from './content/event/event.json';
import ArtistOfTheMonth from "./pages/ArtistOfTheMonth";
import DemoApp from './components/DemoApp';
import { styled } from '@mui/material/styles';
import CursorOverlay from './components/CursorOverlay';
import PE from './components/PE';
import EventsJson from './content/event/event.json';
import BannerText from './content/banner/bannerText.json'
import GetInvolved from './pages/GetInvolved';
import Banner from './components/Banner';
import LinksJson from './content/links/links.json';


const App = () => {

  const services = [{ 
    title: "Content Creators & Social media", 
    video:require('./images/content_creator.jpeg'),
    description: ['Photographers / Shoots: Blank spaces for photo, video, webinar & live shoots', 'Podcast: Studio space for audio and video recordings'],
  },
  {
    title: "Co-Working Space",
    video: require('./images/coworking_space.jpeg'),
    description: ["Conference Room"," Podcast Room ", "TV & Whiteboard"],
  },
  {
    title: "Inquiring Individuals",
    video: require('./images/event.jpeg'),
    description: ["Intimate seated social gatherings for up to 20 people."],
    
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
    typography: {
      fontFamily: ["Blinker", 'Ropa Sans'].join(","),
      fontSize: ".8rem",
    }
  })

  const removeBadData = (jsonData) => {
    return jsonData.filter(entry => {
      const artistName = entry.artist_name;
      return artistName !== "No Artist Name given" && Object.values(entry).length !== 0;
    });
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline defaultMode="dark" />
      <div id="/"/>
      <Nav />
      <Video videoSrc="https://res.cloudinary.com/dpguttfbn/video/upload/v1696010476/vecteezy_coming-soon-text-animation-on-a-black-background-with_28549904_664_fjrsci.3gp" videoHeight={"100vh"} />
      <Banner bannerText={BannerText}/>

       <AboutUs />
       <Banner bannerText={BannerText}/>

      {/* <OurMission /> */}
     
      {/* <Events eventArr={EventsJson}/> */}
      {/* Check if artistOfTheMonthData exists before rendering the component */}
      {ArtistOfTheMonthJson.length > 0 && (
        <ArtistOfTheMonth pastArtistOfTheMonthData={removeBadData(ArtistOfTheMonthJson)} artistsOfTheMonthData={removeBadData(ArtistOfTheMonthJson)} artistOfTheMonthData={ArtistOfTheMonthJson[0]} />
      )}
      <GetInvolved linksData={removeBadData(LinksJson)}/>
      <Services services={services} />
      <ContactUs />
      <Banner bannerText={BannerText}/>
      <Footer />
    </ThemeProvider>
  )
}

export default App
