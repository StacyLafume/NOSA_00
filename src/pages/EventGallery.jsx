import React from 'react';
import MasonryGrid from '../components/MasonryGrid';


const EventGallery = (eventName, date) => {
    return (
        <div id="/eventgallery">
            <h1>{eventName} - {date}</h1>
            <MasonryGrid />
        </div>
    )
}

export default EventGallery