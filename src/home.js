import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './App.css';
import Uni from "./Uni.png"

function home (){
    return(
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
              <Link to="./login" className="botn btn1">Login</Link>
              </div>
            </Nav>
            </header>
          </Navbar>
        </div>
        <img src={Uni} alt=""/>
        </Container>
    )
}

export default home;