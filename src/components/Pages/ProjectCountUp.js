import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger'

const ProjectCountUp = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <div>
            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                {
                    counterOn &&
                    <div className='bg-accent'>
                        <div className='grid grid-cols-3 mx-auto gap-10 pt-10'>
                            <p className='uppercase hover:text-white hover:outline-1 outline-primary text-2xl flex flex-col items-center bg-secondary w-fit rounded-md px-10 py-2 mx-auto'> <CountUp start={0} end={10} duration={2} delay={0} suffix="+"></CountUp>Countries</p>

                            <p className='uppercase hover:text-white hover:outline-1 outline-primary text-2xl flex flex-col items-center bg-secondary w-fit rounded-md px-10 py-2 mx-auto'> <CountUp start={0} end={150} duration={2} delay={0} suffix="+"></CountUp>Projects</p>

                            <p className='uppercase hover:text-white hover:outline-1 outline-primary text-2xl flex flex-col items-center bg-secondary w-fit rounded-md px-10 py-2 mx-auto'> <CountUp start={0} end={10000} duration={2} delay={0} suffix="+"></CountUp>Volunteers</p>

                        </div>
                        <div className='grid grid-cols-2 mx-auto gap-10 mt-10 pb-10'>
                            <p className='uppercase hover:text-white hover:outline-1 outline-primary text-2xl flex flex-col items-center bg-secondary w-fit rounded-md px-10 py-2 mx-auto'> <CountUp start={0} end={20} duration={2} delay={0} suffix="+"></CountUp>States</p>

                            <p className='uppercase hover:text-white hover:outline-1 outline-primary text-2xl flex flex-col items-center bg-secondary w-fit rounded-md px-10 py-2 mx-auto'> <CountUp start={0} end={500000} duration={2} delay={0} suffix="+"></CountUp>Benificiries</p>
                        </div>

                    </div>
                }

            </ScrollTrigger>

        </div>
    );
};

export default ProjectCountUp;