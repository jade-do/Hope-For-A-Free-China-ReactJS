import React, { Component } from 'react';
import {  Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron,
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
          isNavOpen: false,
          isModalOpen: false
        };

        this.toggleModal = this.toggleModal.bind(this);
        this.toggleNav = this.toggleNav.bind(this);

    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event){
        this.toggleModal();
        alert("Username: " + this.username.value + " Password: " +  this.password.value + " Remember: " + this.remember.checked);
        event.preventDefault();
    }

  render() {
    return(
    <React.Fragment>
        <Navbar dark expand="md">
            <div className="container">
                <NavbarToggler onClick={this.toggleNav} />
                <NavbarBrand className="mr-auto" href="/"></NavbarBrand>
                <Collapse isOpen={this.state.isNavOpen} navbar>
                    <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/communism-in-us-academia'><span className="fa fa-star-half-full fa-lg"></span> Communism in US Academia</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/human-rights-abuse'><span className="fa fa-star-half-full fa-lg"></span> Human Rights Abuse</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contact-us'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <Button outline onClick={this.toggleModal}><span className="fa fa-sign-in fa-lg"></span> Login</Button>
                        </NavItem>
                    </Nav>
                </Collapse>                
            </div>
        </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>Hopes For A Free China</h1>
                       <p>We deliver news about China's violations of human rights domestically, as well as in the U.S.</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
       <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader isOpen={this.state.isModalOpen} toggle={this.toggleModal} >Login</ModalHeader>
            <ModalBody>
                <Form onSubmit={this.handleLogin}>
                    <FormGroup>
                        <Label htmlFor="username">Username</Label>
                        <Input type="text" id="username" name="username"
                            innerRef={(input) => this.username = input}/>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="password">Password</Label>  
                        <Input type="password" id="password" name="password"
                            innerRef={(input) => this.password = input}></Input>
                    </FormGroup>
                    <FormGroup check>
                        <Label check>
                        <Input type="checkbox" id="remember" name="remember"
                            innerRef={(input) => this.remember = input}></Input>Remember Me</Label>  
                        </FormGroup>
                        <Button type="submit" value="submit" color="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
    </React.Fragment>
    );
  }
}

export default Header;