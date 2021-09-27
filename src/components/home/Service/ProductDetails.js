import React, { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addToCart } from '../../../redux/action/cartAction'
const ProductDetails = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [data, setData] = useState([])
  useEffect(() => {
    fetch(`http://localhost:5000/productDetails/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data[0])
      })
  }, [id])
  // const  productData = data.find(element => element);
  console.log(data.price)
  // productDetails....
  const url = `${data.displayImage}`
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const [slider1, setSlider1] = useState(url)
  const [slider2, setSlider2] = useState(null)
  useEffect(() => {
    setNav1(slider1)
    setNav2(slider2)
  })
  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.slider-nav',
  }

  const settingsThumbs = {
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    centerMode: true,
    dots: false,
    swipeToSlide: false,
    focusOnSelect: true,
  }
  return (
    <section>
      <div className="product_details my-5">
        <div className="row">
          <div className="col-md-6 p-5 align-items-center">
            {/* <div className="big_img_container">
              <Slider
                {...settingsMain}
                asNavFor={nav2}
                ref={(slider) => setSlider1(slider)}
              >
                <div className="">
                  <img
                    src={url}
                    alt="product img"
                    className="img-fluid slick-slide-image"
                  />
                </div>
                <div className="">
                  <img
                    src={data.toggleImageOne}
                    alt="product img"
                    className="img-fluid slick-slide-image"
                  />
                </div>
                <div className="">
                  <img
                    src={data.toggleImageTwo}
                    alt="product img"
                    className="img-fluid slick-slide-image"
                  />
                </div>
                <div className="">
                  <img
                    src={data.toggleImageThree}
                    alt="product img"
                    className="img-fluid slick-slide-image"
                  />
                </div>
              </Slider>
            </div> */}
            {/* ........ */}
            {/* <div className="img_container">
              <Slider
                {...settingsThumbs}
                asNavFor={nav1}
                ref={(slider) => setSlider2(slider)}
              >
                <div className="d-flex">
                  <div className="img1">
                    <img
                      src={data.displayImage}
                      alt="product img"
                      className="img-fluid slick-slide-image"
                    />
                  </div>
                  <div className="img1">
                    <img
                      src={data.toggleImageOne}
                      alt="product img"
                      className="img-fluid slick-slide-image"
                    />
                  </div>
                  <div className="img1">
                    <img
                      src={data.toggleImageTwo}
                      alt="product img"
                      className="img-fluid slick-slide-image"
                    />
                  </div>
                  <div className="img1">
                    <img
                      src={data.toggleImageThree}
                      alt="product img"
                      className="img-fluid slick-slide-image"
                    />
                  </div>
                </div>
              </Slider>
            </div> */}
          </div>
          <div className="col-md-6 p-5">
            <h5 className="product_title">{data.productTitle}</h5>
            <h2>${data.price}</h2>
            <p>{data.description}</p>
            <button onClick={()=> dispatch(addToCart(data))} className="btn btn-primary" type="button">
              <AiOutlineShoppingCart />
              <span>ADD TO CART</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductDetails
