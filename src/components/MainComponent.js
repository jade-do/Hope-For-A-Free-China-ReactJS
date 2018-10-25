import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
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
                <Header/>
                <CommunismInUSAcademia articles={this.state.articles}></CommunismInUSAcademia>
                <Footer/>
            </div>
        )
    }
}

export default Main;