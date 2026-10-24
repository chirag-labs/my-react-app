import { Link, useNavigate } from "react-router-dom";

function Header({userData,setUserData}){
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    const user = findLoggedUser();
    setUserData(userData[user].islogged="false");
    globalThis.alert("you are being redirected to login page.");

    navigate("/login");
    
  }
  const findLoggedUser = ()=> {
  
    for(let user of userData){
      let index = userData.indexOf(user);

      if(userData[index].islogged === 'true')
      {
        return index;
      }
    }
  }
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
            <Link to="/userProfile">User</Link>
          </li>
          <li>
            <button onClick={handleLogout}>Log out</button>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}

export default Header