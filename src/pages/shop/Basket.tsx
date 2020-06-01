import React, { Component, Fragment } from 'react';
import axios from "../../axios";
import IOrder from '../../models/IOrder';

class Basket extends Component<{}, IOrder[]>{

    async componentDidMount(){
        const response = await axios.get("/orders");
    }

    render() {
        return (
            <Fragment>
                
            </Fragment>
        );
    }
}