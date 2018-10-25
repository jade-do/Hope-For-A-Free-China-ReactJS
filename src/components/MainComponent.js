import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import { ARTICLES } from '../shared/articles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
        };
    }

    render() {
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">China UnderWatch</NavbarBrand>
                    </div>
                </Navbar>
                <CommunismInUSAcademia articles={this.state.articles}></CommunismInUSAcademia>
            </div>
        )
    }
}

export default Main;