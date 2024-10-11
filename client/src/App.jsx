import Navbar from './components/navbar/Navbar'
import HomePage from './routes/homePage/HomePage'
import Layout from './routes/layout/Layout';
import ListPage from './routes/listPage/ListPage'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import SinglePage from './routes/SinglePage/SinglePage';


function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
        {
          path:"/",
          element: <HomePage/>,
        },
        {
          path:"/list",
          element: <ListPage/>
        },
        {
          path:"/:id",
          element: <SinglePage/>
        }
      ]
    }
  ]);
  return (
    
    <RouterProvider router={router} />
  )
}

export default App