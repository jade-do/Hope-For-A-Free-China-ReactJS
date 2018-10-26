import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import CommentDetails from './CommentDetailsComponent';
import Contact from './ContactComponent';
import { ARTICLES } from '../shared/articles';
import { COMMENTS } from '../shared/comments';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
            comments: COMMENTS,
            selectedArticleId: null
        };
    }

    onArticleSelect(articleId){
        this.setState({selectedArticleId: articleId});
    }


    render() {
        const HomePage = () => {
            return(
                <Home
                    articles={this.state.articles.filter((article) => article.category === "on-communism")}
                    onClick ={(articleId) => this.onArticleSelect(articleId)}/>
            )
        }

        const CommunismInUSAcademiaPage = () => {
            return (
                <CommunismInUSAcademia
                    articles = {this.state.articles.filter((article) => article.label === 'communism-in-us-academia')}
                />
            )
        }
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exactpath="/communism-in-us-academia" component={CommunismInUSAcademiaPage}></Route>
                    <Route exactpath="/contactus" component={Contact}/>
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