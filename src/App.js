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

  const eventsArray = [
    {
      image: 'https://media.istockphoto.com/id/1188613309/photo/a-cat-eating-spaghetti-with-pomodoro.jpg?s=1024x1024&w=is&k=20&c=ih-N_UnDeG0Hpd0DHUdwmfM2bOQuwbtfrZ2OLhkThtA=',
      date: new Date(2023, 7, 12), // July 12, 2023
      eventLink: 'URL_OF_EVENT_1',
    },
    {
      image: 'https://media.istockphoto.com/id/900783724/photo/ginger-cat.jpg?s=1024x1024&w=is&k=20&c=Zh-b132Vqb6Quhm-Z6vv8rqH2TsO-WOGLVuW1f9ExoE=',
      date: new Date(2023, 7, 25), // July 25, 2023
      eventLink: 'URL_OF_EVENT_2',
    },
    // Add more events as needed
  ];

  const pastExhbArr = []

  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
    },
    {
      img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
      title: "Hats",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
    },
    {
      img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
      title: "Basketball",
    },
    {
      img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
      title: "Fern",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
    },
    {
      img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
      title: "Sea star",
    },
    {
      img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
      title: "Bike",
    },
  ];

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

      <Events eventArr={eventsArray}/>
      {/* <PastEvents/> */}
//       <ArtistOfTheMonth name='Bridgett' monthYear='June 2023'  backgroundColor='#e6bdfc' headshot='https://images.pexels.com/photos/3031397/pexels-photo-3031397.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' mainArtwork='https://cdn.pixabay.com/photo/2022/09/19/22/34/black-woman-7466559_1280.jpg'/>

   
      {/* Check if artistOfTheMonthData exists before rendering the component */}
      {ArtistOfTheMonthJson.length > 0 && (
        <ArtistOfTheMonth artistOfTheMonthData={ArtistOfTheMonthJson[0]} />
      )}
      <PastExhb />
      <Services services={services} />
      <ContactUs />
      <Footer />
      
    </ThemeProvider>
  )
}

export default App

