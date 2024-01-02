import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ContactCard from '../ContactCard/ContactCard';

const AllContacts = () => {
    const {data:contacts=[]}=useQuery({
        queryKey:['contacts'],
        queryFn: async ()=>{
            const res = await axios.get('http://localhost:5000/auth/allcontacts')
            const data = await res.data;
           console.log(data)
            return data
        }
    })
    
    return (
        <div>
            <h1>{contacts.length}</h1>
           <div className='grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-16'>
            {
                contacts.map(contact=><ContactCard
                key={contact._id}
                contact={contact}
                >

                </ContactCard>)
            }
           </div>
        </div>
    );
};

export default AllContacts;