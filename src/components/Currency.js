import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';


const Currency = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [newCur, setNewCur] = useState({sign: currency, name: 'Pound'});

    const handleChange = (event) => {
        setNewCur(
            {
                sign: event.target.id,
                name: event.target.name
            });
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.id,
        });
    }

    return (
        <div className="dropdown mt-2">
            <button 
                className="btn btn-secondary dropdown-toggle" 
                type="button" 
                id="CurrencyButton" 
                data-bs-toggle="dropdown" 
                aria-haspopup="true" 
                aria-expanded="false"
                style={{backgroundColor:'#93e499'}}
                >
                Currency ({newCur.sign} {newCur.name})
            </button>
            <div className="dropdown-menu" aria-labelledby='CurrencyButton' style={{backgroundColor:'#93e499'}}>
                <a className="dropdown-item" id="$" name="Dollar" href="/#" onClick={handleChange}>$ Dollar</a>
                <a className="dropdown-item" id="&pound;" name="Pound" href="/#" onClick={handleChange}>&pound; Pound</a>
                <a className="dropdown-item" id="&euro;" name="Euro" href="/#" onClick={handleChange}>&euro; Euro</a>
                <a className="dropdown-item" id="&#8360;" name="Ruppee" href="/#" onClick={handleChange}>&#8360; Ruppee</a>
            </div>
        </div>
    );
};
export default Currency;