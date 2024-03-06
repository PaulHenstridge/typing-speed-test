const Dashboard = ({correct, words}) => {
    return ( <>
        <h2>{correct ? "CORRECT" : "WRONG"}</h2>
        <h3>{words} words</h3>
    </>);
    
}
 
export default Dashboard;