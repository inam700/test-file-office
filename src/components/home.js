import React from 'react';

const Home =(props)=>{

    return (
        <div>
            <h2>Name:{props.name}</h2>
            <h3>City:{props.city}</h3>
            <p>{props.children}</p>
        </div>
    )
}

export default Home;