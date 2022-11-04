import React from 'react';
import TeamMemberCard from './TeamMemberCard';


// ? Object used for looping and rending the cards
const catList = {
    'project_manager': 'Project Manager',
    'ui_ux': 'UI/UX Designer',
    'front_end': 'Front End Developers',
    'back_end': 'Back End Developers',
    'qa_tester': 'QA/Tester',
    'mobile_dev': 'Mobile Developers',
    'dev_ops': 'DevOps',
};

const TeamMembers = ({ retrieveUsers, refresh, ...props }) => {

    // ? Method to render the Team Member cards
    const renderCards = () => {

        return Object.keys(catList).map((category) => {

            return(
                <TeamMemberCard 
                    category_code={category}
                    category={catList[category]}
                    retrieveUsers={retrieveUsers}
                    refresh={refresh}
                />
            )

        });

    };
    // * End of renderCards();

    return(
        <div className='w-full' {...props}>
            <div className='px-3 w-full d-flex flex-row items-center justify-between'>

                <span className='text-2xl font-bold text-primaryBlue-default '>
                    Team Members
                </span>

                <button className='bg-primaryBlue-default text-white px-5 py-1 text-xl shadow-md rounded-md hover:bg-primaryIndigo-light'>
                    Next
                </button>
            </div>

            <div className='d-flex flex-row items-start justify-between w-full grow'>

                <div className='w-full grid grid-cols-2'>

                    {
                        renderCards()
                    }

                </div>

            </div>
        </div>
    );

};

export default TeamMembers;