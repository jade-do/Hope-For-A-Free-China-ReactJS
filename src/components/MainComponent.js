import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import CommentDetails from './CommentDetailsComponent';
import HumanRightsAbuse from './HumanRightsAbuseComponent';
import Contact from './ContactComponent';
import { ARTICLES } from '../shared/articles';
import { COMMENTS } from '../shared/comments';
import { HUMANRIGHTSMEDIA } from '../shared/humanrightsmedia';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: ARTICLES,
            comments: COMMENTS,
            humanRightsMedia: HUMANRIGHTSMEDIA
        };
    }

    onArticleSelect(articleId){
        this.setState({selectedArticleId: articleId});
    }


    render() {
        const HomePage = () => {
            return(
                <Home
                    articles={this.state.articles.filter((article) => article.category === "on-communism")}/>
            )
        }

        const CommunismInUSAcademiaPage = () => {
            return (
                <CommunismInUSAcademia
                    articles = {this.state.articles.filter((article) => article.category === 'communism-in-us-academia')}
                />
            )
        }

        const CommentDetailsPage = ({match}) => {
            return (
                <CommentDetails selectedArticle={this.state.articles.filter((article) => article.id === parseInt(match.params.articleId, 10))[0]}
                    comments={this.state.comments.filter((comment) => comment.articleId == parseInt(match.params.articleId,10))}></CommentDetails>
            )
        }

        const HumanRightsAbusePage = () => {
            return (
                <HumanRightsAbuse
                    mediaList={this.state.humanRightsMedia}
                    article={this.state.articles.filter((article) => article.category === 'human-rights-abuse' )[0]}>
                </HumanRightsAbuse>
            )
        }
        return (
            <div>
                <Header/>
                <Switch>
                    <Route path="/home" component={HomePage}/>
                    <Route exact path="/communism-in-us-academia" component={CommunismInUSAcademiaPage}></Route>
                    <Route path="/communism-in-us-academia/:articleId" component={CommentDetailsPage}/>
                    <Route exact path="/human-rights-abuse" component ={HumanRightsAbusePage}/>
                    <Route exact path="/contact-us" component={() => <Contact></Contact>}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default Main;