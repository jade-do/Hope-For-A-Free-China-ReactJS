import React from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap';

function RenderCard({item}){
  return (
    <Card>
      <CardImg src={item.image} alt={item.title}/>
      <CardBody>
        <CardTitle>{item.title}</CardTitle>
        {item.author ? <CardSubtitle>{item.author}</CardSubtitle> : null}
        <CardText>{item.abstract}</CardText>
      </CardBody>

    </Card>
  )
}

function Home(props) {

    const articles = props.articles.map((oneArticle) => {
      return (
        <div className="col-12 col-md m-1">
            <RenderCard item={oneArticle}/>
        </div>      
      )
    })
    return(
      <div className="container">
        <div className="row align-items-start">
          {articles}
        </div>
      </div>
    );
}

export default Home; 