import React from "react";
import { useParams } from "react-router-dom";
import Button from "@material-ui/core/Button";

function Login() {
  let { id } = useParams();

  return (
    <div className="App">
      <header className="header">
        <p className="text">
          Ops... You can't login with a empty username or password!
        </p>
        <hr></hr>
        <Button variant="contained" color="default" href="/">
          Back
        </Button>
      </header>
    </div>
  );
}

export default Login;
