import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AliceCarousel from "react-alice-carousel";
// import Carousel from "react-elastic-carousel";

import "./alice-carousel.scss";
import "react-alice-carousel/lib/alice-carousel.css";

import { Product } from "../../components/product/product";
import { AngleLeftIcon, AngleRightIcon } from "components/icons/icons";
import { ProductDiscount } from "components/product_discount/productDiscount";
const Carousel = () => {
  const listProduct = useSelector(state => state.mockupDataCategory);
  return (
    <AliceCarousel
      mouseTrackingEnabled={false}
      touchTrackingEnabled={false}
      dotsDisabled
      responsive={{ 0: { items: 1 }, 400: { items: 2 }, 575: { items: 3 }, 991: { items: 4 } }}
    >
      {listProduct.map((item, index) => (
        <Product
          className="col-lg-3 col-sm-4 col-6"
          key={index}
          image={item.image}
          price={item.price}
          title={item.title}
          status={item.status.content}
        ></Product>
      ))}
    </AliceCarousel>
  );
};
export default Carousel;
