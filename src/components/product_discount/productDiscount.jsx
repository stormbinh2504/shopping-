import React from 'react'
import './productDiscount.scss'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";

export const ProductDiscount = (props) => {
    const listProduct = useSelector((state) => state.mockupDataCategory);
    return (
        <Link to="/product-detail" className="product">
            <div className="product-image">
                <img className="img" src={props.image} alt="" />
            </div>
            <div className="product-price d-flex">
                <p class="price">{props.price} ₫</p>
            </div>
            <h2 class="product-title">{props.title}</h2>
            <div class="price-status">{props.state}</div>

            {/* {props.status.type !== "" && props.status.type === "new" ? (
        <div className="price-status">{props.status.content}</div>
      ) : (
        props.status.type !== "" && (
          <div className="price-status active">{props.status.content}</div>
        )
      )} */}
        </Link>
    );
}
