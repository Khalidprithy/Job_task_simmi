import React from 'react';

const WelcomeMessage = () => {
    return (
        <div className='flex items-center justify-between bg-accent'>
            <div className='w-4/12 text-center text-white mx-auto'>
                <h1 className='text-5xl'>Welcome to <span className='text-secondary'>SIMMI</span></h1>
                <p className='text-xl mt-10'>Smart India Multi Management Institute is a pan India NGO registered in Haryana, India; carrying out welfare projects on education, healthcare, livelihood and women empowerment. We believe that unless members of the civil society are involved proactively in the process of development, sustainable change will not happen. Based on this, Simmi Foundation sensitizes and engages the civil society, making it an active partner in all its welfare initiatives.</p>
            </div>
            <img className='w-4/12' src="https://simmifoundation.org/home/images/home/map-dark.png" alt="" />
        </div>
    );
};

export default WelcomeMessage;