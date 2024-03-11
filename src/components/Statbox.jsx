import { styled } from "styled-components";

const Box = styled.div`
    width:20vw;
    height:10vh;
    padding:1.8rem;
    border: 2px solid blue;
    display:flex;
    flex-direction:column;
    align-items: flex-start;
`

const Statbox = ({data}) => {
    const title = Object.keys(data)[0]
    const value = Object.values(data)[0]
    return ( <>
    { value > 0 && <Box>
        <span>{title}</span> 
        <h4>{value}<span> {title === "accuracy" && '%'}</span></h4> 
    </Box> }  </> 
    );
}
 
export default Statbox;