import React from 'react';
import Divider from '@mui/material/Divider';
import Calendar from '../components/Calendar';
import PE from "../components/PE";
// box-shadow: 0 0px 0px -8px rgb(255 139 38), 50px -2rem 0px -10px rgb(255 139 38), 0px 0rem 0px 0px rgb(255 139 38);
const Events = ({
    eventArr =[
        {
            image: 'https://media.istockphoto.com/id/1188613309/photo/a-cat-eating-spaghetti-with-pomodoro.jpg?s=1024x1024&w=is&k=20&c=ih-N_UnDeG0Hpd0DHUdwmfM2bOQuwbtfrZ2OLhkThtA=',
            date: new Date(2023, 7, 12), // July 12, 2023
            eventLink: 'URL_OF_EVENT_1',
        },
        {
            image: 'https://static.wixstatic.com/media/e70825_aabb59b182a3487ca9af8affb9ece59f~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e70825_aabb59b182a3487ca9af8affb9ece59f~mv2.jpg',
            date: new Date(2023, 7, 22), // July 12, 2023
            eventLink: 'URL_OF_EVENT_2',
        },
        {
            image: 'https://media.istockphoto.com/id/900783724/photo/ginger-cat.jpg?s=1024x1024&w=is&k=20&c=Zh-b132Vqb6Quhm-Z6vv8rqH2TsO-WOGLVuW1f9ExoE=',
            date: new Date(2023, 7, 25), // July 25, 2023
            eventLink: 'URL_OF_EVENT_3',
        },
        // Add more events as needed
    ]
}) => { // Fix the destructuring here
    
    return (
        <div id="/events" style={{}}>

            <Divider textAlign="left" role="presentation" style={{ backgroundColor: 'orange', height: '.2rem', alignItems: 'center', margin: '2rem 0' }}>
                <h1 style={{display: 'inline', backgroundColor: 'white' }}>Events</h1>
            </Divider>
            <Calendar  eventsArray={eventArr} /> {/* Use the eventArr prop */}
        <div >

         <PE/>

       
        </div>
        </div>
    )
}

export default Events