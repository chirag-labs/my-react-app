function Register() {
  return (
    <>
      <section className="login-box">
        <p>Sign in to start your session</p>
        <form id="loginForm">
          <div className="loginItem">
            <label htmlFor="uname">User Name:</label>
            <input type="text" name="uname" placeholder="Username" id="uname" />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="E-Mail Address"
              id="email"
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </section>
    </>
  );
}

export default Register;
