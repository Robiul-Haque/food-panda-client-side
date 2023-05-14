import React from 'react';
import { Accordion, Container } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container className='d-flex justify-content-center align-item-center my-md-5 py--5'>
            <Accordion defaultActiveKey="0" className='my-5 py-5'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Tell us the differences between uncontrolled and controlled components</Accordion.Header>
                    <Accordion.Body>
                        React controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior. Uncontrolled components refer to components that manage their own state internally
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>How to validate React props using PropTypes</Accordion.Header>
                    <Accordion.Body>
                        <b>PropTypes.any</b> : The prop can be of any data type <br />
                        <b>PropTypes.bool</b> : The prop should be a Boolean <br />
                        <b>PropTypes.number</b> : The prop should be a number <br />
                        <b>PropTypes.string</b> : The prop should be a string <br />
                        <b>PropTypes.func</b> : The prop should be a function <br />
                        <b>PropTypes.array</b> : The prop should be an array <br />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Tell us the difference between nodejs and express js</Accordion.Header>
                    <Accordion.Body>
                        Express is a minimal and flexible node. js web application framework, providing a robust set of features for building single and multi-page, and hybrid web applications. On the other hand, Node. js is detailed as "A platform built on Chrome's JavaScript runtime for easily building fast, scalable network applications"
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                    <Accordion.Header>What is a custom hook, and why will you create a custom hook</Accordion.Header>
                    <Accordion.Body>
                        Custom React JS hooks offer reusability as when a custom hook is created, it can be reused easily, which makes the code cleaner and reduces the time to write the code.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </Container>
    );
};

export default Blog;