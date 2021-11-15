import React from "react";
import {
  TextField,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@material-ui/core";
import { Container, Background, Content, AnimationContainer } from "./style";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
import Button from "../button/index";
import { toast } from "react-toastify";
import api from "../../services/api";

class Signup extends React.Component {
  render() {
    const { authenticated } = this.props;

    const {
      register,
      handleSubmit,
      formState: { errors },
    } = this.props;

    const redirectLogin = () => {
      const { history } = this.props;
      if (history) history.push("/signin");
    };

    const onSubmitFunction = ({
      name,
      password,
      email,
      bio,
      contact,
      course_module,
    }) => {
      const user = { name, password, email, bio, contact, course_module };
      api
        .post("/users", user)
        .then((_) => {
          toast.success("Sucesso ao criar a conta!");
          return redirectLogin();
        })
        .catch((err) => {
          toast.error("Erro ao criar a conta. Verifique os campos!!");
        });
    };

    if (authenticated) {
      return <Redirect to="dashboard" />;
    }

    return (
      <Container>
        <Background />
        <Content>
          <AnimationContainer>
            <form onSubmit={handleSubmit(onSubmitFunction)}>
              <h1>
                HUB<span>VIX</span>
              </h1>
              <div>
                <TextField
                  label="nome"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  color="primary"
                  {...register("name")}
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </div>
              <div>
                <TextField
                  label="E-mail"
                  margin="normal"
                  variant="outlined"
                  size="small"
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
                  size="small"
                  color="primary"
                  type="password"
                  {...register("password")}
                  error={!!errors.password}
                  helperText={errors.password?.message}
                />
              </div>
              <div>
                <TextField
                  label="Confirmar senha"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  type="password"
                  color="primary"
                  {...register("confirmPassword")}
                  error={!!errors.confirmPassword}
                  helperText={errors.confirmPassword?.message}
                />
              </div>
              <div>
                <TextField
                  label="Contato"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  color="primary"
                  {...register("contact")}
                  error={!!errors.contact}
                  helperText={errors.contact?.message}
                />
              </div>
              <div>
                <TextField
                  label="Biografia"
                  margin="normal"
                  variant="outlined"
                  size="small"
                  color="primary"
                  {...register("bio")}
                  error={!!errors.bio}
                  helperText={errors.bio?.message}
                />
              </div>

              <div>
                <FormControl sx={{ m: 0, width: 230 }}>
                  <TextField
                    id="select"
                    label="Módulo do curso"
                    select
                    margin="normal"
                    variant="outlined"
                    value="Primeiro módulo (Introdução ao Frontend)"
                    size="small"
                    color="primary"
                    {...register("course_module")}
                    error={!!errors.module_course}
                    helperText={errors.module_course?.message}
                  >
                    <MenuItem value="Primeiro módulo (Introdução ao Frontend)">
                      Primeiro módulo ( Introdução ao Frontend )
                    </MenuItem>
                    <MenuItem value="Segundo módulo (Frontend Avançado)">
                      Segundo módulo (Frontend Avançado)
                    </MenuItem>
                    <MenuItem value="Terceiro módulo (Introdução ao Backend)">
                      Terceiro módulo (Introdução ao Backend)
                    </MenuItem>
                    <MenuItem value="Quarto módulo (Backend Avançado)">
                      Quarto módulo (Backend Avançado)
                    </MenuItem>
                  </TextField>
                </FormControl>
              </div>
              <Button redSchema type="submit">
                Cadastrar
              </Button>
              <p>
                Já possui uma conta? Faça seu <Link to="/signin">Login</Link>
              </p>
            </form>
          </AnimationContainer>
        </Content>
      </Container>
    );
  }
}
export default withRouter(Signup);
