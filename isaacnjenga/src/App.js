import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Resume from "./pages/resume";
import About from "./pages/about";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import axios from "axios";

//axios.defaults.baseURL = "http://localhost:3001/injenga"; //local
axios.defaults.baseURL = "https://portfolio-back-pink.vercel.app/injenga"; //deployed
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/resume",
    element: <Resume />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  { path: "/portfolio", element: <Portfolio /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
