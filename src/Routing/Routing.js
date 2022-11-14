import React, { Suspense } from 'react'
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
// import About from '../Component/About/About'
import Login from '../Component/Authentication/Login/Login'
import Registration from '../Component/Authentication/Registration/Registration'
import Home from '../Component/Home/Home'
import PNF from '../Component/PageNotFound/PNF'
import Cats from '../Component/Products/Category/Cats'
import Details from '../Component/Products/Details/Details'
import GetAllProduct from '../Component/Products/GetAllProduct/GetAllProduct'
import SubCats from '../Component/Products/SubCategory/SubCats'
import UserDetails from '../Component/UserDetails/UserDetails'
import AddUser from '../Component/UserList/AddUser/AddUser'
import DeleteUser from '../Component/UserList/DeleteUser/DeleteUser'
import UpdateUser from '../Component/UserList/UpdateUser/UpdateUser'
// import UserList from '../Component/UserList/UserList'
import Footer from '../Layout/Footer/Footer'
import Header from '../Layout/Header/Header'
import { Spinner } from 'react-bootstrap'
import ProtectRouting from './ProtectRouting'


const About = React.lazy(() => import('../Component/About/About'));
// const UserList = React.lazy(() => import('../Component/UserList/UserList'));

const UserList = React.lazy(() => {
  return new Promise(resolve => {
    setTimeout(() => resolve(import('../Component/UserList/UserList')), 1000);
  })
})

export default function Routing() {
  return (
    <Router>
      <Header />
      <Suspense fallback={
        <center>
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </center>}>
        <Routes>
          {/* Default page */}
          <Route path="" element={<Home />} />

          {/* Protected Component */}
          <Route element = {<ProtectRouting />}>
            <Route path="/about_page" element={<About />} />
            <Route path="/category_page" element={<Cats />} />
            <Route path="/all_products" element={<GetAllProduct />} />
            <Route path="/user_list" element={<UserList />} />
          </Route>
          {/* Protected Component */}

          <Route path="/sub_category/:name" element={<SubCats />} />
          <Route path="/details/:name/:id" element={<Details />} />
          <Route path="/user_details/:fname/:lname" element={<UserDetails />} />
          <Route path="/register_form" element={<Registration />} />
          <Route path="/login_form" element={<Login />} />
          <Route path="/add_user" element={<AddUser />} />
          <Route path="/delete_user/:id" element={<DeleteUser />} />
          <Route path="/edit_user/:id" element={<UpdateUser />} />

          {/* Page not found */}
          <Route path="*" element={<PNF />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  )
}
