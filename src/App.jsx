import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Register from "./Register";
import Home from "./Home";
import Login from "./Login";
import Slist from "./Statelist";
import Llist from "./Languagelist";
import Clist from "./Countrylist";
import Userprofile from "./Userprofile";
import AddCountry from "./crud/country/AddCountry";
import DeleteCountry from "./crud/country/DeleteCountry";
import EditCountry from "./crud/country/EditCountry";
import EditState from "./crud/state/EditState";
import DeleteState from "./crud/state/DeleteState";
import AddState from "./crud/state/AddState";
import AddLanguage from "./crud/language/AddLanguage";
import EditLanguage from "./crud/language/EditLanguage";
import DeleteLanguage from "./crud/language/DeleteLanguage";


function App() {
  let [userData, setUserData] = useState([]);
  let [stateData, setStateData] = useState([]);
  let [countryData, setCountryData] = useState([]);
  let [languageData, setLanguageData] = useState([]);
  userData = [{id:1,uname:'chirag',email:'chirag@gmail.com',password:"9090",islogged:"false"}];


  return (
    <>
      <Header userData={userData} setUserData={setUserData}/>
      <Routes>
        <Route
          path="/"
          exact
          element={<Home userData={userData} setUserData={setUserData}  />}
        />
        <Route
          path="/register"
          exact
          element={<Register userData={userData} setUserData={setUserData} />}
        />
        <Route
          path="/login"
          exact
          element={<Login userData={userData} setUserData={setUserData}/>}
        />
        <Route
          path="/state"
          exact
          element={<Slist stateData={stateData} setStateData={setStateData} />}
        />
        <Route
          path="/country"
          exact
          element={
            <Clist countryData={countryData} setCountryData={setCountryData} />
          }
        />
        <Route
          path="/language"
          exact
          element={
            <Llist
              languageData={languageData}
              setLanguageData={setLanguageData}
            />
          }
        />
        <Route
          path="/addCountry"
          exact
          element={
            <AddCountry
              countryData={countryData}
              setCountryData={setCountryData}
            />
          }
        />
        <Route
          path="/deleteCountry"
          exact
          element={
            <DeleteCountry
              countryData={countryData}
              setCountryData={setCountryData}
            />
          }
        />
        <Route
          path="/editCountry"
          exact
          element={
            <EditCountry
              countryData={countryData}
              setCountryData={setCountryData}
            />
          }
        />
        <Route
          path="/addState"
          exact
          element={
            <AddState stateData={stateData} setStateData={setStateData} />
          }
        />
        <Route
          path="/editState"
          exact
          element={
            <EditState stateData={stateData} setStateData={setStateData} />
          }
        />
        <Route
          path="/deleteState"
          exact
          element={
            <DeleteState stateData={stateData} setStateData={setStateData} />
          }
        />
        <Route
          path="/addLanguage"
          exact
          element={
            <AddLanguage
              languageData={languageData}
              setLanguageData={setLanguageData}
            />
          }
        />
        <Route
          path="/editLanguage"
          exact
          element={
            <EditLanguage
              languageData={languageData}
              setLanguageData={setLanguageData}
            />
          }
        />
        <Route
          path="/deleteLanguage"
          exact
          element={
            <DeleteLanguage
              languageData={languageData}
              setLanguageData={setLanguageData}
            />
          }
        />
      <Route
        path = "/userProfile"
        exact element={<Userprofile userData={userData}/>}
      />
      </Routes>
    </>
  );
}

export default App;
