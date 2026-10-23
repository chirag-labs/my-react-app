import { Link } from "react-router-dom";

function Header(){
  return (
    <>
    <header>
      <h1>
        <Link to="/">CMS</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/state">State</Link>
          </li>
          <li>
            <Link to="/language">Language</Link>
          </li>
          <li>
            <Link to="/country">Country</Link>
          </li>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link>User</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header