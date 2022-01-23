import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../redux/actions/products";
import { getError, getLoading, getProductsList } from "../redux/selectors";
import Product from "./Product";
import Card from "./Card";

// este seria products pq lee la lista
const Products = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProductsList);
  const loading = useSelector(getLoading);
  const error = useSelector(getError);

  // const loading = useSelector((state) => state.products.loading);
  // const error = useSelector((state) => state.products.error);

  useEffect(() => {
    dispatch(getProducts());
    console.log("called");
  }, []);

  return (
    <>
      {/* <Card />  */}
      {loading && <p>Loading...</p>}
      {products.length === 0 && !loading && <p>No products available!</p>}
      {error && !loading && <p>{error}</p>}
      {products.length > 0 &&
        products.map((product) => (
          // <Product key={product.id} product={product} />
          <Card key={product.id} product={product} />
        ))}
    </>
  );
};
export default Products;
