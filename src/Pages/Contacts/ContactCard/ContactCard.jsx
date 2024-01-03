import React, { useState } from 'react';
import ContactModal from './ContactModal';
import { FcDislike } from "react-icons/fc";
const ContactCard = ({contact,setModal,modal}) => {
   
  
    const {_id,name,email,photo,address,phone,favourite}=contact
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img  src={photo} alt="Shoes" className="size-52 rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {name}</h2>
    {!email? "":<p>Email : {email}</p>}
    <p>Address : {address}</p>
    <p>Phone : {phone}</p>
    {favourite?<p><FcDislike /></p>:""}
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