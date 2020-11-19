import React, { Component } from 'react';
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
import './Basket.css';
import { RSA_NO_PADDING } from 'constants';

class Basket extends Component {
    state = {
        elements: [

        ]
    }

    // {
    //     id:'',
    //     name:'',
    //     price:'',
    //     count:''
    // }

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios.get(this.props.match.url, { params: { userId: localStorage.getItem('userId') } }).then(res => {
            if (res.status === 401) {

            }

            if (res.status === 404) {

            }

            if (res.status === 200) {

            }
        })
    }

    //     <section>
    //     <h1>heading</h1>

    //     <ul>
    //         <li>list item </li>
    //         <li>list item </li>
    //         <li>list item </li>
    //     </ul>
    // </section>

    prepareData = () => {
        let elements = [];
        this.state.elements.forEach(item => {
            elements.push((<li>
                <section>
                    <h1>{'Название: ' + item.name}</h1>
                    <ul>
                        <li>{'Количество: ' + item.name}</li>
                        <li>{'Общая сумма: ' + item.name}</li>
                    </ul>
                </section>
            </li>))
        })
        return elements;
    }

    makeOrder = (event) => {
        event.preventDefault();

        axios.put(this.props.match, {
            userId: localStorage.getItem('userId')
        }).then(res => {
            if (res.status === 404) {

            }
            if (res.status === 401) {

            }
            if (res.status === 500) {

            }
            if (res.status === 201) {

            }
            return res;
        }).then(res => {
            localStorage.removeItem('backet');
            localStorage.removeItem('cleanBacket');
            this.props.history.redirect('/profile/orders');
        }).catch(err => {

        });
    }

    addProduct = () =>{

    }

    removeProduct = () =>{
        
    }

    listOfOrders() {
        let mas = [];

        for (let i = 0; i < 15; i++) {
            mas.push((
                <li className="list-group-item">
                    <div className="row">
                        <div className="col-md-4 mx-righ">
                            <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg" alt="Product" className="img-fluid"
                                style={{ maxHeight: "120px" }} />
                        </div>

                        <div className="col-7 my-auto">
                            {"некоторое описание продукта"}
                        </div>

                        <div className="col-1 d-flex align-content-around flex-wrap ">
                            <div className="row">
                                <span className="badge badge-primary badge-pill">count {"12"}</span>
                            </div>

                            <div className="row">
                                <button className="btn btn-outline-primary mr-1" value="index">
                                    +
                        </button>

                                <button className="btn btn-outline-primary" value="index">
                                    -
                        </button>
                            </div>
                        </div>
                    </div>
                </li>
            ))
        }

        return mas;
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col" id="main">
                        <div className="container my-3">
                            <ul className="list-group">
                                {this.listOfOrders()}
                            </ul>
                        </div>
                    </div>
                    <div className="offset-3"></div>
                    <div className="col-3 position-fixed offset-9 right-slider" id="sticky-sidebar" style={{ padding: "0px" }}>
                        <div className="container my-5">
                            <ul>
                                {this.prepareData()}
                            </ul>
                            <form action="makeOrder/" method="post">
                                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                                <input type="submit" value="Заказать" className="btn btn-outline-primary" />
                            </form>
                        </div>
                    </div>
                </div>

                <ul>
                    
                    </ul>
                {/* 

                <div className="container mt-5">
                    
                </div> */}
                {/* <!-- <h1 className="display-4 m-3">Цена: </h1> --> */}
            </div>
        );
    }
}

export default Basket;