import React, { useEffect, useState } from 'react';

// ? React Icons
import { FaCrown } from 'react-icons/fa';

import Hamburger from '../Form/Hamburger';

const TeamMemberCard = ({ category, category_code, retrieveUsers, refresh }) => {

    // ? STATE
    // eslint-disable-next-line
    const [toggleView, setToggleView] = useState(false);
    const [users, setUsers] = useState([]);

    // ? Method to render the Users
    const renderUsers = () => {

        if (!users || users?.length < 1) {

            return (
                <div className='w-full d-flex flex-row items-center justify-center p-3'>
                    <span>
                        No Team Members
                    </span>
                </div>

            )
        }

        return users?.map(({
            name,
            experience,
            image,
            lead
        }, index) => (
            <div className='w-full d-flex flex-row items-center justify-between p-3 border-b-[1.5px] border-grey-500 last:border-0'>

                <div className='w-3/4 d-flex flex-row items-center justify-start gap-3'>
                    <div className="relative inline-block">
                        <img
                            src={image}
                            alt='profile'
                            className='w-[45px] h-[45px] rounded-full'
                        />
                        {
                            lead
                            &&
                            <span className="absolute bottom-0 right-0 p-1 text-xs font-bold leading-none text-red-100 transform bg-secondaryBlue-default rounded-full ">
                                <FaCrown
                                    className='text-white text-[10px]'
                                />
                            </span>
                        }
                    </div>
                    <div className='d-flex flex-column items-start justify-center text-md'>
                        <span className='font-medium'>
                            {name}
                        </span>
                        <span className='text-primaryIndigo-default'>
                            {experience} yrs Exp
                        </span>
                    </div>
                </div>

                <Hamburger
                    setAsLeader={setAsLeader}
                    removeMember={removeMember}
                    index={index}
                />

            </div>
        ));

    }
    // * End of renderUsers();

    // ? Method to set a member as Leader
    const setAsLeader = (index) => {

        let usersList = Object.assign([], users);

        let updateUsers = usersList.map((user, currentIndex) => {
                    
            user.lead = (index !== currentIndex) ? false : true;

            return user;

        });

        updateUsers.unshift(updateUsers.splice(index, 1)[0]);

        localStorage.setItem(category_code, JSON.stringify(updateUsers))

        setUsers(() => updateUsers);

    };
    // * End of setAsLeader();


    // ? Method to remove member from list
    const removeMember = (index) => {
    
        let updateUsers = Object.assign([], users);

        updateUsers.splice(index, 1);

        localStorage.setItem(category_code, JSON.stringify(updateUsers))

        setUsers(() => updateUsers);

    };
    // * End of removeMember();

    // ? Method to refresh users on refresh
    const refreshUsers = () => {

        setUsers(retrieveUsers(category_code));

    };
    // * End of refreshUsers();

    useEffect(() => {

        refreshUsers()
        
        // eslint-disable-next-line
    }, [refresh]);

    return (
        <div className='p-3 border-b-[1.5px] odd:border-r-[1.5px] border-grey-500 last:border-0'>

            <div className='rounded-xl overflow-hidden shadow-lg mb-2 mt-2'>
                <div
                    className='px-3 py-2 bg-primaryIndigo-default text-white d-flex flex-row items-center justify-center select-none'
                >
                    <span className='text-xl'>
                        {category}
                    </span>

                </div>

                <div
                    className=' transition ease-out delay-150'
                    style={{
                        // transition: "down 2s all",
                        visibility: toggleView ? "block" : "none",
                    }}
                >

                    {
                        renderUsers()
                    }


                </div>

            </div>
        </div>

    );

};

export default TeamMemberCard;