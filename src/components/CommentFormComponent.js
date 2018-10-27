import React, {Component} from 'react';
import {Col, Row, Label, Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import {Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length) <= len;
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {

    constructor(props){
        super(props);
        this.state={
            isModalOpen: false
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }

    handleSubmit(values){
        alert(JSON.stringify(values));
        this.props.addComment(this.props.articleId, values.rating, values.author, values.comment);
        this.toggleModal();
    }

    render() {
        return(
            <React.Fragment>
            <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-lg"></span> Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal}>Comments</ModalHeader>
                <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                    <Row className="form-group">
                        <Col md={{size:12}}>
                        <Label htmlFor="rating">Rating</Label>
                        <Control.select model=".rating" id="rating" name="rating"
                        className="form-control">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Control.select>
                        </Col>
                    </Row>
                    <Row className="form-group">
                    <Col md={{size:12}}>

                        <Label htmlFor="name">Your name</Label>
                        <Control.text model=".author" id="author" name="author"
                        placeholder = "Your Name"
                        className="form-control"
                        validators={{required, maxLength: maxLength(15), minLength: minLength(3)}}/>
                    <Errors
                        className="text-danger"
                        model=".author"
                        show="touched"
                        messages={{
                            required: 'Required',
                            minLength: 'Must be greater than 3 characters',
                            maxLength:'Must be 15 characters or less'
                        }}>
                    </Errors>
                    </Col>

                    </Row>
                    <Row className="form-group">
                    <Col md={{size:12}}>

                        <Label htmlFor="comment">Comments</Label>
                        <Control.textarea model=".comment" id="comment" name="comment"
                        rows="6"
                        className="form-control"/>
                    </Col>
                    </Row>
                    <Row className="form-group">
                    <Col md={{size:2}}>
                        <Button type="submit" color="primary">
                            Submit!
                        </Button>
                    </Col>
                    </Row>
                </LocalForm>
                </ModalBody>
            </Modal>
            </React.Fragment>
        )
    }
}

export default CommentForm;