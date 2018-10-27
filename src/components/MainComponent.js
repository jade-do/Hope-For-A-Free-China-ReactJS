import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import CommentDetails from './CommentDetailsComponent';
import HumanRightsAbuse from './HumanRightsAbuseComponent';
import Contact from './ContactComponent';
import { addComment } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
      articles: state.articles,
      comments: state.comments,
      humanRightsMedia: state.humanRightsMedia
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (articleId, rating, author, comment) => dispatch(addComment(articleId, rating, author, comment))
});

class Main extends Component {
    constructor(props) {
        super(props);
    }

    onArticleSelect(articleId){
        this.setState({selectedArticleId: articleId});
    }


    render() {
        const HomePage = () => {
            return(
                <Home
                    articles={this.props.articles.filter((article) => article.category === "on-communism")}/>
            )
        }

        const CommunismInUSAcademiaPage = () => {
            return (
                <CommunismInUSAcademia
                    articles = {this.props.articles.filter((article) => article.category === 'communism-in-us-academia')}
                />
            )
        }

        const CommentDetailsPage = ({match}) => {
            return (
                <CommentDetails selectedArticle={this.props.articles.filter((article) => article.id === parseInt(match.params.articleId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.articleId == parseInt(match.params.articleId,10))}
                    addComment={this.props.addComment}></CommentDetails>
            )
        }

        const HumanRightsAbusePage = () => {
            return ( 
                <HumanRightsAbuse
                    mediaList={this.props.humanRightsMedia}
                    article={this.props.articles.filter((article) => article.category === 'human-rights-abuse' )[0]}>
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

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
