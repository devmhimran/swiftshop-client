import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("https://swiftshop-server.vercel.app/products")
            .then((res) => {
                setProducts(res.data)
            });
    }, [])
    return [products]
};

export default useProducts;