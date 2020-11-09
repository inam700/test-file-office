import React,{useState} from 'react';

const Home =()=>{
    const [studentState,setStudentState]=useState({
        students:[
            {name: "john",city:"Lahore"}
        ]
    });
    const handleChangeInName=()=>{
        setStudentState({students: [
                {name:"Wick",city:"Washington"}
            ]
        })
    }
    return (
        <div>
            <h2>Name:{studentState.students[0].name}</h2>
            <button onClick={handleChangeInName}>Click me</button>
        </div>
    )
}

export default Home;