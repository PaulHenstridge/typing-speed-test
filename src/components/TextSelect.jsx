
// random text, select by author

// choose length? 

//  ...record best time for each text

import React, { useState } from 'react';
import styled from 'styled-components'
import AuthorPic from './AuthorPic';

import dickens from '../assets/images/Dickens.png'
import twain from '../assets/images/Twain.png'
import austen from '../assets/images/Austen.png'
import tolstoy from '../assets/images/Tolstoy.png'
import melville from '../assets/images/Melville.png'

const authorList = [austen, twain, dickens, tolstoy, melville]

const TextP = styled.p`
    border: 1px solid gray;
    padding:0.4rem;
    background-color: #31174b;
`

const AuthorBox = styled.div`
    position: relative;
    & h2{
        position: absolute;
        top:0.5rem;
        left: 44%;
        color:#31174b;
        background-color:rgba(255, 255, 255, 0.5);
        aspect-ratio:12%;
        font-size: 2rem;
    }
`

import texts from "../assets/texts";
console.log(texts)

const TextSelect = ({handleTextSelection}) => {

    const [chosenAuthor, setChosenAuthor] = useState('')

    return ( <>
    {Object.keys(texts).map((author, index) => (
        <AuthorBox key={author} onClick={() => setChosenAuthor(author)}> 
        <h2>{author}</h2>
        <AuthorPic author={author} authorPic={authorList[index]} ></AuthorPic>
        {author === chosenAuthor && texts[author].texts.map( (text, index) => (
            <TextP key={index}  onClick={() => handleTextSelection(text)}>{text.substring(0, 120)}...<strong>{Math.floor(text.length/5)} words</strong></TextP>
        ))}
        </AuthorBox>
    ))}
    
    </> );
}
 
export default TextSelect;