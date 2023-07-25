import React, { useState } from 'react';
import { Box, Grid, Typography, Paper, Modal, IconButton, Link, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, isSameMonth, isSameDay, addYears, subYears, getYear } from 'date-fns';
import { Carousel } from 'react-responsive-carousel';



// Custom CSS for larger, square tiles
const styles = {
    largeSquareTile: {
        height: 150,
        width: 150,
    },
};

const CalendarTile = ({ date, background, image, eventLink, onTileClick }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleTileClick = () => {
        setIsModalOpen(!isModalOpen);
        onTileClick(date);
    };

    return (
        <Box
            component={Paper}
            sx={{
                ...styles.largeSquareTile,
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
            {date?.getDate() !== undefined && ( // Use optional chaining here
                <Link href="#" onClick={handleTileClick}>
                    {date.getDate()}
                </Link>
            )}
        </Box>
    );
};


const Calendar = ({ eventsArray }) => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [carouselOpen, setCarouselOpen] = useState(false);
    const [yearlyView, setYearlyView] = useState(false);

    const YearTile = ({ year, onYearClick }) => {
        return (
            <Box
                component={Paper}
                sx={{
                    ...styles.largeSquareTile,
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


    const handleTileClick = (date) => {
        setSelectedDate(date);
        setCarouselOpen(false);
    };

    const handleBookingLinkClick = (e) => {
        e.stopPropagation();
        // Implement your booking link logic here
        // For example, you can navigate to a booking page or open a modal with booking options
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

    // const handleCarouselOpen = () => {
    //     setCarouselOpen(true);
    // };

    const handleCarouselClose = () => {
        setCarouselOpen(false);
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
        const currentDate = new Date();

        const days = [];
        for (let date = startDate; date <= endDate; date.setDate(date.getDate() + 1)) {
            const event = eventsArray.find((event) => isSameDay(event.date, date));
            const background = isSameMonth(date, currentDate)
                ? 'lightblue'
                : event && event.picture // Check if event and event.picture exist
                    ? event.picture
                    : 'lightorange';

            days.push({ date: new Date(date), background, eventLink: event ? event?.eventLink : null });
        }


        // Calculate the number of days in the month
        const numDaysInMonth = days.length;

        // Calculate the number of rows and columns to make a perfect square
        const gridSize = Math.ceil(Math.sqrt(numDaysInMonth));
        const numEmptyCells = gridSize * gridSize - numDaysInMonth;

        // Add empty cells to make the grid a perfect square
        for (let i = 0; i < numEmptyCells; i++) {
            days.push({ date: null, background: 'lightorange' });
        }

        return days;
    };

    const renderCalendar = () => {
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
                    {generateCalendar(eventsArray).map((day) => (
                        <Grid item key={day.date?.toString()}>
                            <CalendarTile
                                date={day.date}
                                background={day.background}
                                image={day.background}
                                eventLink={day.eventLink}
                                onTileClick={handleTileClick}
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
            {renderCalendar()}
            {/* Show the image popup */}
            {selectedDate && (
                <Modal open={true} onClose={() => setSelectedDate(null)}>
                    <Box
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: 400,
                            bgcolor: 'background.paper',
                            boxShadow: 24,
                            p: 4,
                        }}
                    >
                        <Typography variant="h5" gutterBottom>
                            {selectedDate.toDateString()}
                        </Typography>
                        {selectedDate.eventLink ? (
                            <Link href={selectedDate.eventLink} target="_blank" rel="noopener" underline="none" onClick={handleBookingLinkClick}>
                                Purchase tickets
                            </Link>
                        ) : (
                            <Link href="#" underline="none" onClick={handleBookingLinkClick}>
                                Want to book an event? Click here
                            </Link>
                        )}
                    </Box>
                </Modal>
            )}



            {/* Automated carousel */}
            <Dialog open={!selectedDate && carouselOpen} onClose={handleCarouselClose}>
                <DialogTitle>Carousel</DialogTitle>
                <DialogContent>
                    <Carousel showArrows={true} infiniteLoop={true} autoPlay={true} interval={3000}> {/* interval is in milliseconds */}
                        {generateCalendar(eventsArray)
                            .filter((day) => day.background)
                            .map((day, index) => (
                                <div key={index}>
                                    <img src={day.background} alt={day.date?.toDateString()} />
                                </div>
                            ))}
                    </Carousel>
                </DialogContent>
                <DialogActions>
                    <Link href="#" onClick={handleBookingLinkClick}>
                        Book an event
                    </Link>
                </DialogActions>
            </Dialog>

        </Box>
    );
};

export default Calendar;
