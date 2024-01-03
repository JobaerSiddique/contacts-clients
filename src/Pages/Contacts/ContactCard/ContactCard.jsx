import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { BsFillSuitHeartFill } from "react-icons/bs";
const ContactCard = ({contact,setModal,modal}) => {
   
  
    const {_id,name,email,photo,address,phone,favourite}=contact
    return (
        <div>
            <div className="card  bg-base-100 shadow-2xl hover:scale-y-90">
  <figure className="px-10 pt-10">
    <img  src={photo} alt="Shoes" className="size-52 rounded-xl" />
  </figure>
  <div className="card-body items-center  text-justify">
    <h2 className="card-title">Name : {name}</h2>
    {!email? "":<p className='font-bold'>Email : <span>{email}</span></p>}
    <p className='text-justify '>Address : {address}</p>
    <p className='font-bold'>Phone : {phone}</p>
    {favourite?<p className='text-red-500'><BsFillSuitHeartFill /></p>:""}
    <div className="flex justify-between items-end">
      {/* <button className="btn btn-primary mx-5">Buy Now</button>
      <button className="btn btn-outline btn-primary">Buy</button> */}
      <label htmlFor="my_modal_6"
      onClick={()=>setModal(contact)}
      className="btn btn-secondary">Contact Details</label>
    </div>
  </div>
</div>

        </div>
    );
};

export default ContactCard;