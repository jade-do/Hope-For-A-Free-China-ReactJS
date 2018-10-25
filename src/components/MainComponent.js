import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import CommentDetails from './CommentDetailsComponent';
import { ARTICLES } from '../shared/articles';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
            selectedArticleId: null
        };
    }

    onArticleSelect(articleId){
        this.setState({selectedArticleId: articleId});
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
                <CommunismInUSAcademia articles={this.state.articles}
                    onClick={(articleId) => this.onArticleSelect(articleId)}></CommunismInUSAcademia>
                <CommentDetails selectedArticle={this.state.articles.filter((article) => article.id == this.state.selectedArticleId)[0]}></CommentDetails>      
                <Footer/>
            </div>
        )
    }
}

export default Main;