import React from 'react'
import BannerImgOne from '../../../assets/images/bannerImg-1.jpg'
import BannerImgTwo from '../../../assets/images/bannerImg-2.jpg'
import BannerImgThree from '../../../assets/images/bannerImg-3.jpg';
const Banner = () => {
  return (
    <section>
      <div className="banner_components mb-4">
        <div
          id="carouselExampleCaptions"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active slider_caption">
              <img
                src={BannerImgOne}
                class="d-block w-100 img-fluid"
                alt={BannerImgOne}
              />
              <div class="carousel-caption d-block d-md-block caption">
                <h4>NEW COLLECTION</h4>
                <h2>FIND YOUR</h2>
                <h1>PERFECT</h1>
                <p>Uncompromising in style, quality and performance</p>
                <button type="button" className="btn btn-primary text-light">
                  SHOP THE COLLECTION
                </button>
              </div>
            </div>
            <div class="carousel-item slider_caption">
              <img
                src={BannerImgTwo}
                class="d-block w-100"
                alt={BannerImgTwo}
              />
              <div class="carousel-caption d-block d-md-block caption">
                <h4>NEW COLLECTION</h4>
                <h2>FIND YOUR</h2>
                <h1>PERFECT</h1>
                <p>Uncompromising in style, quality and performance</p>
                <button type="button" className="btn btn-primary text-light">
                  SHOP THE COLLECTION
                </button>
              </div>
            </div>
            <div class="carousel-item slider_caption">
              <img
                src={BannerImgThree}
                class="d-block w-100"
                alt={BannerImgThree}
              />
              <div class="carousel-caption d-block d-md-block caption">
                <h4>NEW COLLECTION</h4>
                <h2>FIND YOUR</h2>
                <h1>PERFECT</h1>
                <p>Uncompromising in style, quality and performance</p>
                <button type="button" className="btn btn-primary text-light">
                  SHOP THE COLLECTION
                </button>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  )
}

export default Banner
