import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Objective = ({ objective }) => {
    return (
        <div class="flex justify-center">
            <div class="block rounded-lg shadow-lg bg-white max-w-sm text-center hover:bg-secondary">
                <div class=" border-gray-300 relative overflow-hidden">
                    <img className='hover:scale-110 transition duration-300 ease-in-out' src={objective?.img} alt="" />
                </div>
                <div class="p-6">
                    <h5 class="text-gray-900 text-xl font-medium mb-2">{objective?.name}</h5>
                    <p class="text-gray-700 text-base mb-4">
                        {objective?.description}
                    </p>
                </div>
                <div class="py-3 px-6 border-gray-300 text-gray-600">
                    <button className='btn btn-lg btn-link no-underline'>Read More<AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Objective;