import React, { useState } from 'react';
import {
  CitySelect,
  CountrySelect,
  StateSelect} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import "../styles/form.css"


export default function Form() {
    const [countryid, setCountryId] = useState(null);
    const [countryName, setCountryName] = useState(null);
    const [stateid, setStateId] = useState(null);
    const [stateName, setStateName] = useState(null);
    const [cityid, setCityId] = useState(null);
    const [cityName, setCityName] = useState(null);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');    
    const [Clicked, setClicked] = useState(false)

    async function handleSubmit (e){
        e.preventDefault();

        if (!name || !email || !countryid){
            alert('Please fill in all required fields');
            return;
        }
        setClicked(true);
        nameValidation(name);
        console.log({
            name,
            email,
            countryName,
            stateName, 
            cityName,
            comment
        })

        await addDoc(collection(db,'contact'), {
            name: name,
            email: email,
            country: countryName,
            state: stateName,
            cityName: cityName,
            comment: comment
        })

        alert('Thank you for your submission! 👍')
        setName('');
        setEmail('');
        setCountryName('');
        setStateName('');
        setCityName('');
        setComment('');
        setCountryId(null);
        setStateId(null);
        setCityId(null);
    };

    const nameValidation = () => {
        const nameBox = document.querySelector('input[name="name"]');
        if (!name.trim()) {
            nameBox.style.border = '1px solid red';
        } else {
            nameBox.style.border = '1px solid #ddd'; // reset border if valid
        }
    };

    return(
        <>
            <h2 className='form-title'>Join the Waitlist</h2>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label > 
                        Name: *
                    </label>
                    <input name='name' value={name} onChange={(e) => setName(e.target.value)} type='text' required/>
                </div>
                <div className='form-group'>
                    <label > 
                        Email: *
                    <input name='email' value = {email} onChange={(e) => setEmail(e.target.value)} type='email' required/>
                    </label>
                </div>

                <div className='form-group'>
                    <label > 
                        Country: *
                    </label>

                    <CountrySelect value = {countryid} onChange={(e) => {setCountryId(e.id); setCountryName(e.name); console.log(e);}} onTextChange={(txt)=>console.log(txt)} placeHolder='Select Country' required/>

                    <label>
                        State:
                    </label>
                    
                    <StateSelect disabled ={!countryid} countryid={countryid} onChange={(e) => {setStateId(e.id); setStateName(e.name); console.log(e)}} placeholder='Select State'/>
  
                    <label>
                        Locality:
                    </label>               
                
                    <CitySelect disabled ={!stateid} stateid={stateid} countryid={countryid} onChange={(e) => {setCityId(e.id); setCityName(e.name); console.log(e)}} placeholder='Select City'/>
                </div>

                <div className='form-group'>
                    <label>
                        Comments (Optional):
                    </label>
                        <input value={comment} onChange={(e) => {setComment(e.target.value)}} placeholder='What type of product are you looking for'/> 
                </div>
                <button className='submit-button' type='submit'><span>Submit</span></button>
                <div className={`thanks ${Clicked ? 'fade-in' : ''}`} style={{ minHeight: '2rem' }}>
                {Clicked && (
                    <p>✅ Thank you for showing interest — we'll be in contact promptly</p>
                )}
                </div>
        </form>
        </>
    )
}