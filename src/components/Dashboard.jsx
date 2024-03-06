const Dashboard = ({correct, chars, wpm, errors}) => {

    const words= Math.floor(chars/5)
    return ( <>
        <h2>{correct ? "CORRECT" : "WRONG"}</h2>
        <h3>{words} words</h3>
        {wpm && <h3>{wpm} words per minute </h3>}
        <h3>{errors} errors in {chars} characters</h3>
        <h3>{Math.floor(100-(errors/chars)*100)}% Accuracy</h3>
    </>);
    
}
 
export default Dashboard;