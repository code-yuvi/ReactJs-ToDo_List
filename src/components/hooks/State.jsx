// 6-States 
import { useState } from "react";
const State = () => {
    const [count, setCount] = useState(0);
    const handleButtonClick = () => {
        setCount(() => count + 1);
        console.log(count);
    }


    const [user, setUser] = useState([
        { name: "Yuvraj", Age: 22 },
        { name: "Madhavi", Age: 21 },
        { name: "Pratik", Age: 22 },
        { name: "Shubham", Age: 23 },
    ])
    const totalUser = user.length;
    const averageAge = user.reduce((accum, curUser)=> accum + curUser.Age,0)/totalUser;

    return (
        <>
            <h1> {count} </h1>  {/*Dynimically assessing Value */}
            <button onClick={handleButtonClick}>Increment</button>   
            <ul>
                {user.map((curUser) => {
                    return (<li>
                        {curUser.name} - {curUser.Age}
                    </li>
                    )
                }
                )}
                <h1>{totalUser}</h1>
                <h1>{averageAge}</h1>
            </ul>
        </>
    )
}

export default State;