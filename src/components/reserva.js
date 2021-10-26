import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { Alert, Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { history } from '../history';


const reserva = () => {
    const handleSubmit = (values) => {
        axios.post("http://localhost:8080/v1/api/reserva", {
            numeroMatricula: values.numeroMatricula,
            obra: values.obra,
        }).then((response) => {
         Alert('Reserva feita com sucesso!')
         window.location.reload()
      }).catch((reject) => {
        Alert('Não é possível fazer mais de 2 reservas!')
        window.location.reload()
      })
    };

    const handleClick = () => {
  
      localStorage.removeItem('app-token')
      history.push('/login')
      window.location.reload()
    }


    return (

      <Container className="body">

        <div className="navbar">
          <Navbar bg="primary" variant="dark">
          <header>
            <Nav>
              <div className="nav-list">
              <h2>Unibrary</h2>
              <Link to="./home" className="li">Início</Link>
              <Link to="./acervo" className="li">Acervo</Link>
              <Link to="./reserva" className="li">Reserva</Link>
              <Link to="./contato" className="li">Contato</Link>
              <button className="botn btn1" onClick={handleClick}>Sair</button>
              </div>
            </Nav>
            </header>
          </Navbar>
        </div>



        
            <Formik initialValues={ {} || ''} onSubmit={handleSubmit}>

                <Form>
                    <div>
                        LOGIN
                    </div>
                    <label>
                        <div>Número de Matrícula:</div>
                        <Field name="numeroMatricula"/>
                    </label>
                    <label>
                        <div>Código da Obra:</div>
                        <Field name="obra" type="text"  />
                    </label>
                    <button type="submit">Reservar</button>
                </Form>
            </Formik>           
        </Container>
    )
}

export default reserva