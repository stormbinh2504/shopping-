import React, { useState, useEffect } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";

import Logo from "assets/images/logo.png";
import User from "assets/images/user.png";
import {
  SearchIcon,
  CartIcon,
  CaretDownIcon,
  BarsIcon,
  CloseIcon,
  PlusIcon
} from "components/icons/icons";

export const Header = () => {
  useEffect(() => {}, []);

  return (
    <div className="header">
      <div className="header-wrap section-wrap d-flex align-items-center justify-content-between">
        <div className="header-logo">
          <div header-nav-btn>
            <BarsIcon></BarsIcon>
          </div>
          <Link to="/">
            <img src={Logo} alt="/"></img>
          </Link>
        </div>
        <div className="header-location">
          <p>Chọn kho giao hàng</p>
          <div className="location d-flex align-items-center justify-content-between">
            <select name="HaNoi" id="">
              <option value="">Hà Nội</option>
              <option value="">Tp HCM</option>
              <option value="">Hải Phòng</option>
              <option value="">Vũng Tàu</option>
            </select>
            {/* <CaretDownIcon></CaretDownIcon> */}
          </div>
        </div>
        <div className="header-search d-flex align-items-center">
          <SearchIcon></SearchIcon>
          <input type="text" placeholder="Tìm kiếm" />
        </div>
        <div className="header-authen">
          <a href="/">Đăng ký</a>
          <span>/</span>
          <a href="/">Đăng nhập</a>
        </div>
        <div className="header-cart d-flex align-items-end">
          <div className="search-mobile"></div>
          <CartIcon></CartIcon>
          <span>(0) </span>
        </div>
      </div>
      <div className="header-wrap list-menu">
        <ul className="section-wrap d-flex align-items-center justify-content-between">
          <li>
            <a href="/">Giày</a>
          </li>
          <li>
            <a href="/">Túi Xách</a>
          </li>
          <li>
            <a href="/">Balo</a>
          </li>
          <li>
            <a href="/">Ví Bóp</a>
          </li>
          <li>
            <a href="/">Dép & Guốc</a>
          </li>
          <li>
            <a href="/">Phụ Kiện</a>
          </li>
          <li>
            <a href="/">Giftcard</a>
          </li>
          <li>
            <a href="/">Sale Off</a>
          </li>
          <li>
            <a href="/">New arrival</a>
          </li>
          <li>
            <a href="/">Summer Kisses</a>
          </li>
          <li>
            <a href="/">Tin Tức</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
