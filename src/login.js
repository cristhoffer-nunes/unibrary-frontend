import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './App.css';

function login (){
    return(
        <Container className="body">

              <Link to="./home" className="botn btn1">Login</Link>
     
        </Container>
    )
}

export default login;