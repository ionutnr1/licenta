import Navbar from "./componente/Navbar/Navbar";
import Footer from "./componente/Footer/Footer";
import Home from "./pagini/home/Home";
import React from "react";
import Anunt from "./pagini/anunt/Anunt";
import Comenzi from "./pagini/comenzi/Comenzi";
import Anunturi from "./pagini/anunturi/Anunturi";
import Add from "./pagini/addanunt/Add";
import Mesaje from "./pagini/mesaje/Mesaje";
import Login from "./pagini/login/Login";
import Register from "./pagini/register/Register";
import Anuntadm from "./pagini/anuntadm/Anuntadm";
import Mesajpriv from "./pagini/mesajpriv/Mesajpriv";
import "./app.scss"
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

function App() {

  const queryClient = new QueryClient()

  const Layout = () =>{
    return(
      <div className="principal">
      <QueryClientProvider client={queryClient}>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      </QueryClientProvider>
      </div>
      );
  }

  const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },

      {
        path:"/anunt/:id",
        element:<Anunt/>
      },

      {
        path:"/comenzi",
        element:<Comenzi/>
      },

      {
        path:"/anunturi",
        element:<Anunturi/>
      },

      {
        path:"/addanunt",
        element:<Add/>
      },

      {
        path:"/mesaje",
        element:<Mesaje/>
      },

      {
        path:"/login",
        element:<Login/>
      },

      {
        path:"/register",
        element:<Register/>
      },

      {
        path:"anuntadm",
        element:<Anuntadm/>
      },

      {
        path:"/mesajpriv/:id",
        element:<Mesajpriv/>
      },
    ]
  },
]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
