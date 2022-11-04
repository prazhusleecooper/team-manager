import React, { useEffect, useState } from 'react';

// ? Components
import Navbar from '../Components/Navbar/Navbar';
import StepBar from '../Components/StepBar/StepBar';
import Categories from '../Components/Categories/Categories';
import TeamMembers from '../Components/TeamMember/TeamMembers';

import axios from 'axios';
import { Spinner } from 'react-bootstrap';

const AddTeam = () => {

    const [refresh, setRefresh] = useState(false);
    const [categoriesList, setCategoriesList] = useState([]);


    // ? Method to Fetch the users from Local Stor
    const retrieveUsers = (category_code) => {

        let usersList = JSON.parse(localStorage.getItem(category_code));

        if (usersList) return usersList;

        return [];

    };
    // * End of retrieveUsers();

    // ? Method to refresh child components on change in Local Storage
    const refreshComponents = () => {

        setRefresh(() => !refresh)

    };
    // * End of refreshComponents();

    // ? Method to fetch data from API
    const apiFetch = async () => {

        try {

            const data = await axios({
                method: 'get',
                url: 'https://run.mocky.io/v3/db6c02ce-c82c-4658-9640-4c2725b3d1db',
            });


            console.log({
                res: data?.data?.data
            });

            setCategoriesList(data?.data?.data)

        } catch (error) {

            console.log({
                error
            });

        }

    };
    // * End of apiFetch();


    useEffect(() => {

        apiFetch();

    }, []);

    return (
        <>
            <Navbar />
            {
                categoriesList.length === 0
                    ?
                    <div className='w-full my-5 d-flex flex-row items-center justify-center'>
                        <Spinner animation="border" role="status" className='text-secondaryBlue-default'>
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    </div>
                    :
                    <>
                        <StepBar />

                        <div className='w-full px-20 pb-5 d-flex flex-row'>
                            <Categories
                                className='w-1/4 border-r-[1.5px] border-grey-500'
                                categoriesList={categoriesList}
                                refreshComponents={refreshComponents}
                                refresh={refresh}
                            />
                            <TeamMembers
                                className='w-3/4 pl-10 m'
                                refresh={refresh}
                                retrieveUsers={retrieveUsers}
                            />
                        </div>
                    </>
            }
        </>
    )

};

export default AddTeam;