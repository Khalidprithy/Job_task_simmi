import React from 'react';
import HomeCarousel from '../Pages/HomeCarousel';
import Objectives from '../Pages/Objectives';
import WelcomeMessage from '../Pages/WelcomeMessage';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <WelcomeMessage></WelcomeMessage>
            <Objectives></Objectives>
        </div>
    );
};

export default Home;