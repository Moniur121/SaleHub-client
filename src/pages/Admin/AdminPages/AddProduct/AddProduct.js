import axios from 'axios'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const [displayImage, setDisplayImage] = useState(null)
  const [toggleImageOne, setToggleImageOne] = useState(null)
  const [toggleImageTwo, setToggleImageTwo] = useState(null)
  const [toggleImageThree, setToggleImageThree] = useState(null)
  const onSubmit = (data, e) => {
    data.displayImage = displayImage
    data.toggleImageOne = toggleImageOne
    data.toggleImageTwo = toggleImageTwo
    data.toggleImageThree = toggleImageThree
    fetch('http://localhost:5000/addProduct', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        e.target.reset()
        alert('Service Added Successfully!')
      })
  }
  const productImageUpload=(imageFile,setProduction)=>{
    const imgData = new FormData()
    imgData.set('key', 'fa0671d09ed646de7785a0b91b3d0f5d')
    imgData.append('image', imageFile[0])
    axios
      .post('https://api.imgbb.com/1/upload', imgData)
      .then(res =>{
        setProduction(res.data.data.display_url)
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const productionDisplay = (file) => {
    productImageUpload(file,setDisplayImage)
  }
  const  toggleImgUpload_One =(file)=>{
    productImageUpload(file,setToggleImageOne)
  }
  const  toggleImgUpload_Two =(file)=>{
    productImageUpload(file, setToggleImageTwo)
  }
  const  toggleImgUpload_Three =(file)=>{
    productImageUpload(file, setToggleImageThree)
  }
  return (
    <section className="addProduct_components">
      <div className="container py-5">
        <div className="admin_form py-3">
          <div className="py-5 text-light">
            <h3>Add Product Item.</h3>
            <hr style={{ marginBottom: '-17px' }} />
          </div>
          <div className="form-area">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label for="exampleInputTitle" class="form-label text-light">
                  Enter Product Title
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="productTitle"
                  placeholder="Enter Your Product Title"
                  {...register('productTitle', { required: true })}
                />
                {errors.productTitle && (
                  <span className="text-primary">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleInputPrice" class="form-label text-light">
                  Enter Product Price
                </label>
                <input
                  className="form-control"
                  type="text"
                  name="price"
                  placeholder="Enter Your Product price"
                  {...register('price', { required: true })}
                />
                {errors.price && (
                  <span className="text-primary">This field is required</span>
                )}
              </div>
              <div class="mb-3">
                <label
                  for="exampleInputDescription"
                  class="form-label text-light"
                >
                  Enter Product Description
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="description"
                  placeholder="Enter Description Here"
                  rows="3"
                  {...register('description', { required: true })}
                ></textarea>
                {errors.description && (
                  <span className="text-primary">This field is required</span>
                )}
              </div>
              <div className="mb-3">
                <label for="exampleInputPrice" class="form-label text-light">
                  Upload Display Image
                </label>
                <input
                  name="imgUrl"
                  className="form-control w-25 text-dark "
                  onChange={(e) => productionDisplay(e.target.files)}
                  type="file"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPrice" class="form-label text-light">
                  Upload Toggle Image One!!
                </label>
                <input
                  name="imgUrl"
                  className="form-control w-25"
                  onChange={(e) => toggleImgUpload_One(e.target.files)}
                  type="file"
                />
              </div>
              <div className=" mb-3">
                <label for="exampleInputPrice" class="form-label text-light">
                  Upload Toggle Image Two!!
                </label>
                <input
                  name="imgUrl"
                  className="form-control w-25"
                  onChange={(e) => toggleImgUpload_Two(e.target.files)}
                  type="file"
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPrice" class="form-label text-light">
                  Upload Toggle Image Three!!
                </label>
                <input
                  name="imgUrl"
                  className="form-control w-25"
                  onChange={(e) => toggleImgUpload_Three(e.target.files)}
                  type="file"
                />
              </div>
              <input className="btn btn-primary" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AddProduct
