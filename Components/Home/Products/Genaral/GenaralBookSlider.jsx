"use client";
import React, { Component } from "react";
import Slider from "react-slick";
import { BookCard } from "./BookCard";
import "./BookCard.css";

export default class GenaralBookSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1250, // define breakpoint for lg screens
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992, // define breakpoint for md screens
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, // define breakpoint for sm screens
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 520, // define breakpoint for sm screens
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    return (
      <div className="md:px-10">
        <Slider {...settings}>
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
          <BookCard />
        </Slider>
      </div>
    );
  }
}
