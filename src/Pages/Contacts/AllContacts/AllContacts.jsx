import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ContactCard from '../ContactCard/ContactCard';
import ContactModal from '../ContactCard/ContactModal';

const AllContacts = () => {
    const [modal,setModal]=useState('')
    const {data:contacts=[],refetch}=useQuery({
        queryKey:['contacts'],
        queryFn: async ()=>{
            const res = await axios.get('https://contacts-server-pi.vercel.app/auth/allcontacts')
            const data = await res.data;
           console.log(data)
            return data
        }
    })

    useEffect(()=>{
        refetch()
    },[])
    
    return (
       
       <div>
           
           <div className='grid grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-16'>
            {
                contacts.map(contact=><ContactCard
                key={contact._id}
                contact={contact}
                setModal={setModal}
                >

                </ContactCard>)
            }
           </div>
           {modal && <ContactModal refetch={refetch}  modal={modal} setModal={setModal} ></ContactModal>}
        </div>
    );
};

export default AllContacts;