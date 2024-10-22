import React, { useState } from "react";
import { createContext } from "react";
import toast from "react-hot-toast";
export const GlobalData = createContext();
const FormContext = (props) => {
  let [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleRegister(e) {
    let { name, value } = e.target;
    setRegisterUser({ ...registerUser, [name]: value });
  }

  function registerSubmit(e) {
    e.preventDefault();
    console.log(registerUser);
    let { username } = registerUser;
    setRegisterUser({
      username: "",
      email: "",
      password: "",
    });
    toast.success (`Welcome ${username}`);
  }

  return (
    <GlobalData.Provider
      value={{ registerUser, handleRegister, registerSubmit }}
    >
      {props.children}
    </GlobalData.Provider>
  );
};

export default FormContext;
