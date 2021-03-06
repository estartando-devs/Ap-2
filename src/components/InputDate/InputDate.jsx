import React from 'react';
import './InputDate.scss';

export function InputDate(props){
    const {onChange, value} = props;
    return (
        <div className="content-date">
            <label className="label" required>Data de Nascimento:</label>
            <input className="date" type="Date" onChange={onChange} value={value} />
        </div>
    )
}