import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Button } from 'reactstrap';

class CommunismInUSAcademia extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            selectedArticle: null
        };
    }

/*     onArticleSelect(article){
        this.setState( {selectedArticle: article });
    }

    renderArticle(article){
        if (article != null){
            return (
                <div key={article.id} className="col-12 mt-5">
                    <Media heading> {article.label} </Media>
                    <Media tag="li">
                        <Media left middle>
                            <Media object src={article.image} alt={article.title} height="650px" width="450px"/>
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{article.title}</Media>
                            <Media heading><em>- {article.author}</em></Media>
                            <p>"{article.abstract}"</p>
                            <p><em>- {article.abstract_author}</em></p>
                            <Button size="large" color="danger" target="_blank" href={article.link}> Read More </Button>
                        </Media>
                    </Media>
                </div>
            )
        } else {
            return (
                <div></div>
            )
        }
    }

    render() {
        const newsList = this.props.articles.map((article) =>  {
            return (
                <div className="col-12 col-md-3 m-1">
                     <Card key={article.id}
                        onClick={() =>this.onArticleSelect(article)}>
                        <CardTitle>{article.title}</CardTitle>
                        <CardImg height="" src={article.image} alt={article.name}/>  
                        <CardBody><span class="fa-circle"></span></CardBody>
                    </Card> 
                </div>
            )
        });

        return (
            <div className="container">
                <div className="row">
                    {newsList}
                </div>
                <div className="row">
                    <div className="col-12">
                        {this.renderArticle(this.state.selectedArticle)}
                    </div>
                </div>
            </div>
        );

    }
 */

    renderComments(commentsParam){
        if (commentsParam != null){
            const theComments = commentsParam.map((oneComment) => {
                return(
                    <div key={oneComment.id}>
                        <ul className="list-unstyled">
                            <li>--{oneComment.comment}</li>
                            <li><span>{oneComment.author}</span>, <span>{new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(oneComment.date)))}</span></li>
                        </ul>
                    </div>
                )
            })

            return (
                <Card>
                    <CardBody>
                        <CardTitle>
                            <div><h4>Comments</h4></div>
                        </CardTitle>
                        <CardText>
                            {theComments}
                        </CardText>
                    </CardBody>
                </Card>
            )
        } else {
            return (<div></div>)
        }
    }


    render() {
        const news_list = this.props.articles.map((article) => {
            return (
                <div key={article.id} className="col-12 mt-5">
                    <Media heading> {article.label} </Media>
                    <Media tag="li">
                        <Media left middle>
                            <Card>
                                <CardImg src={article.image} alt={article.title} h-650 w-50></CardImg>
                                <CardImgOverlay><Button size="large" color="primary" block target="_blank" href={article.link}> Read More </Button></CardImgOverlay>
                            </Card>
                            {/* <Media object src={article.image} alt={article.title} height="650px" width="450px"/> */}
                        </Media>
                        <Media body className="ml-5">
                            <Media heading>{article.title}</Media>
                            <Media heading><em>- {article.author}</em></Media>
                            <p>"{article.abstract}"</p>
                            <p><em>- {article.abstract_author}</em></p>
                            {/* <Button size="large" color="danger" target="_blank" href={article.link}> Read More </Button> */}
                            <div>
                                {this.renderComments(article.comments)}
                            </div>
                        </Media>
                    </Media>
                </div>
            )
        });

        return(
            <div className="container">
                <div className="row">
                    <Media list>
                        {news_list}
                    </Media>
                </div>
            </div>
        )
    }

}

export default CommunismInUSAcademia;