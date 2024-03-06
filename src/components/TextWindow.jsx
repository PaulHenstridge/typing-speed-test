
import { styled } from "styled-components";

const TextBox = styled.p`
    font-size: 1.2rem;
`
const HighlightedText = styled.span`
    background-color: ${({isCorrect}) => isCorrect ? 'green' : 'red'};
    color: black;
`

const RegularText = styled.span`
    color: gray;
`

const TextWindow = ({text, completedLength, isCorrect}) => {
    const highlighted = text.substring(0, completedLength)
    const regular = text.substring(completedLength)

    return ( 
        <TextBox>
            <HighlightedText isCorrect={isCorrect}>{highlighted}</HighlightedText>
            <RegularText>{regular}</RegularText>
        </TextBox> );
}
 
export default TextWindow;