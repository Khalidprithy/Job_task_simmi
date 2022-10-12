import React from 'react';
import Contributions from '../Pages/Contributions';
import Events from '../Pages/Events';
import HomeCarousel from '../Pages/HomeCarousel';
import Objectives from '../Pages/Objectives';
import ProjectCountUp from '../Pages/ProjectCountUp';
import SocialMedia from '../Pages/SocialMedia';
import Speakers from '../Pages/Speakers';
import WelcomeMessage from '../Pages/WelcomeMessage';

const Home = () => {
    return (
        <div>
            <HomeCarousel></HomeCarousel>
            <WelcomeMessage></WelcomeMessage>
            <Objectives></Objectives>
            <Contributions></Contributions>
            <Events></Events>
            <ProjectCountUp></ProjectCountUp>
            <Speakers></Speakers>
            <SocialMedia></SocialMedia>
        </div>
    );
};

export default Home;