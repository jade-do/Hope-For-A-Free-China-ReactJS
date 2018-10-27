import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import CommunismInUSAcademia from './CommunismInUSAcademiaComponent';
import CommentDetails from './CommentDetailsComponent';
import HumanRightsAbuse from './HumanRightsAbuseComponent';
import Contact from './ContactComponent';
import { addComment, fetchArticles } from '../redux/ActionCreators';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
    return {
      articles: state.articles,
      comments: state.comments,
      humanRightsMedia: state.humanRightsMedia
    }
}

const mapDispatchToProps = dispatch => ({
    addComment: (articleId, rating, author, comment) => dispatch(addComment(articleId, rating, author, comment)),
    fetchArticles: () => { dispatch(fetchArticles())},
    resetFeedbackForm: () => { dispatch(actions.reset('feedback'))},
});


class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArticles();
    }

    onArticleSelect(articleId){
        this.setState({selectedArticleId: articleId});
    }


    render() {
        const HomePage = () => {
            return(
                <Home
                    articles={this.props.articles.articles.filter((article) => article.category === "on-communism")}
                    articlesLoading={this.props.articles.isLoading}
                    articlesErrMess={this.props.articles.errMess}/>
            )
        }

        const CommunismInUSAcademiaPage = () => {
            return (
                <CommunismInUSAcademia
                    articles = {this.props.articles.articles.filter((article) => article.category === 'communism-in-us-academia')}
                    isLoading={this.props.articles.isLoading}
                    errMess={this.props.articles.errMess}
                />
            )
        }

        const CommentDetailsPage = ({match}) => {
            return (
                <CommentDetails selectedArticle={this.props.articles.articles.filter((article) => article.id === parseInt(match.params.articleId, 10))[0]}
                    isLoading={this.props.articles.isLoading}
                    errMess={this.props.articles.errMess}
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
                    <Route exact path="/contact-us" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}></Contact>}/>
                    <Redirect to="/home"></Redirect>
                </Switch>
                <Footer/>
            </div>
        )
    }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Main));
