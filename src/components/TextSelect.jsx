
// random text, select by author

// choose length? 

//  ...record best time for each text

import React, { useState } from 'react';
import styled from 'styled-components'

const TextP = styled.p`
    border: 1px solid gray;
    padding:0.4rem;
    background-color: #003;
`

import texts from "../assets/texts";
console.log(texts)

const TextSelect = ({handleTextSelection}) => {

    const [chosenAuthor, setChosenAuthor] = useState('')

    return ( <>
    {Object.keys(texts).map(author => (
        <div key={author} onClick={() => setChosenAuthor(author)}> 
        <h3>{author}</h3>
        {author === chosenAuthor && texts[author].texts.map( (text, index) => (
            <TextP key={index}  onClick={() => handleTextSelection(text)}>{text.substring(0, 100)} ...</TextP>
        ))}
        </div>
    ))}
    
    </> );
}
 
export default TextSelect;