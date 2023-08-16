import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Greeting(){
const [randomGreeting, setRandomGreeting] = useState('')

useEffect(()=>{  
    axios.get('http://localhost:3000/api/v1/greetings')
    .then(response => { 
        setRandomGreeting(response.data.text);
    })
}, []);

return(
    <div>
        <h1>Random Greeting</h1>
        <p>{randomGreeting}</p>
    </div>
);
}

export default Greeting;