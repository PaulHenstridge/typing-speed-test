const Dashboard = ({correct}) => {
    return ( <h2>{correct ? "CORRECT" : "WRONG"}</h2> );
}
 
export default Dashboard;