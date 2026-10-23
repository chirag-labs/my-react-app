function Login() {
  return (
    <>
      <section className="login-box">
        <p>Sign in to start your session</p>
        <form id="loginForm">
          <div className="loginItem">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="E-Mail Address"
            />
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" placeholder="password" />
          </div>
          <button type="submit">Login</button>
        </form>
      </section>
    </>
  );
}

export default Login;
