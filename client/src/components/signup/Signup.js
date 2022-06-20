import React, { useState, useEffect } from "react";
import { Grid, Typography } from "@material-ui/core";
import animation from "./signup.json";
import Lottie from "react-lottie";

const Signup = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  let [username, setUsername] = useState('');
  let [Name, setName] = useState('');
  let [college, setCollege] = useState('');
  let [branch, setBranch] = useState('');
  let [year, setYear] = useState('');
  let [password, setPassword] = useState('');
  let [confirmpassword, setConfirmpassword] = useState('');
  const [signup, setSignup] = useState(null);
  let[status, setStatus] = useState(['None'])

  let[user, setUser] = useState([])

  useEffect(() =>{
    getUser()
  }, [])

  let getUser = async () => {
    let response = await fetch('http://127.0.0.1:8000/signup/')
    let data = await response.json()
    setUser(data)
  }

  

  

  let getStatus = async () => {
    
    
    
    if(user=='Done'){
      window.location.replace('/profile/')
    }
    let item= {username, Name ,college,year,branch,password, confirmpassword}
    await fetch('http://127.0.0.1:8000/signup/',{
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item),
      
    })
    
    

    
  }

  




  const [value, setValue] = useState("");
  const handleChange = (event) => {
    setValue({ value: event.target.value });
  };

  const handleSubmit = (event) => {
    getStatus()
  };
  if(user=="Logged in"){
    return(
      window.location.replace('/landing/')
    )
  }
  return (
    <Grid
      container
      lg={12}
      md={12}
      style={{ backgroundColor: "#000" }}
      justify="center"
    >
      <Grid item lg={8} md={8}>
        <Lottie options={defaultOptions} />
      </Grid>
      <Grid item lg={4} md={4}>
        <form>
          <label>
            Username:
            <input 
            type="text" 
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input2"
            placeholder="Username"
            required/>
          </label>
          <label>
            Name:
            <input 
            type="text" 
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="input2"
            placeholder="name"
            required/>
          </label>
          <label>
            College:
            <input 
            type="text" 
            value={college}
            onChange={(e) => setCollege(e.target.value)}
            className="input2"
            placeholder="College"
            required />
          </label>
          <label>
            Year:
            <input type="number"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="input2"
            placeholder="Year"
            required />
          </label>
          <label>
            Branch:
            <input type="text"
            value={branch}
            onChange={(e) => setBranch(e.target.value)}
            className="input2"
            placeholder="Branch"
            required />
          </label>
          <label>
            Password:
            <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input2"
            placeholder="Password"
            required/>
          </label>
          <label>
            Confirm Password:
            <input 
            type="password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
            className="input2"
            placeholder="Confirm Password"
            required />
          </label>
          <input type="submit" value="Submit" onClick={handleSubmit} />
        </form>
      </Grid>
    </Grid>
  );
};

export default Signup;
