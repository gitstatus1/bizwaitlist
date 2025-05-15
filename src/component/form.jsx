import React, { useState } from 'react';
import {
  CitySelect,
  CountrySelect,
  StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import "../styles/form.css"


export default function Form() {
    const [countryid, setCountryid] = useState(null);
    const [stateid, setstateid] = useState(null);
    const [cityid, setcityid] = useState(null);
    const [Clicked, setClicked] = useState(false)

    const handleClick = (e) => {
        e.preventDefault();
        setClicked(true);
    }

    return(
        <>
            <h1>Join the wait list</h1>
            <form className='form'>
                <div className='form-group'>
                    <label > 
                        Name: *
                    </label>
                    <input name='name' type='text' required/>
                </div>
                <div className='form-group'>
                    <label > 
                        Email: *
                    <input name='email' type='text'/>
                    </label>
                </div>

                <div className='form-group'>
                    <label > 
                        Country: *
                    </label>

                    <CountrySelect onChange={(e) => {setCountryid(e.id); console.log(e);}} onTextChange={(txt)=>console.log(txt)} placeHolder='Select Country' required/>

                    <label>
                        State:
                    </label>
                    
                    <StateSelect disabled ={!countryid} countryid={countryid} onChange={(e) => {setstateid(e.id); console.log(e)}} placeholder='Select State'/>
  
                    <label>
                        Locality:
                    </label>               
                
                    <CitySelect disabled ={!stateid} stateid={stateid} countryid={countryid} onChange={(e) => {setcityid(e.id); console.log(e)}} placeholder='Select City'/>
                </div>

                <div className='form-group'>
                    <label>
                        Comments:
                    </label>
                        <input placeholder='What type of product are you looking for'/> 
                </div>
                <button className='submit-button' type='submit' onClick={handleClick}><span>Submit</span></button>
                <div className={`thanks ${Clicked ? 'fade-in' : ''}`} style={{ minHeight: '2rem' }}>
                {Clicked && (
                    <p>✅ Thank you for showing interest — we'll be in contact promptly</p>
                )}
                </div>
        </form>
        </>
    )
}