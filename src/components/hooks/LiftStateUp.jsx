import { useState } from "react"

const LiftStateUp = () => {
    const [inpValue, setInpValue] = useState("");
    return (
        <>
        <InputConponent inpValue={inpValue} setInpValue={setInpValue}/> 
        <DisplayConponent inpValue={inpValue}/> 
        </>
    )
}

const InputConponent = (props) => {
    
    return (
        <input type="text" placeholder="Enter Your Name" value={props.inpValue} onChange={(e)=>props.setInpValue(e.target.value)}/>
    )
}

const DisplayConponent = (props) => {
    return <p>The Current Input is : {props.inpValue}</p>
}

export default LiftStateUp