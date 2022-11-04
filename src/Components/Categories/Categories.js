import React from 'react';
import CategoriesCard from './CategoriesCard';

const Categories = ({ categoriesList, refreshComponents, refresh, ...props }) => {

    // ? Method to render the Category cards
    const renderCards = () => {

        return categoriesList?.map(({category, category_code, users}) => {

            return(
                <CategoriesCard 
                    category={category}
                    category_code={category_code}
                    users={users}
                    refreshComponents={refreshComponents}
                />
            )

        });

    };
    // * End of renderCards();

    return(
      
        <div className='w-full' {...props} >
            <span className='text-2xl font-bold text-primaryBlue-default mb-5 ' style={{ marginBottom: '50px' }}>
                Categories
            </span>

            <div className='d-flex flex-row items-start justify-between w-full grow'>

                <div className='w-full pr-4 '>

                    {
                    renderCards()
                    }

                </div>

            </div>
        </div>

    );

};

export default Categories;