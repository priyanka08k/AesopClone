import React from "react";
import { useSelector } from "react-redux";
import {Card} from "react-bootstrap";


const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const {id, title, photo, description} = product;
        return (
        <span key={id} style={{padding:"10px", margin:"10px", width:"500px"}}>
            
            <Card className="products">
            <Card.Img variant="top" src={photo} style={{width:"300px", height:"300px"}}/>
            <Card.Body>
            <Card.Title>
            <a className="a-links" href="#title">{title}</a>
            </Card.Title>
            <Card.Text>
                {description}
            </Card.Text>
            
            </Card.Body>
            </Card>
           
        </span>
        );
    });
    return (
        <>{renderList}</>
    );
   
};


export default ProductComponent;