import {Route,Routes,Link} from "react-router-dom";
import { useState } from "react";
import './App.css'
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Slist from "./Statelist";
import Llist from "./Languagelist";
import Clist from "./Countrylist"
import AddCountry from "./crud/country/AddCountry";
import DeleteCountry from "./crud/country/DeleteCountry";
import EditCountry from "./crud/country/EditCountry";
import EditState from "./crud/state/EditState";
import DeleteState from "./crud/state/DeleteState";
import AddState from "./crud/state/AddState";
import AddLanguage from "./crud/language/AddLanguage";
import EditLanguage from "./crud/language/EditLanguage";
import DeleteLanguage from "./crud/language/DeleteLanguage";

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
            <Link>Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
    </>
  );
}
function App() {
  const [userData , setUserData] = useState([]);
  
  return (
    <>
      <Header />
      <h1>Main</h1>
      <Routes>
        <Route path="/" exact element={<Home />}/>
        <Route path="/register" exact element={<Register />}/>
        <Route path="/login" exact element={<Login />}/>
        <Route path="/state" exact element={<Slist />}/>
        <Route path="/country" exact element={<Clist />}/>
        <Route path="/language" exact element={<Llist />}/>
        <Route path="/addCountry" exact element={<AddCountry />}/>
        <Route path="/deleteCountry" exact element={<DeleteCountry />}/>
        <Route path="/editCountry" exact element={<EditCountry />}/>
        <Route path="/addState" exact element={<AddState />}/>
        <Route path="/editState" exact element={<EditState />}/>
        <Route path="/deleteState" exact element={<DeleteState />}/>
        <Route path="/addLanguage" exact element={<AddLanguage />}/>
        <Route path="/editLanguage" exact element={<EditLanguage />}/>
        <Route path="/deleteLanguage" exact element={<DeleteLanguage />}/>
      </Routes>
    </>
  );
}

export default App
