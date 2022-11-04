import React from 'react';

// ? SVG
import Logo from '../SVG/Logo';

const Navbar = () => {

    return(
        <div className='w-full bg-white px-10 py-10'>
            <Logo 
                width={120}
                height={60}
                className=' ml-10'
            />
        </div>
    );

};

export default Navbar;