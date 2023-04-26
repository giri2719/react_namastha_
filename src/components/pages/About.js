import React from "react";
import { useForm } from "react-hook-form";

export default function About() {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // watch('firstName')
  console.log("render");
 const data1={
  firstName:'string',
  lastName:'string'
 }
  return (
    <>
    <div>
      <form onSubmit={handleSubmit((data)=>{
       console.log(data)
    })} className="flex flex-col p-2 m-auto gap-1 w-[50%]">
      <input {...register("firstName",{required:'This is required'})} type="text" className='bg-slate-400'></input>
      {/* {console.log(errors)} */}
      <p className='bg-red-100'>{errors.firstName?.message}</p>
      <input {...register("lastName",{required:"This is required",minLength:{value:4,message:"It should have min 4 letters"}})} type="text" className='bg-slate-400'></input>
      <p className='bg-red-100'>{errors.lastName?.message}</p>
      <input {...register("age")} type="number" className='bg-slate-400'></input>
      <input type='submit' className='bg-green-200' ></input>
    </form>
    </div>
    <div className="flex flex-col justify-center items-center">
    login
    <form>

    <div className="p-2 flex flex-col justify-center items-center"> 
      <label >Email</label>
      <input type='email' className=" shadow-md"></input>
      <label>Password</label >
      <input type='password' className=" shadow-md "></input>
      <input type='submit' value="login"></input>
    </div>
    </form>
    <button>Signup</button>
    </div>
    </>
  );
}
