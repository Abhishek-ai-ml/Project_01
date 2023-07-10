import React from 'react'
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import {useNavigate} from 'react-router-dom'


const Login = () => {

    const  {
        register,
        handleSubmit,
        setValue,
        getValues,
        formState:{errors}
    } = useForm();

    const onSubmit = () => {
        const data = getValues();
        console.log(data);
        if(data.username === "Admin" && data.password === "admin") {
            navigate('/home');
        }
        else {
            toast.error("Wrong Credentials");
        }
    }

    const navigate = useNavigate()
  return (
    <div className=' bg-slate-300 flex w-screen h-screen mx-auto justify-center items-center'>
      {/* Login page */}
      <div className='flex w-9/12 gap-x-10 bg-white'>

        {/* login form */}
        <div className='w-[50%] p-10  flex flex-col mx-auto items-center gap-3'>
            {/* Heading */}
            <div className='flex flex-col justify-center items-center w-full'>
                <h1 className='text-2xl font-semibold'>Welcome Back!</h1>
                <p className='text-base text-slate-700 font-semibold'>Sign in to Continue</p>
            </div>

            {/* Main form */}
            <form className='w-full flex flex-col gap-y-5'>
                {/* username */}
                <div className='flex flex-col'>
                    <label htmlFor='username'>Username :</label>
                    <input
                        type='text'
                        placeholder='Enter Username'
                        {...register("username", {required:true}) }
                        id='username'
                        className='p-3 border-[1px] rounded-xl'
                    />
                    {
                        errors.username && (
                            <span className='text-red-500 text-sm font-semibold'>Please Enter Username</span>
                        )
                    }
                </div>

                {/* Password */}
                <div className='flex flex-col'>
                <label htmlFor='password'>Password :</label>
                    <input
                        type='password'
                        placeholder='Enter password'
                        {...register("password",{required:true})}
                        id='password'
                        className='p-3 border-[1px] rounded-xl'
                    />
                    {
                        errors.password && (
                            <span className='text-red-500 text-sm font-semibold'>Please Enter Password</span>
                        )
                    }
                </div>

                <button onClick={handleSubmit(onSubmit())} className='p-3 w-full flex justify-center bg-green-500 rounded-xl text-white font-semibold text-lg'>
                    Login
                </button>
            </form>
        </div>

        {/* photo section */}
        <div className='w-[50%] bg-blue-300'>

        </div>
      </div>
    </div>
  )
}

export default Login
