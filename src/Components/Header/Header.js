import React from 'react';
import CoustomLink from '../CoustomLink/CoustomLink';


const Header = () => {
    return (
        <div className='bg-blue-800 flex justify-center py-8 shadow-lg shadow-blue-800/50'>
            <CoustomLink className='font-bold text-xl text-white ml-8' to='/'>Home</CoustomLink>
            <CoustomLink className='font-bold text-xl text-white ml-8' to='/reviews'>Reviews</CoustomLink>
            <CoustomLink className='font-bold text-xl text-white ml-8' to ='/dashboard'>Dashboard</CoustomLink>
            <CoustomLink className='font-bold text-xl text-white ml-8' to ='/Blogs'>Blogs</CoustomLink>
            <CoustomLink className='font-bold text-xl text-white ml-8' to ='/about'>About</CoustomLink>
        </div>
    );
};

export default Header;