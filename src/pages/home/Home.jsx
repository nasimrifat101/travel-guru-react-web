/* eslint-disable react/no-unescaped-entities */
import NavBarWhite from "../navbar/NavBarWhite";
import { AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Home.css";
import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const cards = useLoaderData();
  const [activeCardId, setActiveCardId] = useState(null);

  const settings = {
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
  };

  return (
    <div>
      <div className="bg-image">
        <div className="overlay">
          <NavBarWhite></NavBarWhite>
          <div className="pl-32">
            <div className="grid grid-cols-3">
              <div className="col-span-1 space-y-3">
                <h1 className="text-8xl font-semibold font-display text-white mt-20">
                  Cox's bazar
                </h1>
                <h4 className="text-white text-sm">
                  Cox's Bazar is a city, fishing port, tourism centre and
                  district headquarters in southeastern Bangladesh. It is famous
                  mostly for its long natural sandy beach, and it ...
                </h4>
                <button className="btn bg-yellow-500 border-none ">
                  Bookings<AiOutlineArrowRight></AiOutlineArrowRight>
                </button>
              </div>
              {/* carosel */}
              <div className="col-span-2">
              <div className="container">
              <Slider {...settings}>
                {cards.map((item) => (
                  <Link to={`/details/${item.id}`} key={item.id}>
                    <div className={`carousel-card ${item.id === activeCardId ? "active" : ""}`} data-id={item.id}
                      onClick={() => setActiveCardId(item.id)}
                    >
                      <img src={item.img} alt={item.img} className="img" />
                      <h2 className="title">{item.title}</h2>
                    </div>
                  </Link>
                ))}
              </Slider>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
