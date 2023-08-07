import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, Typography, Paper, Button, IconButton, Link, Dialog, DialogTitle, DialogContent, StepLabel, DialogActions } from '@mui/material';
import KeyboardArrowLeftSharpIcon from '@mui/icons-material/KeyboardArrowLeftSharp';
import KeyboardArrowRightSharpIcon from '@mui/icons-material/KeyboardArrowRightSharp';
import KeyboardDoubleArrowLeftSharpIcon from '@mui/icons-material/KeyboardDoubleArrowLeftSharp';
import KeyboardDoubleArrowRightSharpIcon from '@mui/icons-material/KeyboardDoubleArrowRightSharp';
import PauseCircleFilledSharpIcon from '@mui/icons-material/PauseCircleFilledSharp';
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay, addYears, subYears, getYear } from 'date-fns';
import { styled } from '@mui/material/styles'; // Import styled from Material-UI
import { borderLeft } from '@mui/system';

const calendarStyles = {
  largeSquareTile: {
    height: '7vw',
    width: '7vw',
    // padding: '0 !important',
    // borderRadius: '0 !important'
  },
};

const CalendarTile = ({ date, background, image, onTileClick, setCarouselIndex, setIsCarouselAutoplaying, setIsModalOpen }) => {

  const handleTileClick = () => {
    if (image) {
      onTileClick(date, image);
    } else {
      setIsModalOpen(true);
    }
  };



  return (
    <Box
      component={Paper}
      sx={{
        ...calendarStyles.largeSquareTile,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        cursor: 'pointer',
        background: background,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderRadius: '0',
        border: 'solid #ff6d00 .5px',
        borderLeft: '0',
        borderTop: '0',
        '&:hover': {
          boxShadow: "0 5px 6px 3px #f7b28bbf"
        }

      }}
      onClick={handleTileClick}
    >
      <Paper sx={{ paddingLeft: '3.85%', width: '30%', borderRadius: '0' }}>
        {date?.getDate() ?? ''}
      </Paper>
    </Box>
  )


};

const Calendar = ({ eventsArray }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [yearlyView, setYearlyView] = useState(false);
  const [carouselImages, setCarouselImages] = useState([]);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCarouselAutoplaying, setIsCarouselAutoplaying] = useState(true);

  useEffect(() => {
    const images = eventsArray.filter((event) => event.image).map((event) => event.image);
    setCarouselImages(images);
    setCarouselIndex(0);
  }, [eventsArray, setCarouselImages]);

  const StyledStepLabel = styled(StepLabel)(({ theme, active }) => ({
    '& .MuiStepIcon-root': {
      color: active ? theme.palette.primary.main : theme.palette.action.active,
    },
  }));

  const renderCarouselIndicators = () => {
    return (
      <Box sx={{
        display: 'flex', mt: 2, margin: 0,
        justifyContent: 'space-between',
      }}>
        {carouselImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              mx: 1,
              backgroundColor: index === carouselIndex ? 'primary.main' : 'gray',
            }}
          />
        ))}
      </Box>
    );
  };

  const updateCarouselIndex = (index) => {
    setCarouselIndex(index);
  };

  const YearTile = ({ year, onYearClick }) => {
    return (
      <Box
        component={Paper}
        sx={{
          ...calendarStyles.largeSquareTile,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',
          background: 'lightyellow',
        }}
        onClick={() => onYearClick(year)}
      >
        <Typography variant="h6" color="inherit">
          {year}
        </Typography>
      </Box>
    );
  };

  const handleBookingLinkClick = (e) => {
    e.stopPropagation();
    // Implement your booking link logic here
    // For example, you can navigate to a booking page or open a modal with booking options
  };

  const handleTileClick = (date, image) => {
    setSelectedDate(date);

    if (image) {
      setSelectedImage(image);
      const selectedIndex = carouselImages.findIndex((carouselImage) => `url(${carouselImage})` === image);
      if (selectedIndex !== -1) {
        setCarouselIndex(selectedIndex);
        setIsCarouselAutoplaying(false);
      } else {
        setIsCarouselAutoplaying(true);
      }
    } else {
      setSelectedImage(null);
      setIsModalOpen(true);
    }
  };

  const navigateForward = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const navigateBackward = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const navigateToPreviousYear = () => {
    setCurrentMonth(subYears(currentMonth, 1));
  };

  const navigateToNextYear = () => {
    setCurrentMonth(addYears(currentMonth, 1));
  };

  const handleYearClick = (year) => {
    setCurrentMonth(new Date(year, currentMonth.getMonth(), 1));
    setYearlyView(false);
  };

  const toggleYearlyView = () => {
    setYearlyView(!yearlyView);
  };

  const generateCalendar = (eventsArray) => {
    const startDate = startOfMonth(currentMonth);
    const endDate = endOfMonth(currentMonth);
    console.log('eventArr:', JSON.stringify(eventsArray, null, 2));
    const days = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      const event = eventsArray.find((evt) => isSameDay(evt.date, date));
      const background = event && event.image ? `url(${event.image})` : event ? 'lightblue' : null;

      days.push({ date: new Date(date), background, eventLink: event ? event.eventLink : null });
    }

    const numDaysInMonth = days.length;
    const gridSize = Math.ceil(Math.sqrt(numDaysInMonth));
    const numEmptyCells = gridSize * gridSize - numDaysInMonth;

    for (let i = 0; i < numEmptyCells; i++) {
      if (days.length % 7 === 0) {
        break
      } else {
        days.push({ date: null, background: '#f2ebeb' })
      };
    }

    return days;
  };

  const renderCalendar = () => {
    const days = generateCalendar(eventsArray);

    if (yearlyView) {
      return (
        <Grid container spacing={1}>
          {generateYears().map((year) => (
            <Grid item key={year}>
              <YearTile year={year} onYearClick={handleYearClick} />
            </Grid>
          ))}
        </Grid>
      );
    } else {
      return (
        <Grid sx={{ justifyContent: 'center', width: '84%', margin: '0', borderBottom: '#f09b05 solid 2px', borderTop: '#f09b05 solid 2px' }} container spacing={0} >
          {days.map((day) => (
            <Grid item key={day.date?.toString()}>
              <CalendarTile
                date={day.date}
                background={day.background}
                image={day.background}
                onTileClick={handleTileClick}
                setCarouselIndex={setCarouselIndex}
                setIsCarouselAutoplaying={setIsCarouselAutoplaying}
                setIsModalOpen={setIsModalOpen} // Pass setIsModalOpen to CalendarTile
              />
            </Grid>
          ))}
        </Grid>
      );
    }
  };

  const generateYears = () => {
    const startYear = getYear(currentMonth) - 10;
    const years = [];
    for (let i = 0; i < 20; i++) {
      years.push(startYear + i);
    }
    return years;
  };

  const handleCarouselNext = useCallback(() => {
    const nextIndex = (carouselIndex + 1) % carouselImages.length;
    setCarouselIndex(nextIndex);
    resumeAutoplay();
  }, [carouselImages.length, carouselIndex]);

  const handleCarouselPrevious = useCallback(() => {
    const previousIndex = (carouselIndex - 1 + carouselImages.length) % carouselImages.length;
    setCarouselIndex(previousIndex);
    resumeAutoplay();
  }, [carouselImages.length, carouselIndex]);

  const resumeAutoplay = () => {
    setIsCarouselAutoplaying(true);
  };

  useEffect(() => {
    const images = eventsArray.filter((event) => event.image).map((event) => event.image);
    setCarouselImages(images);
    setCarouselIndex(0);
  }, [eventsArray]);

  useEffect(() => {
    const selectedIndex = carouselImages.findIndex((carouselImage) => carouselImage === selectedImage);

    if (selectedIndex !== -1) {
      setCarouselIndex(selectedIndex);
      setIsCarouselAutoplaying(false);
    }
  }, [selectedImage, carouselImages]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCarouselAutoplaying) {
        handleCarouselNext();
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [carouselIndex, isCarouselAutoplaying, handleCarouselNext]);

  return (
    <Box sx={{ height: '80vh', padding: '0vh 3vw' }}>
      <Box sx={{ display: 'inline-flex', width: '56.1%', justifyContent: 'center', my: 2, margin: '1% 0' }}>
        {yearlyView ? (
          <IconButton onClick={toggleYearlyView}>
            {/* <KeyboardArrowLeftSharpIcon/> */}
          </IconButton>
        ) : (
          <>
            <IconButton sx={{ padding: '0', fill: '##ed9904' }} onClick={navigateToPreviousYear}>
              <KeyboardDoubleArrowLeftSharpIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton sx={{ padding: '0', fill: '##ed9904' }} onClick={navigateBackward}>
              <KeyboardArrowLeftSharpIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </>
        )}
        <Typography sx={{ margin: '0' }} variant="h6" gutterBottom>
          {yearlyView ? 'Select a Year' : format(currentMonth, 'MMMM yyyy')}
        </Typography>
        {yearlyView ? (
          <IconButton onClick={toggleYearlyView}>
            {/* <ArrowForward /> */}
          </IconButton>
        ) : (
          <>
            <IconButton sx={{ padding: '0', fill: '##ed9904' }} onClick={navigateForward}>
              <KeyboardArrowRightSharpIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
            <IconButton sx={{ padding: '0', fill: '##ed9904' }} onClick={navigateToNextYear}>
              <KeyboardDoubleArrowRightSharpIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </>
        )}
      </Box>
      {/* <Typography sx={{display: 'inline-flex', fontWeight: '500', fontSize: '1.00rem'}}>
        Book your next event with NOSA 
        <Link href="#" onClick={handleBookingLinkClick} >
           HERE
        </Link>
      </Typography> */}
      <Box sx={{ display: 'flex', flexWrap: 'wrap', "& .outer-container": { padding: 0, borderRadius: 0, height: 'fit-content' } }}>
        <Box sx={{ flex: '2 0 66.66%', height: '80vh' }} className="outer-container">{renderCalendar()} </Box>
        <Box sx={{ flex: '1 0 33.33%',textAlign: 'center', height: '25.2rem' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: '25.2rem', backgroundImage: 'url(https://p1.pxfuel.com/preview/782/525/96/paint-painting-image-design.jpg)', padding: '3%', borderRadius: '5px' }}>
            {carouselImages.length > 0 ? (
              <img src={carouselImages[carouselIndex]} alt={`Event ${carouselIndex}`} style={{ width: '70%', borderRadius: '5px' }} />
            ) : (
              <Typography variant="subtitle1">No images available</Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          </Box>
          <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-evenly', width: '100%',
            margin: '0', marginBottom: '2rem', padding: '.3rem 1.5rem'
          }}>

            <IconButton onClick={handleCarouselPrevious}>
              <KeyboardDoubleArrowLeftSharpIcon sx={{ marginLeft: '5rem' }} />
            </IconButton>
            {renderCarouselIndicators()}
            <IconButton onClick={handleCarouselNext}>
              <KeyboardDoubleArrowRightSharpIcon sx={{ marginRight: '5rem' }} />
            </IconButton>
          </Box>
        </Box>
      </Box>

      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>No event scheduled</DialogTitle>
        <DialogContent>
          <Typography variant="body1">Want to book an event with NOSA? Click <Link href="#" onClick={handleBookingLinkClick} >
            HERE
          </Link></Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
