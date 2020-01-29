import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

class ErrorComponent extends Component{
    render(){
        return (
            <Container>
                <h1>Ой ой что-то пошло не так</h1>
            </Container>
        )
    }
}