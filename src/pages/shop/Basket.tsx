import React, { Component, Fragment } from 'react';
import { ListGroup } from 'react-bootstrap';
import axios from "../../axios";
import IOrder from '../../models/IOrder';

class Basket extends Component<{}, IOrder[]>{

    async componentDidMount(){
        const response = await axios.get("/orders");
    }

    render() {
        return (
            <Fragment>
                <ListGroup>
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                    <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Fragment>
        );
    }
}