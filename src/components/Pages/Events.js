import React, { useEffect, useState } from 'react';
import Event from './Event';

const Events = () => {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        fetch('events.json')
            .then(res => res.json())
            .then(data => setEvents(data))
    }, []);


    return (
        <div className='bg-accent'>
            <h1 className='text-5xl text-center text-secondary py-10'>Current and Upcoming events</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    events.map(event => <Event
                        key={event.id}
                        event={event}
                    ></Event>)
                }
            </div>

        </div>
    );
};

export default Events;

