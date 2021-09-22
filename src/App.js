import ListItem from './components/ListItem';
import { Container, Nav } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar'
import { getBooks } from './services/BooksService';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './components/SearchBar';
import './App.css';


const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 10px;
`;
 
function App() {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    setBooks(getBooks());
  }, [])

  return (
    <Container className="body">

        <div className="navbar">
          <Navbar bg="primary" variant="dark">
            <header>
            <Nav>
              <div className="nav-list">
                <h2>Unibrary</h2>

                <Nav.Link to="/home.js" className="li">Início</Nav.Link>
                <Nav.Link to="./App.js" className="li">Acervo</Nav.Link>
                <Nav.Link to="#reserva" className="li">Reserva</Nav.Link>
                <Nav.Link to="#contato" className="li">Contato</Nav.Link>
                <Nav.Link to="#login" className="botn btn1">Login</Nav.Link>
              </div>
            </Nav>
            </header>
          </Navbar>
        </div>
        
      <SearchBar setBooks={setBooks} className="barra"/>

     <ListContainer>
      {books.map(book => {
        return (
          <ListItem
            titulo={book.titulo}
            autor={book.autor}
            editora={book.editora}
            ano={book.ano}
            categoria={book.categoria}
            paginas={book.qtd_paginas}
            obras={book.qtd_obras}
            disponibilidade={book.disponibilidade}
            codigo={book.codigo_obra}
          />
        )
      })}
      </ListContainer>
      <footer className="footer">
        &copy;Unibrary 2021
      </footer>
    </Container>
  );
}

export default App;