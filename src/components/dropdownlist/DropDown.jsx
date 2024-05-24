import React, {useState} from 'react';
import './dropdown.css';


function DropDown(){

    const [className, setClassName] = useState('');
    
     const handleClick = () => {
        setClassName(className === 'show-list' ? '' : 'show-list');
    }
    return(
        <div className='drop-list'>
            <div className="drop-title" onClick={handleClick}>
                <h1>Account setting</h1>
                <div className="circle">
                    <button>🌏︎</button>
                </div>
            </div>
            <ul className={className}>
                <span></span>
                <li>Profile Information</li>
                <li>Change Password</li>
                <li>Become PRO</li>
                <li>Help</li>
                <li>Log out</li>
            </ul>
        </div>
    )
}

export default DropDown;
