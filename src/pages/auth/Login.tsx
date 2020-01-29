import React, { Component, Fragment } from 'react';
import { Card, ListGroup, Form, FormControl, Button } from 'react-bootstrap';


export class Login extends Component {
    state = {

    }


    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {

    }

    componentDidMount() {

    }

    render() {
        return (
            <Fragment>
                <Card className="d-flex flex-wrap my-auto mx-auto col-6" style={{height: "50%"}}>
                    <Card.Header as="h5">Регистарция</Card.Header>
                    <Card.Body>
                            <Form inlist>
                                <FormControl type="txt" placeholder="Email" className="m-sm-2" />
                                <FormControl type="txt" placeholder="Login" className="m-sm-2" />
                                <FormControl type="txt" placeholder="Password" className="m-sm-2" />
                                <FormControl type="txt" placeholder="Confirm Password" className="m-sm-2" />
                                <Button variant="outline-info" className="ml-auto">Search</Button>
                            </Form>
                    </Card.Body>
                </Card>
            </Fragment>
        );
    }
}

export default Login;