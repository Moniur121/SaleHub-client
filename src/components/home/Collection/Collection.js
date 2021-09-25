import React from 'react'
import imgOne from '../../../assets/images/collection/collectionOne.jpg'
import imgTwo from '../../../assets/images/collection/collectionTwo.jpg'
import imgThree from '../../../assets/images/collection/collectionThree.jpg'
import { Link } from 'react-router-dom'
const Collection = () => {
  return (
    <section>
      <div className="container">
        <div className="text-center py-5">
          <h2 className="text-dark text-bolder">Denim Collection</h2>
          <p>
            Explore the best trends for girls and women at SaleHub! Clothes,
            shoes and cool accessories for a new
            <br /> season are available now at SaleHub online.
          </p>
        </div>
        <div className="row">
          <div className="col-md-8 collection_effect">
            <div className="imgCaption_parent">
              <img
                src={imgOne}
                alt=""
                className="img-fluid   w-100"
                style={{ height: '840px' }}
              />
              <div className="imgCaption_child">
                <h3 className="text-dark">DENIM-JACKET</h3>
                <p>14 Denim-Jacket Outfits to Live in Now That It Is Fall</p>
                <Link>
                  <button className="btn btn-primary">
                    SHOP THE COLLECTION
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 py-4">
            <div className="row">
              <div className="col-md-12">
                <img src={imgTwo} alt="" className="img-fluid h-75 w-100" />
              </div>
              <div className="col-md-12" style={{ marginTop: '-120px' }}>
                <img src={imgThree} alt="" className="img-fluid h-75 w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Collection
