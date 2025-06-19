import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Movie from "./pages/Movie";
import MovieDetail from "./component/UI/MovieDetail";
import Animedetail from "./component/UI/Animedetail";
import Applayout from "./component/layout/Applayout";
import Errorpages from "./component/layout/Errorpages";
import { ProtectedRoute } from "./pages/Protected";
import Login from "./pages/login";
import { useEffect, useState } from "react";
import Anime from "./pages/Anime";
import Subscrip from "./pages/subscrip";
import Subscrips from "./pages/subscrips";
import Wishlist from "./component/UI/wishlist";
import { toast } from 'react-toastify';
import { Loading } from "./pages/loading"; 

function App() {
  const [add, setadd] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); 

  const addtowishlist = (data, type) => {
    const unquie = `${type}-${data.id}`;
    const unquie2 = { ...data, id: unquie };

    setadd((wish) => {
      const exist = wish.some((item) => item.id === unquie);
      if (exist) {
        toast.error("Your movie is already in your wishlist");
        return wish;
      } else {
        toast.success("Your movie is added to your wishlist");
        const updatedWishlist = [...wish, unquie2];
        localStorage.setItem('wishlist', JSON.stringify(updatedWishlist)); 
        return updatedWishlist;
      }
    });
  };

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(authStatus);

    const storedWishlist = localStorage.getItem('wishlist');
    if (storedWishlist) {
      setadd(JSON.parse(storedWishlist)); 
    }
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isAuthenticated ? <Applayout /> : <Navigate to="/login" replace />,
      errorElement: <Errorpages /> ,
      children: [
        { path: "/", element: <Navigate to="/home" replace /> },
        { path: "/home", element: <ProtectedRoute><Movie /></ProtectedRoute> },
        { path: "/home/:movieID", element: <ProtectedRoute><MovieDetail addtowishlist={(data) => addtowishlist(data, "movie")} /></ProtectedRoute> },
        { path: "/anime", element: <ProtectedRoute><Anime /></ProtectedRoute> },
        { path: "/wishlist", element: <ProtectedRoute><Wishlist add={add} setadd={setadd} /></ProtectedRoute> },
        { path: "/anime/:id", element: <ProtectedRoute><Animedetail addtowishlist={(data) => addtowishlist(data, "anime")} /></ProtectedRoute> },
        { path: "/subscrip/:ids", element: <ProtectedRoute><Subscrip /></ProtectedRoute> },
        { path: "/subscrips/:movie", element: <ProtectedRoute><Subscrips /></ProtectedRoute> }
      ],
    },
    { path: "/login", element: isAuthenticated ? <Navigate to="/home" replace /> : <Login /> },
  ]);


  if (loading) {
    return <Loading />;
  }

  return <RouterProvider router={router} />;
}

export default App;
