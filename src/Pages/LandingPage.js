import React from "react";
import HeadFoot from "../component/HeadFoot";
// import SlickSlider from "../component/slickSlider/SlickSlider";
import { Button } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
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
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="3"
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
                  <p>
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
                  </Button>

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
        <section
          className="section-a"
          data-aos="slide-up"
          data-aos-offset="10"
          data-aos-delay="30"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-once="false"
        >
          <div className="left">
            <div className="section-description">
              <p>Save up tp 50% purchase cost</p>
              <h2>Healthcare Products</h2>
              <button>SHOW MORE</button>
            </div>
            <div className="img">
              <img src="/images/3-8.jpg" alt="product" />
            </div>
          </div>
          <div className="right">
            <h5>Free Shipping</h5>
            <h2>30% OFF</h2>
            <p>
              Your team is great. They are truly outstanding and understand the
              equipment 100%. It's worth doing business with you.
            </p>
          </div>
        </section>
        <section
          className="section-b"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="10"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
        >
          <div className="left">
            <h3>Trusted Brand</h3>
            <p>there are many trusted brands we do business with</p>
            <ul>
              <li>Huge Selection</li>
              <li>Always low Price</li>
              <li>Reliable Quality</li>
            </ul>
          </div>
          <div className="right">
            <div className="section-description">
              <p>Save up tp 50% purchase cost</p>
              <h2>Healthcare Products</h2>
              <button>SHOW MORE</button>
            </div>
            <div className="img">
              <img src="/images/3-8.jpg" alt="product" />
            </div>
          </div>
        </section>

        <section className="featured-products">
          <h5>Feature</h5>
          <h3>Featured Products</h3>
          {/* <SlickSlider/> */}
        </section>
      </main>
    </HeadFoot>
  );
}
