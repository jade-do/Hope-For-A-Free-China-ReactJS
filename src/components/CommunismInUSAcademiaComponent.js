import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Button } from 'reactstrap';
import CommentDetails from './CommentDetailsComponent';

    function RenderArticleItem({article, onClick}) {
        return (
            <div key={article.id} className="col-12 mt-5">
                <Media heading> {article.label} </Media>
                <Media tag="li">
                    <Media left middle>
                            <Media object src={article.image} alt={article.title}></Media>
                    </Media>
                    <Media body className="ml-5">
                        <Media heading>{article.title}</Media>
                        <Media heading><em>- {article.author}</em></Media>
                        <p>"{article.abstract}"</p>
                        <p><em>- {article.abstractAuthor}</em></p>
                        <Button size="large" color="danger" target="_blank" href={article.link}> Read More </Button>
                        <Button size="large" color="success"
                            onClick={()=> onClick(article.id)}> Comments </Button>
                    </Media>
                </Media>
            </div>
        )};


    const CommunismInUSAcademia = (props) => {
        const news_list = props.articles.map((article) => {
            return (
                <RenderArticleItem article={article} onClick={props.onClick}></RenderArticleItem>
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