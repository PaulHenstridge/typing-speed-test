import Statbox from "./Statbox";
import { styled } from "styled-components";

const Dash = styled.div`
    display: flex;
`
const Dashboard = ({correct, chars, wpm, errors}) => {

    const words= Math.floor(chars/5)
    return ( <Dash>
        {/* <h2>{correct ? "CORRECT" : "WRONG"}</h2>
        <h3>{words} words</h3>
        {wpm && <h3>{wpm} words per minute </h3>}
        <h3>{errors} errors in {chars} characters</h3>
        <h3>{Math.floor(100-(errors/chars)*100) || 0 }% Accuracy</h3> */}

        <Statbox data={{words}}/>
        <Statbox data={{wpm}}/>
        <Statbox data={{errors}}/>
        <Statbox data={{accuracy:Math.floor(100-(errors/chars)*100) || 0 }}/>

    </Dash>);
    
}
 
export default Dashboard;