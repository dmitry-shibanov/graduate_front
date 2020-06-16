import React, { Component } from 'react';
import { faUnlockAlt, faUserCircle, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class UserInf extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('loaded user inf')
    }


    render() {
        return (
            <form action="login/" method="post">
                <h3 className="h3 text-center my-4">Профиль</h3>

                <div className="form-group">

                    <div className="input-group my-4">

                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faUserCircle} />
                            </span>
                        </div>
                        <input type="text" name="email" id="user-login" className="form-control" placeholder="логин" />
                    </div>

                    <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faPaperPlane} />
                            </span>
                        </div>
                        <input type="email" name="email" id="mail" className="form-control" placeholder="почта" />
                    </div>

                    <div className="input-group mt-4">
                        <div className="input-group-prepend">
                            <span className="input-group-text">
                                <FontAwesomeIcon icon={faUnlockAlt} />
                            </span>
                        </div>
                        <input type="password" name="password" id="" className="form-control" placeholder="пароль" />
                    </div>

                </div>
                <input type="hidden" name="_csrf" value="<%= csrfToken %>" />
                <input type="submit" className="btn btn-info btn-block mx-auto" value="Сохранить" style={{ width: "30%" }} />
            </form>
        );
    }
}

export default UserInf;