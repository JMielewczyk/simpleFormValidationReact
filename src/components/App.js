import React, { Component } from "react";
import "./App.css";
import Form from "./Form.js";

class App extends Component {
  state = {
    nameValue: "",
    emailValue: "",
    passwordValue: "",
    isChecked: false,
    isValid: false,
  };
  handleChange = (e) => {
    if (e.target.name === "isChecked") {
      this.setState({
        [e.target.name]: !this.state.isChecked,
      });
      return;
    }
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  nameNotValid = false;
  emailNotValid = false;
  passwordNotValid = false;
  checkNotValid = false;

  handleSubmit = (e) => {
    e.preventDefault();
    const { nameValue, emailValue, passwordValue, isChecked } = this.state;

    if (/^\S*$/.test(nameValue) && nameValue !== "") {
      this.setState({
        nameValue: "",
      });
      this.nameNotValid = false;
    } else {
      this.nameNotValid = true;
    }
    if (/^\S+@\S+\.\S+$/.test(emailValue)) {
      this.setState({
        emailValue: "",
      });
      this.emailNotValid = false;
    } else {
      this.emailNotValid = true;
    }
    if (isChecked) {
      this.setState({
        isChecked: false,
      });
      this.checkNotValid = false;
    } else {
      this.checkNotValid = true;
    }
    if (passwordValue.length >= 8) {
      this.setState({
        passwordValue: "",
      });
      this.passwordNotValid = false;
    } else {
      this.passwordNotValid = true;
    }
    this.formValidation();
  };

  formValidation() {
    if (
      !this.nameNotValid &&
      !this.emailNotValid &&
      !this.passwordNotValid &&
      !this.checkNotValid
    ) {
      this.setState({
        isValid: true,
      });
      setTimeout(() => {
        this.setState({
          isValid: false,
        });
      }, 3000);
    } else {
      this.setState({
        isValid: false,
      });
    }
  }

  render() {
    const { nameValue, emailValue, passwordValue, isChecked } = this.state;
    return (
      <>
        <Form
          nameValue={nameValue}
          emailValue={emailValue}
          passwordValue={passwordValue}
          checkValue={isChecked}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          nameNotValid={this.nameNotValid}
          emailNotValid={this.emailNotValid}
          passwordNotValid={this.passwordNotValid}
          checkNotValid={this.checkNotValid}
        />
        {this.state.isValid === true ? (
          <p className="isValidText">Wysłano zgłoszenie</p>
        ) : null}
      </>
    );
  }
}

export default App;
