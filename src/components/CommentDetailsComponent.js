import React from 'react';
import { Media, Button, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import CommentForm from './CommentFormComponent';

function RenderArticle({selectedArticle}) {
    return (
        <React.Fragment>
            <Media left middle>
                <Media object src={selectedArticle.image} alt={selectedArticle.title}></Media>
            </Media>
        </React.Fragment> 
    )
}

function RenderComments({comments, articleId, addComment}) {
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
                    <CommentForm articleId={articleId} addComment={addComment} />
                </Media>

            )
        } else {
            return (<div></div>)
        }
    }

const CommentDetails = (props) => {
    if (props.selectedArticle != null){
        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/communism-in-us-academia'>Communism In US Academia</Link></BreadcrumbItem>
                        <BreadcrumbItem active>
                            {props.selectedArticle.label}
                        </BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.selectedArticle.title}</h3>
                    </div>

                </div>
                <div className="row">
                    <div key={props.selectedArticle.id} className="col-12 mt-5 m-5">
                        <h2><b>{props.selectedArticle.label}</b></h2>
                        <Media tag="li">
                            <RenderArticle selectedArticle={props.selectedArticle}></RenderArticle>                   
                            <RenderComments comments={props.comments} articleId={props.selectedArticle.id} addComment={props.addComment}></RenderComments>
                        </Media>
                    </div>                
                </div>
            </div>
        )
    } else {
        return (<div></div>)
    }

}

export default CommentDetails;