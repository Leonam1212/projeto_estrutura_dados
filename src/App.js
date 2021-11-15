import React, { Component } from "react";
import Routes from "./routes/index";
import GlobalStyle from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify'
class App extends React.Component {
  render() {
    return (
      <>
        <GlobalStyle />
        <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        />
        <Routes />
      </>
    );
  }
}

export default App;
