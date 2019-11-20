import React, { Component } from "react";
import "../Styles/Styles.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

export class Home extends Component {
  state = {
    id: "",
    password: ""
  };

  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

  render() {
    const link = "/login/" + this.state.id;

    return (
      <div className="App">
        <header className="header">
          <p className="text">Login</p>

          <div className="form">
            <TextField
              placeholder="Enter Your First Name"
              label="First Name"
              onChange={this.handleChange("id")}
              //defaultValue={"Álvaro"}
              margin="normal"
              color="secondary"
            />

            <TextField
              placeholder="Enter Your password"
              label="Password"
              type="password"
              onChange={this.handleChange("password")}
              //defaultValue={"Álvaro"}
              margin="normal"
              color="secondary"
            />
          </div>
          <Button
            variant="contained"
            color="default"
            href={link}
            disabled={this.state.id && this.state.password ? false : true}
          >
            Login
          </Button>
        </header>
      </div>
    );
  }
}

export default Home;
