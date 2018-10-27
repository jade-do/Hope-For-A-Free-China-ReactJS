import React, {Component} from 'react';
import {Media, Button, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
import {Link} from 'react-router-dom';
import { Loading } from './LoadingComponent';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

    function RenderArticleItem({article}) {
        return (
            <div key={article.id} className="col-12 mt-5">
                <Media heading> {article.label} </Media>
                <Media tag="li">
                    <Media left middle className="col-12 col-lg">                                
                        <Media object src={article.image} alt={article.title}></Media>
                    </Media>
                    <Media body className="col-12 col-lg">
                        <Media heading>{article.title}</Media>
                        <Media heading><em>- {article.author}</em></Media>
                        <p>"{article.abstract}"</p>
                        <p><em>- {article.abstractAuthor}</em></p>   
                        <div className="row">
                            <div className="col-3 mr-2">
                            <Button size="large" color="danger" target="_blank" href={article.link}> Read More </Button>                            
                            </div>
                            <div className="col-3 mr-2">
                            <Link to={`/communism-in-us-academia/${article.id}`}>                          
                            <Button size="large" color="success"> Comments </Button>
                            </Link>
                            </div>
                        </div>
                    </Media>
                </Media>
            </div>
        )};


    const CommunismInUSAcademia = (props) => {
        const news_list = props.articles.map((article) => {
            return (
                <RenderArticleItem article={article}></RenderArticleItem>
            )
        });

        if (props.isLoading){
            return (
                <div className="container">
                    <div className="row">
                        <Loading/>
                    </div>
                </div>
            )
        } else if (props.errMess) {
            return(
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>        
            )
        } else if (news_list != null) {
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