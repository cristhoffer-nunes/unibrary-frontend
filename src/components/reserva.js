import React from 'react'
import { Formik, Form, Field } from 'formik'
import axios from 'axios'
import { Container } from 'react-bootstrap';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { history } from '../history';


const reserva = () => {
    const handleSubmit = (values) => {
        axios.post("https://unibrary.herokuapp.com/v1/api/reserva", {
            numeroMatricula: values.numeroMatricula,
            obra: values.obra,
        }).then((response) => {
          alert('Reserva feita.')
         window.location.reload()
      }).catch((reject) => {
        alert('Não é possivel fazer mais de 2 reservas.')
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
                        RESERVA
                    </div>
                    <label >
                        <div className="heading-reserva">Número de Matrícula:</div>
                        <Field name="numeroMatricula" className="field-reserva"/>
                    </label>
                    <label >
                        <div className="heading-reserva">Código da Obra:</div>
                        <Field name="obra" type="text"  className="field-reserva"/>
                    </label>
                    <button type="submit">Reservar</button>
                </Form>
            </Formik>  
            <footer className="footer">
              &copy;Unibrary 2021
            </footer>         
        </Container>
    )
}

export default reserva