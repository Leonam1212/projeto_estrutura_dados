import React, { Component, useState } from "react";
import { Container, Content } from "./style";
import Button from "../button/index";
import { TextField } from "@material-ui/core";
import Modal from "react-modal";
import api from "../../services/api";
import { toast } from "react-toastify";
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
    let subtitle;

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

    const onSubmitFunction = (data) => {
      // const newData = { name, contact, old_password, new_password};

      api
        .put(`/users/profile`, data, {
          headers: { Authorization: `Bearer ${this.state.token}` },
        })
        .then((_) => {
          toast.success("Sucesso ao criar a conta!");
          console.log(_);
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
              <span>Biografia</span>: {this.state.user.bio}
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
        </Content>

        <Modal
          isOpen={this.props.modalIsOpen}
          //   onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
          <h2>ATUALIZE SEUS DADOS</h2>
          {/* <button onClick={this.closeModal}>close</button> */}
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <div>
              <TextField
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
                label="Nova senha"
                margin="normal"
                variant="outlined"
                size="medium"
                color="primary"
                type="password"
                {...register("new_password")}
                error={!!errors.new_password}
                helperText={errors.new_password?.message}
              />
            </div>
            <Button redSchema type="submit">
              CONFIRMAR
            </Button>
          </form>
        </Modal>
      </Container>
    );
  }
}
export default Dashboard;
