import React, { Component } from "react";
import { Container, Content, AnimationContainer, Background } from "./style";
import { TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import Button from "../button";
class Signin extends React.Component {
  render() {
  
    return (
      <Container>
        <Content>
          <AnimationContainer>
            <form>
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
                  //   {...register("email")}
                  //   error={!!errors.email}
                  //   helperText={errors.email?.message}
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
                  //   {...register("password")}
                  //   error={!!errors.password}
                  //   helperText={errors.password?.message}
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
