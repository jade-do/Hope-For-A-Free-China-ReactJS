import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, 
    CardSubtitle, Carousel, CarouselItem, CarouselControl, 
    CarouselIndicators, CarouselCaption} from 'reactstrap';
  
  class HumanRightsAbuse extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          activeIndex: 0,
        };
      this.next = this.next.bind(this);
      this.previous = this.previous.bind(this);
      this.goToIndex = this.goToIndex.bind(this);
      this.onExiting = this.onExiting.bind(this);
      this.onExited = this.onExited.bind(this);
    }
  
    onExiting() {
      this.animating = true;
    }
  
    onExited() {
      this.animating = false;
    }
    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === this.props.mediaList.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? this.props.mediaList.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
      }
    
      goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
      }
    
      render() {
        const { activeIndex } = this.state;
        const article = this.props.article;
    
        const slides = this.props.mediaList.map((item) => {
          return (
            <CarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.src}
            >
              <img src={item.image} alt={item.caption} />
              <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
            </CarouselItem>
          );
        });
    
        return (
            <div className="container">
                <h3>{article.label}</h3>
                <div className="row">
                <div className="col-12 col-md m-1">
                    <Card>
                        <CardImg href={article.link} target="_blank" src={article.image} alt={article.title} width="200px" height="200px"/>
                        <CardBody>
                            <CardTitle>{article.title}</CardTitle>
                            {article.author ? <CardSubtitle>{article.author}</CardSubtitle> : null}
                            <CardText>{article.abstract}</CardText>
                            <Button size="small" color="info" href={article.link} target="_blank">Learn More</Button>
                        </CardBody>
                    </Card>                
                </div>
                <div className="col-12 col-md">
                    <Carousel
                        activeIndex={activeIndex}
                        next={this.next}
                        previous={this.previous}>
                        <CarouselIndicators items={this.props.mediaList} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
                        {slides}
                        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
                        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
                    </Carousel>
                </div>
                </div>
            </div>
        );
      }
    }
    
    
    export default HumanRightsAbuse;