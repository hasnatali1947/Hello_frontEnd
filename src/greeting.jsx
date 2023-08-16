import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchGreeting } from "./slices/greetingSlice"
const Greeting = () =>{
    const greetings = useSelector((store)=> store.greeting)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchGreeting())
    },[])

    if(greetings.isLoading){
        return <p>Loading....</p>
    }

    if (greetings.error) {
        return <p>Error: {greetings.error}</p>;
      }
    return (
    <>
    <h1>Random Greeting</h1>
    <p>{greetings.greeting.text}</p>
    </>
    )
}

export default Greeting;