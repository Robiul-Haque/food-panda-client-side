import React from 'react';
import Chef from './Chef';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from '../assets/slider-1.jpg';
import slider_2 from '../assets/slider-2.jpg';
import slider_3 from '../assets/slider-3.jpg';

const Home = () => {
    return (
        <>
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src={slider_1}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h4>White and Brown Cooked Dish on White Ceramic Bowls</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src={slider_2}
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h4>Bowl of Dimsum</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 mx-auto"
                            src={slider_3}
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h4>Round White and Blue Ceramic Bowl With Cooked Ball Soup and Brown Wooden Chopsticks</h4>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    );
};

export default Home;