
import { styled } from "styled-components";

const StyledP = styled.p`
    font-size: 1.2rem;
`

const TextWindow = ({text}) => {

    return ( <StyledP>{text}</StyledP> );
}
 
export default TextWindow;