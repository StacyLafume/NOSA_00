import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, useTheme } from "@mui/styles";
import PE from "./PE";
import Divider from "@mui/material/Divider";


const Calendar = () => {
  const [showEvents, setShowEvents] = useState(true);

  const [events] = useState([
    {
      // id: createEventId(),
      title: 'oopu',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFpOzQngfIf_n6iFqscREDpdEyIyobvhN-Tg&usqp=CAU',
      start: '2023-08-05',
      end: '2023-08-06',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: 'blueGrey'
    },
    {
      // id: createEventId(),
      title: 'tgvtee',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQpAkYjJsapdf0njIpv_qtjQsk5B6yvJqSIw&usqp=CAU',
      start: '2023-08-10',
      end: '2023-08-014',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#ba68c8'
    },
    {
      // id: createEventId(),
      title: 'kuwyhgref',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo_YdQj6nVSuxY2AhOIAUxvxNItkljU7sqqQ&usqp=CAU',
      start: '2023-08-19',
      end: '2023-08-25',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#f48fb1'
    },
    {
      // id: createEventId(),
      title: 'hhhgg',
      url: 'data:image/jpeg;base64,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',
      start: '2023-08-16',
      end: '2023-08-017',
      allDay: true,
      // backgroundColor: bckgrndClr[currentEvents.length]
      backgroundColor: '#4a148c'
    }


  ]);

  const handleShowEvents = () => {
    console.log("clicking")
    setShowEvents(false)
  }


  const currentDate = new Date().toDateString();
  const filteredEvents = events.filter((event) => {
    console.log([events], 'uyjf')
    const eventDate = new Date(event.start).toDateString();
    return eventDate >= currentDate;
  });

  const carouselRef = React.createRef();
  // const [filteredEvents, setFilteredEvents] = useState([]);

  const handleEventClick = (clickInfo) => {
    const eventDate = new Date(clickInfo.event.start).toDateString();
    if (eventDate >= currentDate) {
      const index = filteredEvents.findIndex(
        (event) => event.url === clickInfo.event.url
      );
      console.log(index)
      if (index !== -1) {
        carouselRef.current.goToSlide(index);
      }
    }
  };

  const handleBackClick = () => {
    carouselRef.current.previous();
  };

  const handleForwardClick = () => {
    carouselRef.current.next();
  };

  const handlePlayPauseClick = () => {
    setAutoPlay(!autoPlay);
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const [autoPlay, setAutoPlay] = useState(true);



  // Event Render Function To Get Images and Titles
  const renderEventContent = (eventInfo) => {
    console.log(filteredEvents, 'bhbyui')

    return (
      <div>
        <p>{eventInfo.event.title}</p>
        <img className="eventimage" src={eventInfo.event.url} />
      </div>
    )
  }

  {/* <div> {showEvents ? (calendar code) : (<PE eventArr={eventsArray} setShowEvents={setShowEvents}/>) } */ }


  return (
    <div> {showEvents ? 
      <div>
      <div className="demo-app-main" style={{width: '50vw'}}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          // weekends={weekendsVisible}
          // select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          events={events}
          contentHeight='35vw'
        />
      </div>
      <div>
      <Carousel
          responsive={responsive}
          autoPlay={autoPlay}
          ref={carouselRef}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomButtonGroup
            handleBackClick={handleBackClick}
            handleForwardClick={handleForwardClick}
            handlePlayPauseClick={handlePlayPauseClick}
            autoPlay={autoPlay}
            />}
        >
          {filteredEvents.map((event) => (
            <div key={event.id}>
              <img src={event.url} alt={event.title} />
            </div>
          ))}
        </Carousel>
      </div>
      </div>
      : (<PE eventArr={eventsArray} setShowEvents={setShowEvents} />)}
    </div >

  );

};

const CustomButtonGroup = ({
  handleBackClick,
  handleForwardClick,
  handlePlayPauseClick,
  autoPlay,
}) => {
  return (
    <div className="carousel-button-group">
      <button onClick={handleBackClick}>&lt;</button>
      <button onClick={handleForwardClick}>&gt;</button>
      <button onClick={handlePlayPauseClick}>
        {autoPlay ? "Pause" : "Play"}
      </button>
    </div>
  );
};



export default Calendar;
