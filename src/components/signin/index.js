import React, { Component } from "react";
import { Container, Content, AnimationContainer, Background } from "./style";
import { TextField } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
import Button from "../button";
import { toast } from "react-toastify";
import api from "../../services/api";

class Signin extends React.Component {
  render() {
    // const { authenticated, setAuthenticated } = this.props;
    // console.log(authenticated)
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = this.props;

    const redirectDashboard = () => {
      const { history2 } = this.props;
      if (history2) history2.push("/dashboard");
    };

    const onSubmitFunction = (data) => {
      api
      .post("/sessions", data)
      .then((response) => {
        const { token, user } = response.data;
        console.log(response.data);
        localStorage.setItem("@HubVix:token", JSON.stringify(token));
        localStorage.setItem("@HubVix:user", JSON.stringify(user));
        this.props.setAuthenticated(true)
        return redirectDashboard()
      })
      .catch((_) => toast.error("Email ou Senha invalidos"));
    }

    if (this.props.authenticated) {
      return <Redirect to="dashboard" />;
    }

    return (
      <Container>
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)} >
              <h1>
                HUB<span>VIX</span>
              </h1>
              <div>
                <TextField
                  label="E-mail"
                  margin="normal"
                  variant="outlined"
                  size="medium"
                  color="primary"
                    {...register("email")}
                    error={!!errors.email}
                    helperText={errors.email?.message}
                />
              </div>
              <div>
                <TextField
                  label="Senha"
                  margin="normal"
                  variant="outlined"
                  size="medium"
                  color="primary"
                  type="password"
                    {...register("password")}
                    error={!!errors.password}
                    helperText={errors.password?.message}
                />
              </div>
              <Button redSchema type="submit">
                Login
              </Button>
              <p>
                Não possui uma conta? Faça seu <Link to="/">Cadastro</Link>
              </p>
            </form>
          </AnimationContainer>
        </Content>
        <Background />
      </Container>
    );
  }
}
export default Signin;
