import React, { useEffect, useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Objective from './Objective';

const Objectives = () => {

    const [objectives, setObjectives] = useState([]);

    useEffect(() => {
        fetch('objective.json')
            .then(res => res.json())
            .then(data => setObjectives(data))
    }, []);

    return (
        <div className='m-4'>
            <h1 className='text-5xl font-thin text-center mb-10 mt-6'>Objectives</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-5 w-10/12 mx-auto'>

                {
                    objectives.map(objective => <Objective
                        key={objective.id}
                        objective={objective}
                    ></Objective>)
                }
            </div>
        </div>
    );
};

export default Objectives;