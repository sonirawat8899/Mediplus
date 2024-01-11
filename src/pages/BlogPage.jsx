import React from 'react'
import Breadcrumbs from '../BlogComponents/Breadcrumbs'
import SignalNews from '../BlogComponents/SignalNews'
import Registration from '../BlogComponents/Registration'
import Login from '../BlogComponents/Login'
import Users from '../BlogComponents/Users'

import ForgetPassword from '../BlogComponents/ForgetPassword'
import CreateNewPassword from '../BlogComponents/CreateNewPassword'
import Profile from '../BlogComponents/Profile'



const BlogPage = () => {
  return (
    <div>

       <Breadcrumbs/>
       <SignalNews/>
       <Registration/>
       <Login/>
       <Users/>
      <ForgetPassword/>
      <CreateNewPassword/>
      <Profile/>
   
    </div>
  )
}

export default BlogPage