import { useState } from 'react';
import './Toggle.css';

const ToggleSwitch = () =>{
    const [isON, setIsOn] = useState(false);

    const hanldeToggleSwitch = () => {
        setIsOn(!isON)
    }
    return(
        <div className="toggle-switch" style={{backgroundColor:isON ? "#4caf50" : ""}} onClick={hanldeToggleSwitch}>
            <div className={`switch ${isON ? "on" : "off"}`}>
                <span className="switch-state">
                    {isON ? "on" : "off"} 
                </span>
            </div>
        </div>
    )
}

export default ToggleSwitch