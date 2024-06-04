import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import SubCarousel from "../components/SubCarousel/SubCarousel";
import SignIn from "../pages/SignInPage/SignIn";
import SignUp from "../pages/SignInPage/SignUp";
export const routes = [
  {
    path: "/",
    page: HomePage,
    isShowHeader: true,
  },
  {
    path: "/order",
    page: OrderPage,
    isShowHeader: true,
  },
  {
    path: "/signin",
    page: SignIn,
    isShowHeader: false,
  },
  {
    path: "/signup",
    page: SignUp,
    isShowHeader: false,
  },
  {
    path: "/shop",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/productdetail",
    page: ProductDetail,
    isShowHeader: true,
  },
  {
    path: "/product",
    page: ProductPage,
    isShowHeader: true,
  },
  {
    path: "/subcarousel",
    page: SubCarousel,
  },
  {
    path: "*",
    page: NotFoundPage,
  },
];
