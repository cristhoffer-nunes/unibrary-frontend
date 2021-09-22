import React from 'react';
import styled from 'styled-components';

const ItemContainer = styled.div`
    border-radius: 10px;
    background-color: #1d1d1d;
    height: 180px;
    width: 350px;
    color: #fff;
    margin-bottom: 5px;
    padding: 30px;
    
`;

const TitlePane = styled.div`
    font-weight: bold;
    font-size: 18px;
    width: 300px;
    overflow-x: auto;
    max-width: 100%;
`;

const AuthorPane = styled.div`
    text-align: left;
    margin-bottom: 20px;
`;

const EditorsPane = styled.div`
    text-align: left;
    text-transform: uppercase;
    font-weight: bolder;
`;

const YearPane = styled.div`
    text-align: left;
`;

const CategoriePane = styled.div`
    text-align: left;
`;

const PagesPane = styled.div`
    text-align: center;
`;

const BooksPane = styled.div`
    text-align: center;
`;

const AvailablePane = styled.div`
    text-align: center;
`;

const CodePane = styled.div`
    text-align: center;
`;

function ListItem(props) {
    return (
            <ItemContainer>
                <TitlePane>{props.titulo}</TitlePane>
                <AuthorPane>{props.autor}</AuthorPane>
                <EditorsPane>{props.editora}</EditorsPane>
                <YearPane>{props.ano}</YearPane>
                <CategoriePane>{props.categoria}</CategoriePane>
                <PagesPane>{props.qtd_paginas}</PagesPane>
                <BooksPane>{props.qtd_obras}</BooksPane>
                <AvailablePane>{props.disponibilidade}</AvailablePane>
                <CodePane>{props.codigo_obra}</CodePane>
            </ItemContainer>
    );
}

export default ListItem;