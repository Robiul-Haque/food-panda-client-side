import React from 'react';
import Chef from './Chef';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from '../assets/slider-1.jpg';
import slider_2 from '../assets/slider-2.jpg';
import slider_3 from '../assets/slider-3.jpg';
import image_1 from '../assets/image-1.jpg';

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
            <div className='container mt-5 pt-5'>
                <div className='d-flex justify-content-center align-items-center gap-5 mt-5'>
                    <div className='w-50'>
                        <h2>Good & Healthy Food</h2>
                        <p>Rice and noodles are staples in many Chinese dishes, often paired with vegetables, meat, or seafood. Soy sauce, oyster sauce, and hoisin sauce are common flavorings, while garlic, ginger, and scallions add depth to many dishes</p>
                    </div>
                    <div className='w-50'>
                        <img src={image_1} alt="image-1" className='rounded img-fluid' />
                    </div>
                </div>
                <div className='d-flex justify-content-center align-items-center gap-5 mt-5'>
                    <div className='w-50'>
                        <img src="https://blog.cookeatdiscover.com/content/images/2021/03/CPG_POLENTA_59-1.jpg" alt="image-2" className='rounded img-fluid' />
                    </div>
                    <div className='w-50'>
                        <h1>World Famous Chef</h1>
                        <p>Cook Eat Discover was thrilled to speak to Francesco Mazzei, who has become a staple not just of the high-end UK restaurant scene, but on our TV screens too. He told us about his childhood, inspirations, current projects, death-row meal, and even provided us with a special recipe for the feature</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;