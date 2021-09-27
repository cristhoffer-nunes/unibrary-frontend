import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './App.css';

function reserva (props){

    const handleLogout = () => {    
        props.history.push('/login');
      }

    return(
        <Container className="body">

        <div>
          <Navbar bg="primary" variant="dark">
            <Container>
            <Nav>
            <div className="nav-list">
              <h2>Unibrary</h2>
              <Link to="./home" className="li">Início</Link>
              <Link to="./App" className="li">Acervo</Link>
              <Link to="./reserva" className="li">Reserva</Link><small>(Access without token only)</small>
              <Link to="./contato" className="li">Contato</Link><small>(Access without token only)</small>
              <Link to="./login" className="botn btn1">Login</Link>
            </div>
            </Nav>
            </Container>
          </Navbar>
        </div>

        <input type="button" onClick={handleLogout} value="Logout" />

        </Container>
    )
}

export default reserva;