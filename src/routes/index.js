import HomePage from "../pages/HomePage/HomePage";
import ProductPage from "../pages/ProductPage/ProductPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import SubCarousel from "../components/SubCarousel/SubCarousel";
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
    page: ProductPage,
    isShowHeader: true,
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
