import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";

function Register({userData,setUserData}) {

  const [uname,setUname] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const navigate = useNavigate();
  const handleNavigation = ()=>navigate("/");
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      id:userData?.length+1,
      uname:uname,
      email:email,
      password:password
    }
    console.log('user',user);
    setUserData([...userData,user]);
    console.log(userData);
    setUname("");
    setEmail("");
    setPassword("");
    handleNavigation();
  }

  return (
    <>
      <section className="login-box">
        <p>Sign in to start your session</p>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="loginItem">
            <label htmlFor="uname">User Name:</label>
            <input type="text" name="uname" placeholder="Username" id="uname" value={uname} onChange={(e)=>setUname(e.target.value)} required/>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="E-Mail Address"
              id="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
            required/>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)} required
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>
          if you already have account then , <Link to="/login">Login</Link>
        </p>
      </section>
    </>
  );
}

export default Register;
