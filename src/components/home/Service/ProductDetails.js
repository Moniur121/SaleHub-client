import React from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const{id} = useParams();
    console.log(id)
  return (
    <section>
      <div className4="container">
        <p>Products Details here</p>
      </div>
    </section>
  )
}

export default ProductDetails
