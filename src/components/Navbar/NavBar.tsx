import React, { Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'
import IAuth from "../../models/props/IAuth";

export default (props:IAuth) => {
    return (
        <Fragment>
                <div className="sticky-top" style={{ backgroundColor: "white", boxShadow: "0 2px 8px black", width: "100%" }}>

                    <nav className="navbar navbar-expand-lg navbar-ligth">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation" style={{ outline: "none" }}>
                            <FontAwesomeIcon icon={faBars} style={{ color: "blue" }} />
                        </button>
                        {/* <Link className="navbar-brand" to="/"><img src={Logo} style={{ height: "4rem" }} alt="Logo" /></Link> */}

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/'>Главная</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to='/courses'>Курсы</NavLink>
                                </li>
                                <li>
                                    <NavLink className="nav-link" to='/blogs'>Блоги</NavLink>
                                </li>
                            </ul>
                            <ul className="navbar-nav ml-auto">
                                {/* <form className="form-inline my-2 my-lg-0">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.search} onChange={this.searchEdit.bind(this)} />
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.searchProducts.bind(this)}>Search</button>
                                </form> */}
                                {props.isAuth && <NavLink className="btn btn-link" to="/basket"><FontAwesomeIcon icon={faShoppingCart} style={{ color: "blue" }} /></NavLink>}
                                {props.isAuth && <NavLink className="btn btn-link" to="/profile"><FontAwesomeIcon icon={faUserCircle} style={{ color: "blue" }} /></NavLink>}
                                {props.isAuth || <NavLink to="/auth/signup" className="btn btn-outline-primary nav-link mx-2">Регистрация</NavLink>}
                                {props.isAuth || <NavLink to="/auth/login" className="btn btn-outline-primary nav-link">Войти</NavLink>}
                                {props.isAuth && <NavLink to="/" className="btn btn-outline-primary nav-link mx-2" onClick={props.logout}>Выйти</NavLink>}
                            </ul>
                        </div>

                    </nav>
                </div>
        </Fragment>
    );
}