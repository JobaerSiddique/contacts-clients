import React from 'react';

const ContactCard = ({contact}) => {
    console.log(contact)
    const {name,email,photo,address,phone}=contact
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={photo} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Name : {name}</h2>
    {!email? "":<p>Email : {email}</p>}
    <div className="flex justify-between items-end">
      <button className="btn btn-primary mx-5">Buy Now</button>
      <button className="btn btn-outline btn-primary">Buy</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ContactCard;