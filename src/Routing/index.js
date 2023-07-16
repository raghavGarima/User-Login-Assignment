
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LoginComp } from "../components/Pages/Login/index";
import {MainFile} from '../components/Pages/Home/index'
import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      

      <Outlet />
    </>
  )
};



export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LoginComp />} />
          <Route path="home" element={<MainFile />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}