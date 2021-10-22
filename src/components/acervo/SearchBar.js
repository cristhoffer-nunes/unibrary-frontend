import React, { useState } from 'react';
import styled from 'styled-components';
import { InputGroup, FormControl, Button, Form, Col } from 'react-bootstrap';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import axios from 'axios';
const url = `https://unibrary.herokuapp.com/v1/api/acervo`;


const SearchHeader = styled.div`
    margin-top: 4px;
`;

function SearchBar(props) {

    const [search, setSearch] = useState('');
    
    async function handleOnSubmit(event) {
            event.preventDefault();
            const books = await axios.get(url).then(response => response.data);
            console.log(books)
                const results = books.filter(book => book.titulo.toLowerCase().indexOf(search) !== -1);
                props.setBooks(results)
            
            
        }

        function handleSearchChange(event) {
            setSearch(event.target.value.toLowerCase());
        }

    return (

        <SearchHeader>
            <Form onSubmit={handleOnSubmit}>
                <Form.Row>
                    <Col className="col-xl-3">
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Insira seu livro aqui!"
                                onChange={handleSearchChange}
                            />
                            <InputGroup.Append>
                                <Button type="submit">
                                    <FontAwesomeIcon icon={faSearch} />
                                </Button>
                            </InputGroup.Append>
                        </InputGroup>
                    </Col>
                </Form.Row>
            </Form>
        </SearchHeader>
    );
    
}

export default SearchBar;