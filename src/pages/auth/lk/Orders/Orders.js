import React, { Component } from 'react';
import axios from 'axios';

class Orders extends Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: {}
        }
    }

    componentDidMount() {
        // console.log("loaded");
        // axios.get(this.props.match.url,{
        //     params:{
        //         userId: localStorage.getItem('userId')
        //     }
        // }).then(res=>{
        //     console.log(res)
        //     // this.setState({orders:res})
        // }).catch(err=>{

        // })

    }


    seeOrders(){

        let mas = new Array(12);
        for (let i = 0; i < 12; i++) {
            mas.push((
                <li className="list-group-item list-group-item-action">
                    <div className="row">

                        <div className="col-4 ">
                            <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg" alt="Responsive" className="img-fluid"
                                style={{ maxHeight: "120px" }} />
                        </div>
                        <div className="col d-flex align-content-around flex-wrap" >
                            <div className="row" style={{ width: "100%" }}>
                                <p>Количество 123</p>
                            </div>
                            <div className="row" style={{ width: "100%" }}>
                                <p>Цена 12312312</p>
                            </div>
                        </div>
                    </div>
                </li>
            ));
        }
        this.setState({orders:{
            firstOrder:mas
        }})
    }

    itemsOfOrder() {

        let mas = new Array(12);
        for (let i = 0; i < 12; i++) {
            console.log('came')
            mas.push((
                <li className="list-group-item list-group-item-action">
                    <div className="row">

                        <div className="col-4 ">
                            <img src="https://cdn.pixabay.com/photo/2019/07/28/18/43/mountains-4369251_960_720.jpg" alt="Responsive" className="img-fluid"
                                style={{ maxHeight: "120px" }} />
                        </div>
                        <div className="col d-flex align-content-around flex-wrap" >
                            <div className="row" style={{ width: "100%" }}>
                                <p>Количество 123</p>
                            </div>
                            <div className="row" style={{ width: "100%" }}>
                                <p>Цена 12312312</p>
                            </div>
                        </div>
                    </div>
                </li>
            ));
        }
        return mas;
    }

    render() {
        return (
            // <h1>Work</h1>
            <div className="container my-5">
                <div id="accordion" onClick={this.seeOrders.bind(this)}>
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link" data-toggle="collapse" data-target="#collapseOne"
                                    aria-expanded="true" aria-controls="collapseOne">
                                    Заказ номер №373719731919
                                </button>
                            </h5>
                        </div>
                        {/* className="collapse show" */}
                        <div id="collapseOne" className="panel-collapse collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <ul className="list-group">
                                    {this.state.orders.firstOrder}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Orders;