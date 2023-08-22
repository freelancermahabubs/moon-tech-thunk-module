import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getSingleProcut} from "../../features/products/productsSlice";
import ProductDetailsCard from "../../components/ProductDetailsCard";

const ProductDetails = () => {
  const {id} = useParams();
  const {products, isLoading} = useSelector((state) => state.products);
  console.log(products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSingleProcut(id));
  }, [dispatch, id]);
  let content;
  if (isLoading) {
    content = <h1>Loading...</h1>;
  }
  if (products.length) {
    content = products.map((product) => (
      <ProductDetailsCard key={product?._id} product={product} />
    ));
  }
  return <div>{content}</div>;
};

export default ProductDetails;
