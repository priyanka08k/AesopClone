import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
    });
    console.log("Products:", products);
    return(
        <div className="container-fuild" style={{margin: '50px', marginTop: '120px', display: 'flex', flexDirection:'row'}}>
            <ProductComponent />
        </div>
        
           
        
    );
};

export default ProductListing;