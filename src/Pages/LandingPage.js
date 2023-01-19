import React from "react";
import HeadFoot from "../component/HeadFoot";
// import SlickSlider from "../component/slickSlider/SlickSlider";
import "./landing.scss"
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import ProductCard from "../component/productCard/ProductCard";
// ..
AOS.init();
export default function LandingPage() {
  return (
    <HeadFoot>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active indicator"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="1"
              className="indicator"
            ></li>
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="2"
              className="indicator"
            ></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="carousel-image">

              <img
                    className="d-block w-100"
                    src="/images/3-8.jpg"
                    // "/images/3-8.jpg"
                    alt="First slide"
                  />
              </div>
                <div className="details">
                  <Button
                    variant="contained"
                    className="hero-btn light-btn"
                    data-aos="slide-down"
                    data-aos-offset="10"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                  >
                    SUPER SALE
                  </Button>

                  <h1
                    className="title-hero"
                    data-aos="zoom-in"
                    data-aos-offset="10"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                  >
                    Best Online Medical Shopping Now
                  </h1>
                  {/* <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                  <Button
                    variant="contained"
                    className="hero-btn main-btn"
                    slide-up
                    data-aos="slide-up"
                    data-aos-offset="10"
                    data-aos-delay="30"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-once="false"
                  >
                    Read more
                  </Button> */}

              </div>
            </div>


          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
<main>
  <div className="section-a">
    <div className="left">
      <img src="images/beannr-2 (3).jpg" alt="bg-pics"/>
      <div className="details">
      <p>SAVE UP TO 30% OFF</p>
      <h2>Healthcare Product</h2>
      <button>SHOW NOW</button>
      </div>
    </div>
    <div className="right">
      <p className="head">FREE SHIPPING</p>
      <h2>30% OFF</h2>
      <p>There are many variations of passages of Lorem Ipsum available
      There are many variations of passages of Lorem Ipsum available
</p>
    </div>
  </div>
  <div className="section-b">
  <div className="left">
    <h4 className="head">Trusted Brands</h4>
    <p>There are many variations of passages of Lorem Ipsum available
</p>

<ul>
  <li>Huge selection
</li>
  <li>Always low Price
</li>
  <li>Free shipping
</li>
</ul>
  </div>
    <div className="right">
    <img src="images/beannr-2 (3).jpg" alt="bg-pics"/>
      <div className="details">
      <p>SAVE UP TO 30% OFF</p>
      <h2>Healthcare Product</h2>
      <button>SHOW NOW</button>
      </div>
    </div>
  </div>
</main>
  

  <aside className="new-arrivals">
    <div className="head">
<h6>FEATURE</h6>
<h1>New Arrivals</h1>
    </div>
    <div className="products-container">

    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    </div>
  </aside>
  <aside className="featured-post">
    <div className="head">
<h6>FEATURE</h6>
<h1>Feature Products</h1>
    </div>
    <div className="products-container">

    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    <div><ProductCard/></div>
    </div>
  </aside>
    </HeadFoot>
  );
}
