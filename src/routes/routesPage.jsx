import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "../page/home";
import Login from "../page/login";

const RoutesPage = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Login />} path="/login" />
      <Route element={<Home />} path="/" />
    </>
  )
);

export default RoutesPage;
