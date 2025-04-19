import React, { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import PhoneContainer from '../../components/PhoneContainer/PhoneContainer';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    const [displayPhones, setDisplayPhones] = useState(data)
    const handleSubmit = (e, text)=>{
        e.preventDefault()
        const searchPhones = displayPhones.filter(p=> p.name.toLowerCase().includes(text.toLowerCase()) || p.brand.toLowerCase().includes(text.toLowerCase()))
        setDisplayPhones(searchPhones)
    }
   
   useEffect(()=>{}, [])
    return (
        <div className='container mx-auto'>
            <Banner handleSubmit={handleSubmit}></Banner>
            <PhoneContainer phones={displayPhones}></PhoneContainer>
        </div>
    );
};

export default Home;