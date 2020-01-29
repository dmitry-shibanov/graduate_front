import React, { Fragment } from "react"
import { Modal, Button } from "react-bootstrap";

export default () => {
    return (
        <Fragment>
            <Modal.Footer>
                <Button variant="secondary" >
                    Close
          </Button>
                <Button variant="primary" >
                    Save Changes
          </Button>
            </Modal.Footer>
        </Fragment>
    );
}