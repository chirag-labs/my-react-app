import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login({userData}) {

  let [email,setEmail] = useState('');
  let [password,setPassword] = useState('');

  const findUser = () => {

    for(let user of userData)
    {
      if(email === user.email)
      {
        return user;
      }
    }
    return null;
  }

  const navigate = useNavigate();

  const handleSubmit= (e)=> {
    e.preventDefault();

    const user = findUser();
    console.log("user",user);
    if(user && user.password === password)
    {
      console.log("Login Successful!",user);
      navigate("/");
    }else{
      console.log("Invalid email or password");
      globalThis.alert("Invalid email or password");
    }
  };

  return (
    <>
      <section className="login-box">
        <p>Sign in to start your session</p>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="loginItem">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </section>
    </>
  );
}

export default Login;
