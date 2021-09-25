import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import React, { createContext, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/home/Header/Header'
import Home from './components/home/Home/Home'
import ProductDetails from './components/home/Service/ProductDetails'
import Admin from './pages/Admin/Admin/Admin'
import AddProduct from './pages/Admin/AdminPages/AddProduct/AddProduct'
import SignUp from './pages/Login/Login/SignUp'
export const UserContext = createContext()
function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
          </Route>
          <Route path="/LogIn" component={SignUp}>
            <Header navbar-bg={true} />
            <SignUp />
          </Route>
          <Route path="/product/:id" component={ProductDetails}>
            <Header navbar_bg={true} />
            <ProductDetails />
          </Route>

          {/* .... Admin routing.... */}
          <Route path="/addProduct" component={AddProduct}>
            <Admin />
            <AddProduct />
          </Route>
          <Route path="/admin" component={Admin}>
            <Admin />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  )
}

export default App
