import React from 'react';
import './settingtask.css'

const InputBox = (props) => {

    return (
        <div className="myDiv1">
            <div className="myDiv2">
                <p>{props.text}</p>
                <input
                    type = {props.type}
                    name={props.name}
                    value={props.value}
                    placeholder={props.placeholder}
                    style ={props.style}
                    onChange={props.onChange}
                />
            </div>
        </div>
    )
}
export default settingtask;