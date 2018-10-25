import React, {Component} from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media, Button } from 'reactstrap';

function RenderArticle({selectedArticle}) {
    return (
        <React.Fragment>
            <Media left middle>
                <Media object src={selectedArticle.image} alt={selectedArticle.title}></Media>
            </Media>
        </React.Fragment> 
    )
}

function RenderComments({comments, articleId}) {
        if (comments != null){
            const theComments = comments.map((oneComment) => {
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
                <Media body className="ml-5">
                    <div><h4>Comments</h4></div>
                    <React.Fragment>
                        {theComments}
                    </React.Fragment>
                    <Button size="large" color="success"> Add Comment </Button>
                </Media>

            )
        } else {
            return (<div></div>)
        }
    }

const CommentDetails = (props) => {
    if (props.selectedArticle != null){
        return (
            <div key={props.selectedArticle.id} className="col-12 mt-5 m-5">
                <h2><b>{props.selectedArticle.label}</b></h2>
                <Media tag="li">
                    <RenderArticle selectedArticle={props.selectedArticle}></RenderArticle>                   
                    <RenderComments comments={props.selectedArticle.comments} articleId={props.selectedArticle.id}></RenderComments>
                </Media>
            </div>
        )
    } else {
        return (<div></div>)
    }

}

export default CommentDetails;