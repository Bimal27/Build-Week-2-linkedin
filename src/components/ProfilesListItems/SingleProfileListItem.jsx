import React from 'react'
import './SingleProfileStyles.css'

export default function SingleProfileListItem(props) {
    return (
        <div id="singleprofileitem" className='mb-3'>
            <div>
                <div className='mr-2'>
                    <img src={props.image} alt="profile" />
                </div>
                <div>
                    <h4>{props.name} {props.surname}</h4>
                    <p>{props.title}</p>
                </div>
            </div>
            <button>Connect</button>
        </div>
    )
}
