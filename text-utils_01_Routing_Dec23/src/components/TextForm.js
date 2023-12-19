import React, { useState } from 'react'
import ProtoTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick = () => {
        setText(text.toUpperCase());
        props.showToastestSms('Convert to UPPERCASE',props.mode);
    };
    const handleLowerClick = () => {
        setText(text.toLowerCase());
        props.showToastestSms('Convert to lowercase',props.mode);
    };
    const handleCapitalizedEachWord = () => {
        setText(text.replace(/[A-Z]/g, x => x.toLowerCase())
        .replace(/(^|(?<=(\.\s|\s)))[a-z]/g, x => x.toUpperCase()));
        props.showToastestSms('Convert to Capitalized Each Word',props.mode);
    }
    const handleClearText = () => {
        setText('');
        props.showToastestSms('Clear Input Field', props.mode);
    }
    const handleRemoveExtraSpaces = () => {
        setText(text.replace(/\s+/g, ' '));
    }
    const wordCounter = () => {
        return text.trim().match(/\s+/g)?.length ? (text.trim().match(/\s+/g).length + 1) : text.trim() ? 1 : 0;
    };
    const charactersCount = () => {
        return text.length ? (text.length - (text.match(/\W/gi)?.length ? text.match(/\W/gi).length : 0)) : 0;
    };
    const totalReadTime = () => {
        return (0.008 * wordCounter()).toFixed(3);
    }
    const handleOnChange = (event) => {
        console.log('onChangeEvent: ');
        setText(event.target.value);
    };
    const [text, setText] = useState('Enter text here');
    // text = 'Change the Text' // Wrong way to change the Text
    // setText('New Text It'); // Correct way to change the state
    return (
        <>
        <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h1>{props.headingText}</h1>
            <div className="mb-3">
                <textarea className={`form-control text-${props.mode === 'dark' ? 'white' : 'black'}`} id="myBox" rows="8" 
                value={text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark' ? 'black' : 'white'}}
                ></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>UPPERCASE</button>
            <button className="btn btn-primary mx-2" onClick={handleLowerClick}>lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleCapitalizedEachWord}>Capitalized Each Word</button>
            <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Inputs</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className={`container mt-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h1>Your Test Summary</h1>
            <p>Your text contains <b>{wordCounter()}</b> words and <b>{charactersCount()}</b> characters</p>
            <p>{totalReadTime()} Minutes read time</p>
        </div>
        <div className={`container mt-5 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}

TextForm.prototype = {
    headingText: ProtoTypes.string
}
