import React, { Component } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "../components/signup";
import Signin from "../components/signin";
import Dashboard from "../components/dashboard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Routes = (props) => {
  const [authenticated, setAuthenticated] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  // console.log(modalIsOpen)

// console.log(authenticated);
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@HubVix:token"));

    if (token) {
      return setAuthenticated(true);
    }
  }, [authenticated]);

  const history = useHistory()
  const history2 = useHistory()
  const history3 = useHistory()
  // REGRAS DE VALIDAÇÃO DOS FORMULÁRIOS DE CADASTRO E LOGIN

  const schemaSignup = yup.object().shape({
    name: yup.string().required("Campo obrigatório!!"),
    email: yup.string().email("Email invalido").required("Campo obrigatório"),
    password: yup
      .string()
      .min(6, "Minimo de 6 caracteres")
      .required("Campo obrigatório"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senhas diferentes")
      .required("Campo obrigatório"),
    contact: yup.string().required("Campo obrigatório"),
    bio: yup.string().required("Campo obrigatório!!"),
    course_module: yup.string(),
  });

  const schemaSignin = yup.object().shape({
    email: yup.string().email("Email invalido").required("Campo obrigatório!"),
    password: yup
      .string()
      .min(6, "Minimo de 6 digitos")
      .required("Campo obrigatório!"),
  });

  const schemaPatchData = yup.object().shape({
    name: yup.string().required("Campo obrigatório!"),
    contact: yup
      .string()
      .required("Campo obrigatório!"),
    old_password: yup.string().required("Senha antiga é obrigatório"),
    password: yup.string().required("Campo obrigatório!")
  });


  // EXPORTANDO AS REGRAÇAS DE VALIDAÇÃO COM SEUS DEVIDOS COMPONENTES

  const formSignup = useForm({
    resolver: yupResolver(schemaSignup),
  });

  const formSignin = useForm({
    resolver: yupResolver(schemaSignin),
  });

  const formPatchData = useForm({
    resolver: yupResolver(schemaPatchData)
  })

  return (
    <Switch>
      <Route exact path="/">
        <Signup {...props} {...formSignup} {...history}/>
      </Route>
      <Route path="/signin">
        <Signin {...props} {...formSignin} {...history2} authenticated = {authenticated} setAuthenticated = {setAuthenticated} />
      </Route>
      <Route path="/dashboard"   >
        <Dashboard {...props} {...formPatchData} {...history3} modalIsOpen = {modalIsOpen} setIsOpen = {setIsOpen} authenticated = {authenticated} setAuthenticated = {setAuthenticated} />
      </Route>
    </Switch>
  );
};
export default Routes;
