import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

// import "firebase/auth";
import { Link } from 'react-router-dom'


const SignUp = () => {
  const [error, setError] = useState('')
  const [isSignIn, setIsSignIn] = useState(false)
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data, e) => {
    // e.target.reset()
    // firebaseConfig
    //   .auth()
    //   .createUserWithEmailAndPassword(data.email, data.password)
    //   .then((userCredential) => {
    //     // Signed in
    //     var user = userCredential.user
    //     // ...
    //     setIsSignIn(true)
    //     console.log(userCredential)
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code
    //     var errorMessage = error.message
    //     // ..
    //     setError(errorMessage)
    //     console.log(errorMessage)
    //   })
  }
  return (
    <section>
      <div className="container py-5 login_area">
        <div className="signUp-form">
          <h3
            className="common-color text-center py-5"
            style={{ marginTop: '-110px' }}
          >
            SignUp
          </h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="common-titleColor">Enter Your Name</label>
              <input
                className="form-control"
                type="text"
                name="userName"
                placeholder="Enter UserName"
                {...register('userName', { required: true })}
              />
              {errors.userName && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="common-titleColor">Enter Your Email</label>
              <input
                className="form-control"
                type="email"
                name="email"
                placeholder="Enter UserName"
                {...register('email', { required: true })}
              />
              {errors.email && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <div className="mb-3">
              <label className="common-titleColor">Enter Your Password</label>
              <input
                className="form-control"
                type="password"
                name="password"
                placeholder="Enter Password"
                {...register('password', { required: true })}
              />
              {errors.password && (
                <span className="text-danger">This field is required</span>
              )}
            </div>
            <button type="submit" className="btn btn-primary">
              SignUp
            </button>
          </form>
          <p>
            Have an SignIn Account?
              <Link to="/SignIn">
                <button type="button" className="btn btn-primary">SignIn</button>
              </Link>
          </p>
          <p
            className={`${
              error ? 'text-danger' : isSignIn ? 'text-success' : ''
            }`}
          >
            {error ? error : isSignIn ? 'User Created Successfully' : ''}
          </p>
        </div>
      </div>
    </section>
  )
}

export default SignUp;
