import React from 'react';

// ? React Icons
import { FaCheck } from 'react-icons/fa';

const StepBar = () => {

    return(
        <div className='w-full d-flex flex-row items-start justify-between pl-20 pr-24 py-3 mb-5'>
            <div className='d-flex flex-column items-center justify-center gap-2'>
                <div className='bg-secondaryBlue-default text-white text-[22px] w-[45px] h-[45px] rounded-full d-flex flex-row items-center justify-center'>
                    <FaCheck />
                </div>
                <span className='text-md font-semibold text-primaryIndigo-default mt-2'>Step 1</span>
                <span className='text-xl font-semibold text-primaryBlue-default'>Create Project</span>
            </div>

            <div className='grow p-0.5 bg-secondaryBlue-default my-[25px]' />


            <div className='d-flex flex-column items-center justify-center gap-2'>
                <div className='bg-[#e5e7eb] text-white text-[22px] w-[45px] h-[45px] rounded-full d-flex flex-row items-center justify-center'>
                    <FaCheck />
                </div>
                <span className='text-md font-semibold text-primaryIndigo-default mt-2'>Step 2</span>
                <span className='text-xl font-semibold text-primaryBlue-default'>Add Team</span>
            </div>

            <div className='grow p-0.5 bg-[#e5e7eb] my-[25px]' />


            <div className='d-flex flex-column items-center justify-center gap-2'>
                <div className='bg-[#e5e7eb] text-white text-[22px] w-[45px] h-[45px] rounded-full d-flex flex-row items-center justify-center'>
                    <FaCheck />
                </div>
                <span className='text-md font-semibold text-primaryIndigo-default mt-2'>Step 3</span>
                <span className='text-xl font-semibold text-primaryBlue-default'>Preview & Hire</span>
            </div>


        </div> 
    )

};

export default StepBar;