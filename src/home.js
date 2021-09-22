import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import home from './home';

function inicio (){
    return(
        <Container>
        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
            <Nav>
              <h2>Unibrary</h2>
              <Nav.Link to="./home.js">Início</Nav.Link>
              <Nav.Link to="./App.js">Catálogo</Nav.Link>
              <Nav.Link to="#reserva">Reserva</Nav.Link>
              <Nav.Link to="#contato">Contato</Nav.Link>
              <Nav.Link to="#login">Login</Nav.Link>
            </Nav>
            </Container>
          </Navbar>
        </div>
        <h1>home</h1>
        </Container>
    )
}

export default inicio;