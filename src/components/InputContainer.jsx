
import styled from 'styled-components'

const TextInput = styled.textarea`
    background-color:#003;
`


const InputContainer = ({handleUserInput, userInput}) => {
    return ( <>
    <TextInput placeholder='start typing here' onChange={handleUserInput} value={userInput}></TextInput>
    </>)}
 
export default InputContainer;