import { Outlet, Link } from "react-router-dom";

const Home = () => {
    return (
        <>
          <h1>
            Home
          </h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              {/* <li>
                <Link to="/firebasetest">Firebase Test</Link>
              </li> */}
              <li>
                <Link to="/addProject">Add Projects</Link>
              </li>
              <li>
                <Link to="/viewProjects">View Projects</Link>
              </li>
            </ul>
          </nav>
    
          <Outlet />
        </>
      )
  };
  
  export default Home;