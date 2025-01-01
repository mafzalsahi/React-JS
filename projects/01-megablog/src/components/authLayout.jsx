import React,{useEffect,useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export default function Protected({children,authentication=true}){
    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>state.auth.status)
    useEffect(() => {


        if(authentication && authStatus !== authentication){
            console.log("user is not authenticated")
            navigate("/login")
        } else if(!authentication && authStatus !== authentication){
            console.log("user is authenticated : need to navigate")
           navigate("/")
        }
        setLoader(false)
    }, [authStatus, navigate, authentication])
    return loader ? <h1>Loading.......</h1>:<>{children}</>
}