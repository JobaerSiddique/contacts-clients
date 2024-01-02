import React from 'react';
import contacts from '../../../../contact.json'
import Lottie from 'lottie-react';
import './AddContact.css'
import cloudinaryConfig from '../../../ImageHostingConfig/ImageConfig'
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const AddContacts = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        
        const file= data.file[0]
       if(file){
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
        const contactinfo={
            name:data.name,
            email:data.email,
            phone:data.phone,
            address:data.address,
            photo:image
        }
       
        axios.post('http://localhost:5000/auth/addcontact',contactinfo)
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
                  reset()
            }
            if(response.data.message){
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: `${response.data.message}`,
                 
                  });
                  reset()
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
       }

     
    }
    return (
        <div>
             <Helmet >
        <title>Neutron Ltd || Add a Contect</title>
       
      </Helmet>
            <div className='grid grid-cols-1 xs:grid-cols-1 lg:grid-cols-2 md:grid-cols-2 xl:grid-cols-2 gap-10 justify-center items-center bg-slate-100 rounded-3xl shadow-2xl p-14'>
                <div>
                    <Lottie className='size-auto' animationData={contacts} loop={true} />
                </div>
                <div>
                    <h1 className='uppercase text-center font-serif font-bold text-xl lg:text-4xl bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text bg-300% animate-gradient'>Add a Contact</h1>

                    <div className='my-10'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="font-semibold">Name <span className='text-red-600 font-bold'>*</span></span>
                            </div>
                            <input type="text"
                            {...register("name", { required: true })}
                                placeholder="Enter Your Name"
                                className="input input-bordered input-info w-full " />
                            {errors.name?.type === "required" && (
                                <p className='text-red-500 mt-3 font-serif font-semibold'> Name is required</p>
                            )}

                        </label>
                        <label className="form-control w-full my-3 ">
                            <div className="label">
                                <span className="font-semibold">Email <small>(option)</small> </span>
                            </div>
                            <input type="email"
                                placeholder="Enter Your Email"
                                {...register("email" )}
                                className="input input-bordered input-info w-full " />
                           

                        </label>
                        <label className="form-control w-full my-3 ">
                            <div className="label">
                                <span className="font-semibold">Phone <span className='text-red-600 font-bold'>*</span></span>
                            </div>
                            <input type="number"
                                placeholder="Enter Your Phone Number"
                                {...register("phone", { required:{
                                    value:true,
                                    message:"Phone number must be Required"
                                },
                                pattern:{
                                    value:/^(?:\+88|88)?(01[3-9]\d{8})$/,
                                    message:'Invalid Bangladesh phone number'
                                }
                                })}
                                className="input input-bordered w-full " />
                            {errors.phone?.type === "required" && (
                                <p className='text-red-500 mt-3 font-serif font-semibold'>{errors.phone?.message}</p>
                            )}
                            {errors.phone?.type === "pattern" && (
                                <p className='text-red-500 mt-3 font-serif font-semibold'>{errors.phone?.message}</p>
                            )}

                        </label>
                        <label className="form-control w-full my-3 ">
                            <div className="label">
                                <span className="font-semibold">Address <span className='text-red-600 font-bold'>*</span></span>
                            </div>
                            <textarea 
                            {...register("address", { required: true })}
                            className="textarea textarea-info" 
                            placeholder="Enter Your Address"/>
                            {errors.address?.type === "required" && (
                                <p className='text-red-500 mt-3 font-serif font-semibold'>Address Must be required</p>
                            )}

                        </label>
                        <label className="form-control w-full my-3 ">
                            <div className="label">
                                <span className="font-semibold">Photo <span className='text-red-600 font-bold'>*</span></span>
                            </div>
                            <input type="file"
                                placeholder="Enter Your Name"
                                {...register("file", { required: true })}
                                className="file-input file-input-bordered file-input-info w-full " />
                            {errors.file?.type === "required" && (
                                <p className='text-red-500 mt-3 font-serif font-semibold'>Photo must be required</p>
                            )}

                        </label>

                        <input type="submit" className='btn btn-outline btn-info w-full my-4 uppercase' value="Add Contact" />
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddContacts;