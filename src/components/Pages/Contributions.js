import React, { useEffect, useState } from 'react';
import Contribution from './Contribution';
import bgimg from '../../images/backgournd1.jpg'
import bgimg2 from '../../images/backgournd2.jpg'

const Contributions = () => {

    const [contributions, setContributions] = useState([]);

    useEffect(() => {
        fetch('contributions.json')
            .then(res => res.json())
            .then(data => setContributions(data))
    }, []);

    return (
        <div className='relative' >
            <img className='w-full bg-no-repeat' src="https://simmifoundation.org/home/images/help-bg.png" alt="" />
            <div className='m-4 w-10/12 mx-auto mb-12'>
                <h1 className='capitalize text-white text-center text-4xl mt-6 mb-10'>How Can You Help us</h1>
                <div className='grid grid-cols-1 md:grid-cols-3 gap-4'>
                    {
                        contributions.map(contribution => <Contribution
                            key={contribution.id}
                            contribution={contribution}
                        ></Contribution>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Contributions;