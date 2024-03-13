import React, { useState, useEffect } from 'react';
import './ColorGuesser.css';
import{ generateHexCode } from './generateHexCode';

const ColorGuesser = () => {
    const [trueColor, setTrueColor] = useState();
    const [colorValues, setColorValues] = useState([]);
    const [isCorrect, setGuess] = useState(null); 

    const setColors = () => {
        const answer = generateHexCode();
        setTrueColor(answer);
        setColorValues([answer, generateHexCode(), generateHexCode()].sort(() => Math.random() > .5 ? 1 : -1));
    }

    const handleClick = (colorValue) => {
        setGuess(colorValue === trueColor);
        if (colorValue === trueColor) {
            setColors();
        }
    }

    useEffect(() => {
        setColors();
    }, [])

    return (
        <>
        {isCorrect ? <div className='correct'>SUCCESS!</div> : null}
        {isCorrect === false ? <div className='incorrect'>Failure!</div> : null}
        <div className='primary' style={{backgroundColor: trueColor}}></div>
        <div>
            {colorValues.map((color) => {
            return <button key={color} onClick={() => handleClick(color)}>{color}</button>   
        })}
        </div>
        </>
    )
}

export default ColorGuesser;
