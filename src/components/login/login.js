import React from 'react';
import { Container } from 'react-bootstrap';
import '../../App.css';
import imgLogin from '../../img/imgLogin.png'



function login (){

        return(
        <Container className="corpo">

            <div className="container-login">

            <img src={imgLogin} className="foto-login"></img>

            <div className="form">
                <div className="titulo-form">
                    LOGIN
                </div>
                <form>
                <label>
                    <div className="input-txt">Número de Matrícula:</div>
                    <input type="text" name="num" className="input-dado" required/>
                </label>
                <label>
                    <div className="input-txt">Senha:</div>
                    <input type="password" name="senha" className="input-dado" required/>
                </label>
                <button type="submit" className="botn btn2">Entrar</button>
                </form>
            </div>
            </div>
        </Container>  
        )  
}

export default login;