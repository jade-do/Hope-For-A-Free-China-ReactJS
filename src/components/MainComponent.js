import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import { ARTICLES } from '../shared/articles';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
        };
    }

    render() {
        const HomePage = () => {
            return(
                <Home/>
            )
        }
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <CommunismInUSAcademia articles={this.state.articles}></CommunismInUSAcademia>
                <Footer/>
            </div>
        )
    }
}

export default Main;