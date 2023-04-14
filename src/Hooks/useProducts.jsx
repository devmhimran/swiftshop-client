import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((res) => {
                setProducts(res.data.products)
            });
    }, [])
    return [products]
};

export default useProducts;