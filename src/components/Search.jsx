import React, { Component, useState } from 'react'
import './Search.css'

export default function Search (props) {

    const [value, setPokemon] = useState('')

    return (
        <div className='container search'>
            <div>
                <input type="text" className="input"
                    value={value}
                    onChange={e => setPokemon(e.target.value)}
                    placeholder={props.ph}/>
                <button className='btn'
                    onClick={() => props.receiveData(value)}>{props.textBtn}</button>
            </div>
        </div>)
    
}
