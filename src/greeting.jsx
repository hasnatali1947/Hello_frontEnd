import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { fetchGreeting } from "./slices/greetingSlice"

const Greeting = () => {
    const greetingData = useSelector((store) => store.greeting); 
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchGreeting());
    }, [dispatch]);

    console.log("Greeting Data:", greetingData); 

    if (greetingData.isLoading) {
        return <p>Loading....</p>;
    }

    if (greetingData.error) {
        return <p>Error: {greetingData.error}</p>;
    }

    return (
        <>
            <h1>Random Greeting</h1>
            <p>{greetingData.greeting.text || 'No greeting available'}</p>
        </>
    );
}

export default Greeting;
