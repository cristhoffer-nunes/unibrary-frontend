import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import { Link } from 'react-router-dom';


function login (){
  return(
  <Container>
    <div>
    <form>
      <label>
        Número de Matrícula:
        <input type="text" name="num" required/>
      </label>
      <label>
        Senha:
        <input type="password" name="senha" required/>
      </label>
    </form>
      <Link to='/reserva' className="botn btn1">Log in</Link>
    </div>
  </Container>  
  )   
}

export default login;