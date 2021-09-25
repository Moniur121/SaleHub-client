import { Link } from 'react-router-dom'

const Services = ({ productData }) => {
  const { productTitle, price, displayImage, _id } = productData
  return (
    <section>
      <Link to={`/product/${_id}`}>
        <div className="card  p-4 m-3 product_item">
          <img src={displayImage} class="card-img-top" alt={displayImage} />
          <div class="card-body">
            <p class="card-title">{productTitle}</p>
            <p class="card-text text-bold">${price}</p>
          </div>
        </div>
      </Link>
    </section>
  )
}

export default Services
