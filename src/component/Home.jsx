import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider_1 from '../assets/slider-1.jpg';
import slider_2 from '../assets/slider-2.jpg';
import slider_3 from '../assets/slider-3.jpg';
import slider_4 from '../assets/slider-4.jpg';
import image_1 from '../assets/image-1.jpg';
import image_2 from '../assets/image-2.jpg'
import breakfast from '../assets/breakfast.jpg';
import lunch from '../assets/lunch.jpg';
import dinner from '../assets/dinner.jpg';
import Chefs from './Chefs';

const Home = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto h-50 custom-responsive-img"
                        src={slider_1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4>White and Brown Cooked Dish on White Ceramic Bowls</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto custom-responsive-img"
                        src={slider_2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4>Bowl of Dimsum</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto custom-responsive-img"
                        src={slider_3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4>Round White and Blue Ceramic Bowl With Cooked Ball Soup and Brown Wooden Chopsticks</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 mx-auto custom-responsive-img"
                        src={slider_4}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4>Nerfee Mirandilla</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className='mt-md-5 pt-5'>
                <h2 className='text-center'>Our Most Popular Chef</h2>
                <div className='container d-flex justify-content-center gap-5 flex-wrap mt-5'>
                    <Chefs></Chefs>
                </div>
            </div>
            <div className='container mt-md-5 pt-4'>
                <div className='d-flex flex-md-row justify-content-center align-items-center gap-5 mt-5 flex-column'>
                    <div className='w-50'>
                        <h2>Good & Healthy Food</h2>
                        <p className='text-secondary '>Rice and noodles are staples in many Chinese dishes, often paired with vegetables, meat, or seafood. Soy sauce, oyster sauce, and hoisin sauce are common flavorings, while garlic, ginger, and scallions add depth to many dishes</p>
                    </div>
                    <div className='w-50'>
                        <img src={image_1} alt="image-1" className='rounded img-fluid' />
                    </div>
                </div>
                <div className='d-flex flex-md-row justify-content-center align-items-center gap-5 mt-5 flex-column'>
                    <div className='w-50'>
                        <img src={image_2} alt="image-2" className='rounded img-fluid' />
                    </div>
                    <div className='w-50'>
                        <h2>World Class Chef</h2>
                        <p className='text-secondary'>Cook Eat Discover was thrilled to speak to Francesco Mazzei, who has become a staple not just of the high-end UK restaurant scene, but on our TV screens too. He told us about his childhood, inspirations, current projects, death-row meal, and even provided us with a special recipe for the feature</p>
                    </div>
                </div>
            </div>
            <div className='container my-md-5 py-4 px-0'>
                <h2 className='text-center my-5'>What We Offer</h2>
                <div className='d-flex flex-md-row justify-content-evenly align-items-center flex-column'>
                    <div>
                        <img src={breakfast} alt="breakfast-image" className='img-fluid' />
                        <h5 className='text-center mt-5'>Breakfast</h5>
                    </div>
                    <div>
                        <img src={lunch} alt="breakfast-image" className='img-fluid' />
                        <h5 className='text-center mt-5'>Lunch</h5>
                    </div>
                    <div>
                        <img src={dinner} alt="breakfast-image" className='img-fluid' />
                        <h5 className='text-center mt-5'>Dinner</h5>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;