import React from "react";
import { Container, Content, formContent } from "./style";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import Modal from "react-modal";
import api from "../../services/api";
import { toast } from "react-toastify";


import { TiArrowBackOutline } from "react-icons/ti";
import { Link } from "react-router-dom";
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

class Dashboard extends React.Component {
  state = {
    token: JSON.parse(localStorage.getItem("@HubVix:token")) || "",
    user: JSON.parse(localStorage.getItem("@HubVix:user")),
  };

  render() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = this.props;

    const openModal = () => {
      this.props.setIsOpen(true);
    };

    const closeModal = () => {
      this.props.setIsOpen(false);
    };

    const logout = () => {
      localStorage.clear();
      this.props.setAuthenticated(false);
    };

    const onSubmitFunction = (data) => {
      api
        .put(`/profile`, data, {
          headers: { Authorization: `Bearer ${this.state.token}` },
        })
        .then((response) => {
          const { data } = response;
          toast.success("Sucesso ao atualizar a conta!");
          localStorage.setItem("@HubVix:user", JSON.stringify(data));
          document.location.reload(true);
          return closeModal();
        })
        .catch((err) => {
          toast.error("Erro ao atualizar dados");
        });
    };

    return (
      <Container>
        <h2>
          SEUS <span>DADOS</span>
        </h2>

        <Content>
          <ul>
            <li>
              <span>Usuário</span>: {this.state.user.name}
            </li>
            <li>
              <span>Contato</span>: {this.state.user.contact}
            </li>
            <li>
              <span>E - mail</span>: {this.state.user.email}
            </li>
            <li>
              <span>Módulo</span>: {this.state.user.course_module}
            </li>
            <li>
              <span>Perfil criado em</span>: {this.state.user.created_at}
            </li>
          </ul>
          <Button redSchema onClick={openModal}>
            Atualizar dados
          </Button>
            <span style={{marginTop:"20px", opacity: "0.5", fontSize: "10px"}}>Sua senha será modificada. Lembre-se dela no próximo Login ;)</span>
        <Modal
          isOpen={this.props.modalIsOpen}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>ATUALIZE SEUS DADOS</h2>
            <div>
              <TextField
              style = {{width: "100%"}}
                label="name"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                {...register("name")}
                error={!!errors.name}
                helperText={errors.name?.message}
              />
            </div>
            <div>
              <TextField
              style = {{width: "100%"}}
                label="Contato"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                type="text"
                {...register("contact")}
                error={!!errors.contact}
                helperText={errors.contact?.message}
              />
            </div>
            <div>
              <TextField
              style = {{width: "100%"}}
                label="Senha antiga"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                type="password"
                {...register("old_password")}
                error={!!errors.old_password}
                helperText={errors.old_password?.message}
              />
            </div>
            <div>
              <TextField
              style = {{width: "100%"}}
                label="Nova senha"
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
            <Button style = {{width: "100%"}}redSchema type="submit">
              CONFIRMAR
            </Button>
          </form>
        </Modal>
        </Content>


        <Link to="/signin" className="logout" onClick={logout}>
          <TiArrowBackOutline />
        </Link>
      </Container>
    );
  }
}
export default Dashboard;
