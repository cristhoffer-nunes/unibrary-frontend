import ListItem from './ListItem';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import '../../App.css';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import { history } from '../../history';

const url = `http://localhost:8080/v1/api/acervo`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #ccc;
  padding: 10px;
`;
 
function Acervo() {
  const [books, setBooks] = useState([]);
 
  useEffect(() => {
    axios.get(url).then(response => {
      setBooks(response.data);
    })
  }, []);

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

export default Acervo;