import React, { useState, useEffect, useCallback } from 'react';
import { Box, Grid, Typography, Paper, Button, IconButton, Link, Dialog, DialogTitle, DialogContent, DialogActions, Stepper, Step, StepLabel } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameDay, addYears, subYears, getYear } from 'date-fns';
import { styled } from '@mui/material/styles'; // Import styled from Material-UI

// Custom CSS for larger, square tiles
const calendarStyles = {
  largeSquareTile: {
    height: 150,
    width: 150,
  },
};

const CalendarTile = ({ date, background, image, eventLink, onTileClick, setCarouselIndex, setIsCarouselAutoplaying }) => {
  const handleTileClick = () => {
    if (image) {
      onTileClick(date, image, setCarouselIndex, setIsCarouselAutoplaying);
    }
  };

  return (
    <Box
      component={Paper}
      sx={{
        ...calendarStyles.largeSquareTile,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        background: background,
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      onClick={handleTileClick}
    >
      {date?.getDate() ?? ''}
    </Box>
  );
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
  }, [eventsArray]);

  const StyledStepLabel = styled(StepLabel)(({ theme, active }) => ({
    '& .MuiStepIcon-root': {
      color: active ? theme.palette.primary.main : theme.palette.action.active,
    },
  }));

  const renderCarouselIndicators = () => {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        {carouselImages.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              mx: 1,
              backgroundColor: index === carouselIndex ? 'primary.main' : 'gray', // Change the active and inactive colors as needed
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

    // Check if there's an image associated with the selected date
    if (image) {
      setSelectedImage(image);

      // Find the index of the selected image in the carouselImages array
      const selectedIndex = carouselImages.findIndex((carouselImage) => carouselImage === image);

      if (selectedIndex !== -1) {
        // Call the function to update the carousel index in the Carousel component
        updateCarouselIndex(selectedIndex);
      }

      setIsCarouselAutoplaying(false); // Pause the carousel autoplay when an image is clicked
    } else {
      setSelectedImage(null);
      setIsModalOpen(true); // Show the modal for tiles without events
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

    const days = [];
    for (let date = new Date(startDate); date <= endDate; date.setDate(date.getDate() + 1)) {
      const event = eventsArray.find((evt) => isSameDay(evt.date, date));
      const background = event && event.image ? `url(${event.image})` : event ? 'lightblue' : null;

      days.push({ date: new Date(date), background, eventLink: event ? event.eventLink : null });
    }
    // Calculate the number of days in the month
    const numDaysInMonth = days.length;

    // Calculate the number of rows and columns to make a perfect square
    const gridSize = Math.ceil(Math.sqrt(numDaysInMonth));
    const numEmptyCells = gridSize * gridSize - numDaysInMonth;

    // Add empty cells to make the grid a perfect square
    for (let i = 0; i < numEmptyCells; i++) {
      days.push({ date: null, background: '#ff9574' });
    }

    return days;
  };

  const renderCalendar = () => {
    const days = generateCalendar(eventsArray);

    if (yearlyView) {
      // Render the yearly view
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
      // Render the monthly view
      return (
        <Grid container spacing={1}>
          {days.map((day) => (
            <Grid item key={day.date?.toString()}>
              <CalendarTile
                date={day.date}
                background={day.background}
                image={day.background} // Use "day.background" instead of "day.image"
                eventLink={day.eventLink}
                onTileClick={handleTileClick}
                setCarouselIndex={setCarouselIndex} // Pass the state setters down to CalendarTile
                setIsCarouselAutoplaying={setIsCarouselAutoplaying} // Pass the state setters down to CalendarTile
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
    setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
  }, [carouselImages.length]);

  const handleCarouselPrevious = useCallback(() => {
    setCarouselIndex((prevIndex) => (prevIndex - 1 + carouselImages.length) % carouselImages.length);
  }, [carouselImages.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isCarouselAutoplaying) {
        handleCarouselNext();
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearTimeout(timer);
  }, [carouselIndex, isCarouselAutoplaying, handleCarouselNext]);

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
        {yearlyView ? (
          <IconButton onClick={toggleYearlyView}>
            <ArrowBack />
          </IconButton>
        ) : (
          <>
            <IconButton onClick={navigateToPreviousYear}>
              <ArrowBack />
            </IconButton>
            <IconButton onClick={navigateBackward}>
              <ArrowBack />
            </IconButton>
          </>
        )}
        <Typography variant="h6" gutterBottom>
          {yearlyView ? 'Select a Year' : format(currentMonth, 'MMMM yyyy')}
        </Typography>
        {yearlyView ? (
          <IconButton onClick={toggleYearlyView}>
            <ArrowForward />
          </IconButton>
        ) : (
          <>
            <IconButton onClick={navigateForward}>
              <ArrowForward />
            </IconButton>
            <IconButton onClick={navigateToNextYear}>
              <ArrowForward />
            </IconButton>
          </>
        )}
      </Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box sx={{ flex: '2 0 66.66%' }}>{renderCalendar()}</Box>
        <Box sx={{ flex: '1 0 33.33%', padding: '0 16px' }}>
          {/* Automated carousel */}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', height: 300 }}>
            {carouselImages.length > 0 ? (
              <img src={carouselImages[carouselIndex]} alt={`Event ${carouselIndex}`} style={{ maxWidth: '100%', maxHeight: '100%' }} />
            ) : (
              <Typography variant="subtitle1">No images available</Typography>
            )}
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IconButton onClick={handleCarouselPrevious}>
              <ArrowBack />
            </IconButton>
            <IconButton onClick={handleCarouselNext}>
              <ArrowForward />
            </IconButton>
          </Box>
          {renderCarouselIndicators()}
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
            <Link href="#" onClick={handleBookingLinkClick}>
              Book an event
            </Link>
          </Box>
        </Box>
      </Box>

      {/* Dialogue box for tiles without events */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>No Event Found</DialogTitle>
        <DialogContent>
          <Typography variant="body1">There is no event scheduled for this date.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setIsModalOpen(false)}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Calendar;
