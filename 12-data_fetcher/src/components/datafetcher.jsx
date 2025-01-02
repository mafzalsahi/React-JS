import React, { useEffect, useState } from "react";

const DataFetcher=({children})=>{
    const [users,setUsers]=useState([])
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
                    fetch("https://jsonplaceholder.typicode.com/users")
                    .then(res=>res.json())
                    .then((data=>{
                        setUsers(data);
                        setLoading(false)
                    }))
                 },[])

    if(loading) return <p>Loading.........</p>
    //passing users data to children as a functions
    return children({users,totalUsers:users.length})
}
export default DataFetcher