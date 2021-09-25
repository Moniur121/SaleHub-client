import React, { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";
import Skeleton from "react-loading-skeleton";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Services from "../Services/Services";
const Service = () => {
  const [productData, setProductData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/getProduct")
      .then((res) => res.json())
      .then((data) => {
        setProductData(data);
      });
  }, []);
  console.log(productData);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section>
      <div className="py-4 container">
        <div className="text-center text-dark mb-2 d-flex justify-content-between">
          <h3>
            WE LOVE <FaHeart />
          </h3>
          <div className="input-group mb-3 search_bar">
            <input
              type="text"
              class="form-control"
              placeholder="Search here product"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
            />
            <button class="btn btn-primary" type="button" id="button-addon2">
              <BiSearch />
            </button>
          </div>
        </div>
        {productData.length === 0 && (
          <Carousel responsive={responsive}>
            <Skeleton  height={100} />
          </Carousel>
        )}
        <Carousel responsive={responsive}>
          {productData.map((productData) => (
            <Services productData={productData} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Service;
