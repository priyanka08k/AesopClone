import React from "react";
import { useSelector } from "react-redux";
import {Card, Row, Col} from "react-bootstrap";


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, photo, description} = product;
        return (
            <Row key={id}>
            <Col sm={4}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={photo} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            
            </Card.Body>
            </Card>
            </Col>
           
        </Row>
        );
    });
    return (
        <>{renderList}</>
    );
   
};


export default ProductComponent;