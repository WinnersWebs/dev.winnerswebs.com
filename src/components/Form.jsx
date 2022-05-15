import React from 'react';
import { useForm } from 'react-hook-form';

export const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  const inputStyle = "border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
  
  return (
    <div className='w-full max-w-3xl m-auto py-10 mt-10 px-10'>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
            <input className={inputStyle} type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
            <input className={inputStyle} type="text" placeholder="Your business" {...register("Your business", {required: true, maxLength: 100})} />
            <input className={inputStyle} type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
            <input className={inputStyle} type="tel" placeholder="Phone" {...register("Phone", {required: true, maxLength: 12})} />
            <textarea rows='5' className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700" placeholder='Message' {...register("Message", {required: true})} />

            <input className='cursor-pointer mt-4 w-full bg-amber-400 hover:bg-amber-500 text-green-900 border shadow py-3 px-6 font-semibold text-md rounded' type="submit" />
        </form>
    </div>
  );
}