import React, { Component, Fragment } from 'react';
import axios from "../../axios";
import IProduct from '../../models/IProduct';


class ListProduct extends Component<{}, IProduct > {



    async componentDidMount() {
        let response = await axios.get('/products');
        
        this.setState({
            email: response.data.email,
            name: response.data.name
        });
    }

    render(){
        return (
            <Fragment>
                
            </Fragment>
        );
    }
}