import React, { useState } from 'react';
import bannerImg from '../../assets/banner.png'
import Buttons from '../shared/Buttons/Buttons';
const Banner = ({handleSubmit}) => {
    const [searchText, setSearchText] = useState('')
    return (
        <div className='py-12 '>
            <img className='md:max-w-md mx-auto' src={bannerImg} alt="" />
           <div className='space-y-4 text-center'>
           <h1 className='text-6xl font-thin'>Browse, Search, View, Buy</h1>
           <p className='text-gray-400'>Best place to browse, search, view details and purchase of top flagship phones <br />
           of the current time - FlagshipFaceOff</p>

           {/* Form */}

           <form onSubmit={e=> {
            handleSubmit(e, searchText)
            setSearchText('')
           }} className='flex gap-5 justify-center'>
            <input onChange={(e)=> setSearchText(e.target.value)} type="text" placeholder='Search Phone By Name' className='p-2 md:w-3/6 border rounded-2xl'/>
            <button type='submit' className="relative inline-block text-lg group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">Search</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</button>
           </form>
           </div>
        </div>
    );
};

export default Banner;