import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";
import {setProducts} from "../redux/actions/productAction";
import ProductComponent from "./ProductComponent";
import allproducts from "../products";

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = () => {
        dispatch(setProducts(allproducts)); 
    }
    useEffect(() => {
        fetchProducts();
    }, []);
    console.log("Products:", products);
    return(

        <Container fluid style={{margin: "100px"}}>
           <ProductComponent />
        </Container>
    );
};

export default ProductListing;