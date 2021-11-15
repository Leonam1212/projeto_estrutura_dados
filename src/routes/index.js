import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import Signup from "../components/signup";
import Signin from "../components/signin";
import Dashboard from "../components/dashboard";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Routes = (props) => {
  const schema = yup.object().shape({
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
  const form = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Switch>
      <Route exact path="/">
        <Signup {...props} {...form} />
      </Route>
      <Route path="/signin">
        <Signin />
      </Route>
      <Route path="/dashboard">
        <Dashboard />
      </Route>
    </Switch>
  );
};
export default Routes;
