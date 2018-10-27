import React from 'react';
import { Button } from 'reactstrap';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';
import { Loading } from './LoadingComponent';
import { FadeTransform } from 'react-animation-components';

function RenderCards({articlesList, isLoading, errMess}){
  if (isLoading){
    return (
      <div className="col-12">
        <Loading/>
      </div>
    )
  } else if (errMess) {
    return(
      <div className="col-12">
        <h4>{errMess}</h4>
      </div>
    )
  } else if (articlesList != null) {
    const myArticlesList = articlesList.map((oneArticle) => {
      return (
        <div className="col-12 col-md m-1">
        <FadeTransform
          in
          transformProps={{
            exitTransform: 'scale(0.5) translateY(-50%)'
          }}>
        <Card>
          <CardImg href={oneArticle.link} target="_blank" src={oneArticle.image} alt={oneArticle.title}/>
          <CardBody>
            <CardTitle>{oneArticle.title}</CardTitle>
            {oneArticle.author ? <CardSubtitle>{oneArticle.author}</CardSubtitle> : null}
            <CardText>{oneArticle.abstract}</CardText>
            <Button size="small" color="info" href={oneArticle.link} target="_blank">Learn More</Button>
          </CardBody>
        </Card>
        </FadeTransform>
        </div>

      )
    });

    return(
      <div className="row align-items-start">
        {myArticlesList}
        </div>
    )
    }
  }

function Home(props) {

    // const articles = props.articles.map((oneArticle) => {
    //   return (
    //     <div className="col-12 col-md m-1">
    //         <RenderCard item={oneArticle} isLoading={props.articlesLoading} errMess={props.articlesErrMess}/>
    //     </div>            
    //   )
    // })

    return(
      <div className="container">
          <RenderCards articlesList={props.articles} isLoading={props.articlesLoading} errMess={props.articlesErrMess}></RenderCards>
          {/* {articles} */}
      </div>
    ) ;
}

export default Home; 