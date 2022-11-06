import React from "react";

const Form = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit} noValidate>
        <label>
          Twoje imię:
          <input
            name={"nameValue"}
            type="text"
            value={props.nameValue}
            onChange={props.handleChange}
          />
        </label>
        {props.nameNotValid === true ? (
          <p className="error">Nazwa nie może mieć spacji</p>
        ) : null}
        <label>
          Twój email:
          <input
            name={"emailValue"}
            type="email"
            value={props.emailValue}
            onChange={props.handleChange}
          />
        </label>
        {props.emailNotValid === true ? (
          <p className="error">Zły adres email</p>
        ) : null}
        <label>
          Ustaw hasło:
          <input
            name={"passwordValue"}
            type="password"
            value={props.passwordValue}
            onChange={props.handleChange}
          />
        </label>
        {props.passwordNotValid === true ? (
          <p className="error">Hasło musi mieć conajmniej 8 znaków</p>
        ) : null}
        <label>
          <input
            name={"isChecked"}
            type="checkbox"
            checked={props.checkValue}
            onChange={props.handleChange}
          />
          Zapoznałem się z regulaminem
        </label>
        {props.checkNotValid === true ? (
          <p className="error">
            By się zapisać potwierdź akceptację regulaminu
          </p>
        ) : null}
        <input type="submit" className="submitBtn" />
      </form>
    </>
  );
};

export default Form;
