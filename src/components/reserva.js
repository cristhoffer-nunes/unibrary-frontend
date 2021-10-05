import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';

function reserva (props){

    return(
        <Container className="body">

        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
            <Nav>
            <div className="nav-list">
              <h2>Unibrary</h2>
              <Link to="./home" className="li">Início</Link>
              <Link to="./acervo" className="li">Acervo</Link>
              <Link to="./reserva" className="li">Reserva</Link>
              <Link to="./contato" className="li">Contato</Link>
              <Link to="./login" className="botn btn1">Sair</Link>
            </div>
            </Nav>
            </Container>
          </Navbar>
        </div>

        </Container>
    )
}

export default reserva;