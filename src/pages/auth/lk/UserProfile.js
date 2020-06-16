import React, { Component } from 'react';
import axios from '../../../axios';
import { Link, Route, NavLink, Switch, Router } from 'react-router-dom'
import UserInf from './General/UserInf';
import Orders from './Orders/Orders';

class UserProfile extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("loaded")

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-3 position-fixed left-slider" id="sticky-sidebar">
                        <ul className="list-group list-group-flush">
                            <NavLink exact to={`/profile`} className="list-group-item list-group-item-action" value="Вся продукция" >Общее</NavLink>
                            {/* style={{ marginRight: "0px" }} */}
                            <NavLink to={`/profile/orders`} className="list-group-item list-group-item-action" >Заказы</NavLink>
                            <Link className="list-group-item list-group-item-action" >Выход</Link>
                        </ul>
                    </div>
                    <div className="col offset-3 grid" id="main">
                        <div className="container">
                            {/* <Route
                                exact
                                path="/profile"
                                render={({ match: { url } }) => (
                                    <>
                                        <Route path={`${url}/`} component={Orders} exact />
                                        <Route path={`${url}/orders`} component={UserInf} exact />
                                    </>
                                )}
                            /> */}
                            <Route  path="/profile/orders" component={Orders} exact/>

                            <Route  path="/profile" component={UserInf} exact/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default UserProfile;