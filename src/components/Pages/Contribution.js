import React from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Contribution = ({ contribution }) => {
    return (
        <div class="flex justify-center h-60">
            <div class="relative block rounded-lg bg-transparent max-w-sm text-center shadow-2xl">
                <div class="py-3 px-6 border-gray-300">
                    <h5 class="text-secondary text-2xl font-medium mb-2">{contribution.name}</h5>
                </div>
                <div class="p-6">
                    <p class="text-gray-700 text-base mb-4">
                        {contribution.description}
                    </p>
                </div>
                <div class="py-3 px-6 border-gray-300 text-gray-600 absolute -bottom-4 right-0">
                    <button className='flex items-center btn btn-link no-underline text-black hover:text-secondary'>{contribution.btnText}<AiOutlineArrowRight className='text-2xl'></AiOutlineArrowRight></button>
                </div>
            </div>
        </div>
    );
};

export default Contribution;