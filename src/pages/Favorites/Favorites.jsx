import React, { useEffect, useState } from 'react';
import { getFavoritePhones, removeFavorites } from '../../utils/utils';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import EmptyPage from '../../components/EmptyPage/EmptyPage';

const Favorites = () => {
    const [displayPhones, setDisplayPhones] = useState([])
    useEffect(()=>{
        const getPhones = getFavoritePhones()
        setDisplayPhones(getPhones)
    }, [])

    const handleRemove=(id)=>{
        removeFavorites(id)
        setDisplayPhones(getFavoritePhones())
    }
    if(displayPhones.length < 1) return <EmptyPage></EmptyPage>
    return (
       <div  className='container mx-auto'>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 py-12' >
            {
                displayPhones.map(phone => <PhoneCard handleRemove={handleRemove} phone={phone} key={phone.id} deletable={true}></PhoneCard>)
            }
        </div>
       </div>
    );
};

export default Favorites;