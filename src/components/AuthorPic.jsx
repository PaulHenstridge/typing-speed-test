import styled from 'styled-components'

const StyledImg = styled.img`
    width: 50%;
    height: auto;
`
const AuthorPic = ({authorPic}) => {

    return ( <StyledImg src={authorPic}></StyledImg> );
}
 
export default AuthorPic;