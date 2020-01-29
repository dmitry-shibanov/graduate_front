import React, { Fragment } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

export default () => {

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Значок компании</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Главная</Nav.Link>
                    <Nav.Link href="#features">Товары</Nav.Link>
                    <Nav.Link href="#pricing">Блоги</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" className="mr-2">Search</Button>
                </Form>
                <Button className="mr-sm-2">Регистрация</Button>
                <Button className="mr-sm-2">Войти</Button>
            </Navbar>
        </Fragment>
    );
}