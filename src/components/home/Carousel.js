import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel';
import "./carousel.css";
export default function CarouselComponent() {
    return (
        <div className="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div>
                    <img src="https://picsum.photos/700/300" />
                </div>
                <div>
                    <img src="https://picsum.photos/700/300"/>
                </div>
                <div>
                    <img src="https://picsum.photos/700/300"  alt="smth"/>
                </div>
            </Carousel>
        </div>
    );
}
