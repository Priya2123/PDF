import React, { useState, useEffect } from "react";
import "./styles.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

const LoginForm = (props) => {
  const {
    
    
    handleLogin,
    handleSignIn,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    signInWithGoogle,
  } = props;

  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');
  const [signup, setSignup] = useState(null);
  let[status, setStatus] = useState(['None'])

  

  useEffect(() =>{
    getStatus()
  }, [])

  let getStatus = async () => {
    let item= {username,password}
    let data= await fetch('http://127.0.0.1:8000/login/',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
      
    })
    

    setStatus(status.status)
  }


  let handlebuttonSignup = () => {
    setSignup("Render signup");
  };

  let handlebuttonlogin = () => {
    getStatus()
    if(status=='Done'){
      window.location.replace('/profile/')
    }
    
  };
  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">PDF Finder</h1>
        {/* <h4 className="head2">Log in</h4> */}
        <form action="/profile/" onSubmit= 'return handlebuttonlogin()'>
          {/* <button onClick={signInWithGoogle}>Sign in with google</button> */}
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input1"
            placeholder="Username"
            style={{ backgroundColor: "rgb(255, 255, 255)" }}
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input2"
            placeholder="Password"
            required
          />
          <Typography
            variant="caption"
            style={{
              color: "white",
              display: "flex",
              justifyContent: "flex-end",
              width: "95%",
              marginBottom: "25px",
            }}
          >
            Password should be at least 8 characters long
          </Typography>
          {signup ? (
            <>
              <div align="center">
                <button className="button" type="submit" onClick={handleSignIn}>
                  <span>Sign Up</span>
                </button>
              </div>
              <h3 className="signup1" style={{ color: "#999999" }}>
                Already have an account?{" "}
                <span
                  style={{ cursor: "pointer", color: "white" }}
                  onClick={handlebuttonlogin}
                >
                  Log In
                </span>
              </h3>
            </>
          ) : (
            <>
              <div align="center">
                {/* after backend integration, we will use handleLogin and not Link */}
                
                  <button
                    className="button"
                    type="submit"
                    onClick={handlebuttonlogin}
                  >
                    <span>Log In</span>
                  </button>
                
              </div>
              <h3 className="signup1" style={{ color: "#999999" }}>
                New to PDF Finder?{" "}
                <Link to="/signup">
                  <span
                    style={{ cursor: "pointer", color: "white" }}
                    onClick={() => handlebuttonSignup()}
                  >
                    Sign Up
                  </span>
                </Link>
              </h3>
            </>
          )}
        </form>

        {/* {signup ? <Signup /> : <></>} */}
        {/* <h1 style={{ color: "red" }}>{error}</h1> */}
      </div>
    </div>
  );
};

export default LoginForm;
