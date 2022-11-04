import React, { useState } from 'react';

// ? React Icons
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';


const CategoriesCard = ({ category, category_code, users, refreshComponents }) => {

    // ? STATE
    const [toggleView, setToggleView] = useState(false);

    // ? Method to handle adding the user to Team
    const handleUserAdd = (user) => {
        
        let usersArray = JSON.parse(localStorage.getItem(category_code));

        if(usersArray) {
            
            if(
                usersArray.length === 0 || 
                !usersArray.some((currentUser) => currentUser.name === user.name)
            ) {
                
                usersArray.push(user);
                
            } 
            
        } else {

            usersArray = [];
            usersArray.push(user);

        }

        localStorage.setItem(category_code, JSON.stringify(usersArray));

        refreshComponents();

    };
    // * End of handleUserAdd();

    // ? Method to render the User cards
    const renderUsers = () => {

        if(!users || users?.length < 1) {

            return(
                <div className='w-full d-flex flex-row items-center justify-center p-3'>
                    <span>
                        No Team Members
                    </span>
                </div>

            )
        }

        return users?.map((user) => (
            <div className='w-full d-flex flex-row items-center justify-between p-3 border-b-[1.5px] border-grey-500 last:border-0'>

                <div className='w-3/4 d-flex flex-row items-center justify-start gap-3'>
                    <img
                        src={user.image}
                        alt='profile'
                        className='w-[45px] h-[45px] rounded-full'
                    />
                    <div className='d-flex flex-column items-start justify-center text-md'>
                        <span className='font-medium'>
                            {user.name}
                        </span>
                        <span className='text-primaryIndigo-default text-md'>
                            {user.experience} yrs Exp
                        </span>
                    </div>
                </div>

                <button
                    className='bg-primaryIndigo-default text-white px-3 py-1 text-md shadow-md rounded-md hover:bg-primaryIndigo-light' 
                    onClick={() => handleUserAdd(user)}
                >
                    Add
                </button>

            </div>
        ));

    };
    // * End of renderUsers();

    return (
        <div className='rounded-xl overflow-hidden shadow-lg mb-4 mt-4'>
            <div
                className='px-3 py-2 bg-secondaryBlue-default text-white d-flex flex-row items-center justify-between cursor-pointer select-none'
                onClick={() => setToggleView((prev) => !prev)}
            >
                <span className='text-xl'>
                    {category}
                </span>

                <div
                    className='w-[20px] h-[20px] rounded-full font-medium d-flex flex-row items-center justify-center'
                >
                    <span className='text-[22px]'>
                        {
                            !toggleView ? <AiOutlinePlusCircle/> : <AiOutlineMinusCircle />
                        }
                    </span>
                </div>
            </div>
            {
                toggleView
                &&
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
            }

        </div>
    );

};

export default CategoriesCard;