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
import FilterGrid from './components/FilterGrid';
import Video from './components/Video';
import Calendar from './components/Calendar';

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
      <Video></Video>
      <Calendar eventsArray={eventsArray}></Calendar>
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

