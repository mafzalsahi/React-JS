import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/login.jsx'
import Protected from './components/authLayout.jsx'
import Home from './pages/home.jsx'
import Signup from './components/signup.jsx'
import AllPosts from './pages/allPosts.jsx'
import AddPost from './pages/addPost.jsx'
import EditPost from './pages/editPost.jsx'
import Post from './pages/post.jsx'

const router=createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/login',
      element:(<Protected authentication={false}>
        <Login/>
      </Protected>)
    },
    {
      path:'/signup',
      element:(<Protected authentication={false}>
        <Signup/>
      </Protected>)
    },
    {
      path:'/all-posts',
      element:(<Protected authentication>
        {" "}
        <AllPosts/>
      </Protected>)
    },
    
    {
    path:'/add-post',
    element:(<Protected authentication>
      {" "}
      <AddPost/>
    </Protected>)
  },
  {
    path:'/edit-post/:slug',
    element:(<Protected authentication>
      {" "}
      <EditPost/>
    </Protected>)
  },
  {
    path:'/post/:slug',
    element:(<Protected authentication>
      {" "}
      <Post/>
    </Protected>)
  },
  
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
