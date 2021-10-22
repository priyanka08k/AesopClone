import React from "react";
import {Container, Row, Col, Form} from "react-bootstrap";

const Footer = () => {
    return (
        <Container className="footer-container" fluid>
            <Row style={{padding: "20px"}}>
                <Col>
                    <Form>
                    <Form.Control type="email" placeholder="Enter email address" />
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" style={{textAlign: "left", marginTop:"10px"}} label="Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy " />
                    </Form.Group>
                    </Form>
                   
                </Col>
                <Col>
                    <span className="orders-footer"><p>Orders and Support</p></span>
                    <hr className="divider"></hr>
                    <ul style={{listStyle:"none"}}>
                        <li className="list-links"><a href="#contact">Contact us &#8599;</a></li>
                        <li className="list-links"><a href="#faq">FAQs &#8599;</a></li>
                        <li className="list-links"><a href="#shipping">Shipping &#8599;</a></li>
                        <li className="list-links"><a href="#returns">Returns &#8599;</a></li>
                        <li className="list-links"><a href="#terms">Terms and conditions &#8599;</a></li>
                    </ul>
                </Col>
                <Col>
                    <span className="orders-footer"><p>Services</p></span>
                    <hr className="divider"></hr>
                    <ul style={{listStyle:"none"}}>
                        <li className="list-links"><a href="#assistance">Live assistance</a></li>
                        <li className="list-links"><a href="#corp">Corporations</a></li>
                        <li className="list-links"><a href="#shipping">Facial appointments</a></li>
                    </ul>
                </Col>
                <Col>
                    <span className="orders-footer"><p>Location preferences</p></span>
                    <hr className="divider"></hr>
                    <ul style={{listStyle:"none"}}>
                        <li className="list-links"><a href="#shipping">Shipping:<span><u>India</u></span></a></li>
                        <li className="list-links"><a href="#lang"><i>Language:<span><u> English</u></span></i></a></li>
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col>
                    <span className="orders-footer"><p>Sustainability</p></span>
                    <hr className="divider"></hr>
                    <p style={{textAlign:"left"}}>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
                </Col>
                <Col>
                    <span className="orders-footer"><p>Orders and Support</p></span>
                    <hr className="divider"></hr>
                    <ul style={{listStyle:"none"}}>
                        <li className="list-links"><a href="#story">Our story</a></li>
                        <li className="list-links"><a href="#foundation">Foundations &#8599;</a></li>
                        <li className="list-links"><a href="#careers">Careers</a></li>
                        <li className="list-links"><a href="#privacy">Privacy policy</a></li>
                    </ul>
                </Col>
                <Col>
                    <span className="orders-footer"><p>Social media</p></span>
                    <hr className="divider"></hr>
                    <ul style={{listStyle:"none"}}>
                        <li className="list-links"><a href="#instagram">Instagram &#8599;</a></li>
                        <li className="list-links"><a href="#twitter">Twitter &#8599;</a></li>
                        <li className="list-links"><a href="#linkedin">Linkedin &#8599;</a></li>
                        <li className="list-links"><a href="#wechat">WeChat</a></li>
                    </ul>
                </Col>
                <Col>
                    <span><i className="far fa-comment-alt" style={{fontSize:"20px"}}></i></span>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Footer;