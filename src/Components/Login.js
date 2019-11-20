import React from "react";
import Button from "@material-ui/core/Button";
import { useParams } from "react-router-dom";

function Login() {
  let { id } = useParams();

  return (
    <div className="App">
      <header className="header">
        <p className="text">Welcome Back, {id}!</p>
        <hr></hr>
        <Button variant="contained" color="default" href="/">
          Logout
        </Button>
      </header>
    </div>
  );
}

export default Login;
