import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Button } from 'reactstrap';

    function RenderArticleItem({article}) {
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
                            <RenderComments commentsParam={article.comments}></RenderComments>
                        </div>
                    </Media>
                </Media>
            </div>
        )};

    function RenderComments({commentsParam}){
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


    const CommunismInUSAcademia = (props) => {
        const news_list = props.articles.map((article) => {
            return (
                <RenderArticleItem article={article}></RenderArticleItem>
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



export default CommunismInUSAcademia;