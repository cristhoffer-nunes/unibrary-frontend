import React from 'react'

import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { history } from '../../history'

import { Container } from 'react-bootstrap';
import '../../App.css';
import { Link } from 'react-router-dom';
import imgLogin from '../../img/imgLogin.png'



const Login = () => {
    const handleSubmit = (values) => {
        axios.post("https://unibrary.herokuapp.com/v1/api/auth", {
            numeroMatricula: values.numeroMatricula,
            senha: values.senha,
        }).then((response) => {
            if (response.status === 200) {
                const { data } = response
                if (data) {
                    localStorage.setItem('app-token', data.result)
                    history.push('/home')   
                    window.location.reload()            
                }
            }
        }).catch((reject) => {
            alert("Dados invalidos ou usuário inativo.")
            history.push('/login')
            window.location.reload()
        })
    };


    return (
        <Container className="corpo">
            <div className="container-login">
            <img src={imgLogin} className="foto-login" alt="library"></img>
            <div className="form">
            <Formik initialValues={ {} || ''} onSubmit={handleSubmit}>

                <Form>
                    <div className="titulo-form">
                        LOGIN
                    </div>
                    <label>
                        <div className="input-txt">Número de Matrícula:</div>
                        <Field name="numeroMatricula" className="input-dado" />
                    </label>
                    <label>
                        <div className="input-txt">Senha:</div>
                        <Field name="senha" type="password" className="input-dado" />
                    </label>
                    <button type="submit" className="botn btn2">Entrar</button>
                </Form>
            </Formik>

            </div>
            </div>
        </Container>
    )
}

export default Login