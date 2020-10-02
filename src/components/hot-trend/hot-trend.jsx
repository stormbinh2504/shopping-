import React from "react";
import PropTypes from "prop-types";
import BannerGif from "assets/images/banner-gif.gif";

export const HotTrend = () => {
  return (
    <div>
      <div class="hot-trend section-wrap">
        <h2 class="title-block">Hot Trend 2020</h2>
        <img src={BannerGif} alt="" />
      </div>
    </div>
  );
};
