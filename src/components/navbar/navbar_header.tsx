import React, { Fragment } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

export default () => {

    return (
        <Fragment>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Значок компании</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link><NavLink to="/" exact>Главная</NavLink></Nav.Link>
                    <NavLink to="/products" activeClassName="active"><Nav.Link>Товары</Nav.Link></NavLink>
                    <Nav.Link href="#pricing">Блоги</Nav.Link>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info" className="mr-2">Search</Button>
                </Form>
                <Link to="/auth/signup"><Button className="mr-sm-2">Регистрация</Button></Link>
                <Link to="/auth/login"><Button className="mr-sm-2">Войти</Button></Link>
            </Navbar>
        </Fragment>
    );
}