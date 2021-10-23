import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../App.css';
import Foto1 from '../img/Chapeu.png'
import Smile from '../img/smile.png'
import Book from '../img/book.png'
import { history } from '../history'

function home (){

  const handleClick = () => {

    localStorage.removeItem('app-token')
    history.push('/login')
    window.location.reload()
  }

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
              <button className="botn btn1" onClick={handleClick}>Sair</button>
              </div>
            </Nav>
            </header>
          </Navbar>
        </div>
 
        <div className="container-central">
          <h1>A biblioteca do estudante</h1>
          <p>Livros perfeitos para o universitário que visa aprender mais em apenas uma plataforma.</p>
          <img src={Foto1} className="foto1" alt=""></img>
        </div>

        <div className="cards-info">
          <div className="container-card">
            <div className="cards">

              <div className="card1">
                <img src={Smile} className="foto2" alt=""></img>
                <h2 className="heading-2">Estudantes</h2>
                <p className="paragraph-2">Somos uma biblioteca física com sistema digital. Temos como objetivo disponibilizar livros acadêmicos para estudantes universitários.</p>
              </div>

              <div className="card1">
                <img src={Book} className="foto2" alt=""></img>
                <h2 className="heading-2">Livros</h2>
                <p className="paragraph-2">Nossa biblioteca possui mais de 20 editoras parceiras, contendo uma infinidade de livros diponíveis para o seu aprendizado.</p>
              </div>

            </div>
          </div>
        </div>

        <div className="rodape">
          <div>
            <div className="texto-rodape">© Copyright Unibrary</div>
          </div>
        </div>
        </Container>
    )
}

export default home;