import React, { Component, Fragment } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import MenuGeral from './components/Menu/Menu';
import { Container, Typography } from "@material-ui/core"
import 'fontsource-roboto';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <MenuGeral />
        <Typography variant="h3" component="h1" color="primary" align="center">Formulario de Cadastro</Typography>
        <FormularioCadastro aoEnviar={aoEnviarForm} validarCPF={validarCPF} />
      </Container>
    );
  }
}

function aoEnviarForm(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if(cpf.length !== 11) {
    return {valido:false, texto: "CPF deve ter 11 digitos."}
  } else {
    return {valido:true, texto:""}
  }
}

export default App;
