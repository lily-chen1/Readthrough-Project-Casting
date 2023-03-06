import { Outlet, Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/addProjects">Add Projects</Link>
          </li>
          <li>
            <Link to="/rtest">MobX Data Retrieval Test</Link>
          </li>
          <li>
            <Link to="/etest">MobX Data Editing Test</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};

export default Home;
