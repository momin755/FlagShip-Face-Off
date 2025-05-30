import React, { useEffect, useState } from 'react';
import PhoneCard from '../PhoneCard/PhoneCard';
import Buttons from '../shared/Buttons/Buttons';
import { Link } from 'react-router';

const PhoneContainer = ({phones}) => {
    const [showAll, setShowAll] = useState(false)
     const [showPhones, setShowPhones] = useState([])
     useEffect(()=>{
        if(showAll){
            setShowPhones(phones)
        }else{
            setShowPhones(phones.slice(0, 6))
        }
     }, [phones, showAll])
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {
                showPhones.map(phone => <PhoneCard phone={phone} key={phone.id}></PhoneCard>)
            }
        </div>
        <div className='my-10'>
        <Link onClick={()=>{
             setShowAll(prv=> !prv)
             window.scrollTo(0,100)
        }}  className="relative inline-block text-lg group">
    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">{showAll ? "Show Less" : "Show More"}</span>
    </span>
    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
</Link>
        </div>
        </div>
    );
};

export default PhoneContainer;