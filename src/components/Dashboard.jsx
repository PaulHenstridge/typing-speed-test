const Dashboard = ({correct, words, wpm}) => {
    return ( <>
        <h2>{correct ? "CORRECT" : "WRONG"}</h2>
        <h3>{words} words</h3>
        <h3>{wpm} </h3>
    </>);
    
}
 
export default Dashboard;