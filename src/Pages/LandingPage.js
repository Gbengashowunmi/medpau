import React from "react";
import HeadFoot from "../component/HeadFoot";
import { Button } from "@mui/material";


export default function LandingPage() {
  return (
    <HeadFoot>
        <div className="carousel_container">
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
              <div class="carousel-item active">
                <div className="carousel-content">
                  <div className="details">
                  <Button variant="contained" className="hero-btn light-btn">SUPER SALE</Button>

                    <h1 className="title-hero">
                      Best Online Medical Shopping Now
                    </h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <Button variant="contained" className="hero-btn main-btn">
                      Read more
                    </Button>
                  </div>
                  <div className="image">
                    <img
                      className="d-block w-100 carousel-image"
                      src=""
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="carousel-content">
                  <div className="details">
                  <Button variant="contained" className="hero-btn light-btn">SUPER SALE</Button>
                    <h1 className="title-hero">
                    Best Online Medical Shopping Now                    </h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <Button variant="contained" className="hero-btn main-btn">
                      Read more
                    </Button>
                  </div>
                  <div className="image">
                    <img
                      className="d-block w-100 carousel-image"
                      src=""
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="carousel-content">
                  <div className="details">
                    <Button variant="contained" className="hero-btn light-btn">SUPER SALE</Button>
                    <h1 className="title-hero">
                    Best Online Medical Shopping Now                    </h1>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                    <Button variant="contained" className="hero-btn main-btn">
                      Read more
                    </Button>
                  </div>
                  <div className="image">
                    <img
                      className="d-block w-100 carousel-image"
                      src=""
                      alt="First slide"
                    />
                  </div>
                </div>
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>

      <main>
        <section className="section-a">
          <div className="left">
            <div className="section-description"></div>
            <div className="img">
              <img src="" alt="product" />
            </div>
          </div>
          <div className="right">
            <h5>Free Shipping</h5>
            <h3>30% OFF</h3>
<p>

Your team is great. They are truly outstanding and understand the equipment 100%. It's worth doing business with you.</p>
          </div>
        </section>
        <section className="section-b">
          <div></div>
          <div></div>
        </section>
      </main>
    </HeadFoot>
  );
}
