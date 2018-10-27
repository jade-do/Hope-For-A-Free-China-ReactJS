import React, { Component } from 'react';
import { Button } from 'reactstrap';
import {Card, CardImg, CardText, CardBody, CardTitle, 
    CardSubtitle, Carousel, CarouselItem, CarouselControl, 
    CarouselIndicators, CarouselCaption} from 'reactstrap';
import { Loading } from './LoadingComponent';
  
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

            const slides = this.props.mediaList.map((item) => {
                return (
                  <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                  >
                    <img src={item.image} alt={item.caption} />
                    <CarouselCaption captionText={item.src} captionHeader={item.caption} />
                  </CarouselItem>
                );
              });

            return (
    
            <div className="container">
                <div className="row">

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