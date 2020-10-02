import React from "react";
import "./category-section.scss";

import AliceCarousel from "react-alice-carousel";

import { Link } from "react-router-dom";
import { Product } from "components/product/product";
import { AngleRightIcon } from "components/icons/icons";

import { useSelector, useDispatch } from "react-redux";
import Carousel from "components/alice-carousel/alice-carousel";

export const CategorySection = ({ title, link, dataProduct, isSlider }) => {
  const listProduct = useSelector(state => state.mockupDataCategory);

  return (
    <div className="category-section section-wrap align-items-center">
      <h2 className="title-block">{title}</h2>

      {isSlider ? (
        <div className="category-carouse">
          <Carousel></Carousel>
        </div>
      ) : (
        <div className="category-main d-flex flex-wrap">
          {listProduct.length !== 0 &&
            listProduct.map((item, index) => (
              <Product
                className="col-lg-3 col-sm-4 col-6"
                key={item.image}
                image={item.image}
                price={item.price}
                sale={item.sale}
                title={item.title}
                status={item.status.content}
              ></Product>
            ))}
        </div>
      )}
    </div>
  );
};
