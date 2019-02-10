import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import PropTypes from 'prop-types';

class ConfirmDialog extends React.Component {
    constructor(props) {
        super(props);

        this.handleConfirm = this.handleConfirm.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            show: false
        };
    }

    componentWillMount() {
        this.setState({
            show: this.props.show
        });
    }

    handleConfirm() {
        this.props.onConfirm();
        this.handleClose();
    }

    handleClose() {
        if (this.props.onDismiss) {
            this.props.onDismiss();
        }
        this.setState({
            show: false
        });
    }

    handleShow() {
        this.setState({
            show: true
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.show !== this.props.show) {
            this.setState({
                show: this.props.show
            });
        }
    }

    render() {
        return (
            <div>
                <div className="static-modal">
                    <Modal show={this.state.show} onHide={this.handleClose}>
                        <Modal.Header closeButton style={{ background: "#C4141C", color: "#FFFFFF" }}>
                            <Modal.Title>Confirm</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{
                            background: "#EEEEEE"
                        }} >
                            <div className="panel panel-default">
                                <div className="panel-body">
                                    <p>{this.props.message}</p>
                                </div></div>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={this.handleClose}>Cancel</Button>
                            <Button id="confirmButton" bsStyle="danger" onClick={this.handleConfirm}>{this.props.confirmText}</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        );
    }
}

ConfirmDialog.propTypes = {
    confirmText: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired
}

export default ConfirmDialog
