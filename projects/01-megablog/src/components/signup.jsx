import React,{useState} from "react";
import authService from '../appwrite/auth'
import {Link,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button,Input,Logo} from './index'
import { useDispatch } from "react-redux";
import {useForm} from 'react-hook-form'


function Signup(){
    const navigate=useNavigate()
    const dispath=useDispatch()
    const [error,setError]=useState("")
    const {register,handleSubmit}=useForm()
    const create=async (data)=>{
        const { email, password, fullName } = data; // Extract data from the form
        console.log("Data Sent to Appwrite:", { email, password, fullName }); // Debugging
        setError("")
        console.log("Form Data Submitted:", data); // Debugging
        try {
           const userData= await authService.createAccount(data)
           console.log("Account Created:", userData); // Debugging
           if (userData) {
           const userData= await authService.getCurrentUser()
           if (userData) {
            dispath(login(userData))
           }
           navigate("/")
           }
        } catch (error) {
            console.error("Error Creating Account:", error);
            setError(error.message || "An unexpected error occurred");
        }
    }
    return(
        <div className="flex items-center justify-center ">
            <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>
                <div className="mb-2 flex justify-center ">
                    <span className="inline-block w-full max-w-[100px]">
                        <Logo width="100%"/>
                    </span>
                </div>
                <h2 className="text-center text-2xl font-bold leading-tight">Sign up to create account</h2>
                    <p className="mt-2 text-center text-base text-black/60">
                    Already have an account?&nbsp;
                    <Link to="/login" className="font-meduim text-primary transition-all duration-200 hover:underline">
                    Sign in
                    </Link>
                    </p>
                    {error&&<p className="text-red-500 tex-center ">{error}</p>}
                    <form onSubmit={handleSubmit(create)}>
                        <div className="space-y-5">
                            <Input label="Full Name: " placeholder="Enter your full name" {...register("fullName",{required:true})} />
                            
                            <Input label="Email : " placeholder="Enter your email" type="email" 
                            {...register("email",{required:true, 
                            validate:{matchPattern:(value)=> /^[^@]+@[^@]+\.[^@]+$/.test(value)||"Email address must be a valid address"}})}/>
                            
                            <Input label="Password : " type="password" placeholder="Enter your password"
                            {...register("password",{required:true})}/>
                            <Button type="submit" className="w-full">Create Account</Button>
                        </div>
                    </form>
            </div>    
        </div>
    )
}
export default Signup