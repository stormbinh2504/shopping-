import React from "react";
import "./home.scss";
import Gif from "assets/images/banner-gif.gif";
import mockupDataDiscount from "data/mockupDataDiscount";
import mockupDataBestSeller from "data/mockupDataBestSeller";
import mockupDataHot from "data/mockupDataHot";
import mockupDataNewest from "data/mockupDataNewest";
import { HomepageCarousel } from "components/homepage-carousel/homepage-carousel";
import { HotTrend } from "components/hot-trend/hot-trend";
import { CategorySection } from "components/category-section/category-section";
import { Product } from "components/product/product";
import Carousel from "components/alice-carousel/alice-carousel";

const Homepage = () => {
  console.log(mockupDataDiscount);
  return (
    <div className="homepage">
      <HomepageCarousel></HomepageCarousel>
      <HotTrend></HotTrend>
      <CategorySection
        title="SẢN PHẨM MỚI NHẤT"
        link="/category/san-pham-moi-nhat"
        dataProduct={mockupDataNewest}
        isSlider={true}
      />
      {/* <CategorySection
        title="SẢN PHẨM KHUYẾN MÃI"
        link="/category/san-pham-khuyen-mai"
        dataProduct={mockupDataDiscount}
        isSlider={true}
      /> */}
      <Carousel></Carousel>
    </div>
  );
};

export default Homepage;
