import React from 'react';
import { FaMapMarkedAlt, FaCalendarAlt } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';
import { IoIosArrowForward } from 'react-icons/io';

const Event = ({ event }) => {

    return (
        <div class="flex justify-center mb-5">
            <div class="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                    <img class="rounded-t-lg" src={event.img} alt="" />
                </a>
                <div class="p-6">
                    <h5 class="text-secondary text-xl font-medium mb-2">{event.name}</h5>
                    <p className='flex items-center gap-2'><FaMapMarkedAlt className='text-secondary'></FaMapMarkedAlt> {event.location}</p>
                    <div className='flex items-center gap-5'>
                        <p className='flex items-center gap-2'><MdWatchLater className='text-secondary'></MdWatchLater>{event.time}</p>
                        <p className='flex items-center gap-2'><FaCalendarAlt className='text-secondary'></FaCalendarAlt>{event.date}</p>
                    </div>
                    <p class="text-gray-700 text-base mb-4">
                        {event.description}
                    </p>
                    <button className='btn btn-link no-underline hover:no-underline hover:gap-2 hover:scale-105 ease-in-out duration-100'>Read More <IoIosArrowForward className='text-xl'></IoIosArrowForward></button>
                </div>
            </div>
        </div>
    );
};

export default Event;