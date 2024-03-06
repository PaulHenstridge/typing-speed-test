
import styled from 'styled-components'

const TextInput = styled.textarea`
    background-color:#003;
    width: 90%;
    padding:0.6rem;
    font-size:1.4rem;
    height: 8rem;
`


const InputContainer = ({handleUserInput, userInput}) => {
    return ( <>
    <TextInput placeholder='start typing here' onChange={handleUserInput} value={userInput}></TextInput>
    </>)}
 
export default InputContainer;