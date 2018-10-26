import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
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
                            <NavLink className="nav-link"  to='/technology-theft'><span className="fa fa-star-half-full fa-lg"></span> Technology Theft</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link"  to='/human-rights-abuse'><span className="fa fa-star-half-full fa-lg"></span> Human Rights Abuse</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/contact-us'><span className="fa fa-address-card fa-lg"></span> Contact Us</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>                
            </div>
        </Navbar>
      <Jumbotron>
           <div className="container">
               <div className="row row-header">
                   <div className="col-12 col-sm-6">
                       <h1>China Underwatch</h1>
                       <p>We deliver news about China's violations of human rights in the U.S.</p>
                   </div>
               </div>
           </div>
       </Jumbotron>
    </React.Fragment>
    );
  }
}

export default Header;