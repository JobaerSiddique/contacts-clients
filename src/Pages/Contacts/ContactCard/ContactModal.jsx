import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import cloudinaryConfig from "../../../ImageHostingConfig/ImageConfig"
const ContactModal = ({modal,refetch,setModal}) => {
    console.log(modal)
    const {_id,name,email,address,phone,photo,favourite
    }=modal
    const [fav,setfav]=useState(false)
  const handleUpdate  = (e) =>{
    e.preventDefault()
   const id=_id
    const form = e.target;
   const name =form.name.value
   const email=form.email.value
   const phone = form.phone.value
   const address=form.address.value
   const file = form.photo.files[0]
  
   
    const formData = new FormData()
                formData.append('file',file)
                formData.append('upload_preset','jobaer_up')
                fetch(`https://api.cloudinary.com/v1_1/${cloudinaryConfig.cloudName}/image/upload`,{
        method:"POST",
        
        body:formData
      })
      .then(res=>res.json())
      .then(result=>{
       
        const image= result.secure_url
        const updateInfo={
          name:name,
          email:email,
          phone:phone,
          address:address,
          photo:image,
          favourite:fav
         }
       
         axios.put(`https://contacts-server-pi.vercel.app/auth/allcontacts/${id}`,updateInfo)
        .then((response)=>{
            console.log(response)
            if(response.data){
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Add Contact Successfully",
                    showConfirmButton: false,
                    timer: 2000
                  });
                  setModal(null)
                  refetch()
            }
            if(response.data.message){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${response.data.message}`,
                 
                  });
                  setModal(null)
                refetch()
            }
                
            
        })
        .catch(err=>{
            if(err){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${response.data.message}`,
                 
                  });
            }
        })
      })
   
    
  
      // console.log(updateInfo,_id,file)
      // axios.put(`https://contacts-server-pi.vercel.app/auth/allcontacts/${id}`,updateInfo)
      // .then(result=>{
      //   if(result.data){
      //     Swal.fire({
      //       position: "top-center",
      //       icon: "success",
      //       title: "Contact Update Successfully",
      //       showConfirmButton: false,
      //       timer: 1500
      //     });
      //     setModal(null)
      //     refetch()
      //   }
       
      // })
     
   
   
    
   
  }

  const handleDelete = id=>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-warning"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`https://contacts-server-pi.vercel.app/auth/allcontacts/${id}`)
    .then(()=>{
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Contact Delete Successfully",
        showConfirmButton: false,
        timer: 1500
      });
      setModal(null)
      refetch()
    })
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your are Cancel to delete the Contact",
          icon: "error"
        });
      }
    });

    
  }
    return (
        <div>
        
<input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal" role="dialog">
  <div className="modal-box">
  <label htmlFor="my_modal_6" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</label>
    <form onSubmit={handleUpdate} >
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Name</span>
   
  </div>
  <input type="text" 
  Value={modal?.name}
  name='name'
  placeholder="Enter your Name" 
  className="input input-bordered w-full " />
  
</label>
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Email</span>
   
  </div>
  <input type="email" 
  Value={modal?.email}
  name='email'
  placeholder="Enter your Name" 
  className="input input-bordered w-full " />
  
</label>
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Phone</span>
   
  </div>
  <input type="number" 
  Value={modal?.phone}
  name='phone'
  placeholder="Enter your Name" 
  className="input input-bordered w-full " />
  
</label>
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">address</span>
   
  </div>
  <input type="text" 
  Value={modal?.address}
  name='address'
  placeholder="Enter your Name" 
  className="input input-bordered w-full " />
  
</label>
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Photo</span>
   
  </div>
  <input type="file" 
  name='photo'
  placeholder="Enter your Name" 
  className="input input-bordered w-full " />
  
</label>
    <label className="form-control w-full ">
  <div className="label">
    <span className="label-text">Favourite</span>
   
  </div>
  {favourite?
  <input type="checkbox" 
  checked
  
   className="toggle toggle-info  " />:
   <input type="checkbox" 
  onChange={()=>setfav(!fav)}
  className="toggle toggle-info  " />}
  
</label>

 <input type="submit" className='btn btn-outline btn-success w-full my-5' value="Update" />
    </form>
    <button className='btn btn-warning w-full' onClick={()=>handleDelete(_id)}>Delete Contact</button>
    
  </div>
</div>
        </div>
    );
};

export default ContactModal;