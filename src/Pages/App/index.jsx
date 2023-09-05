import { useRoutes, BrowserRouter } from "react-router-dom";
import { shoppingCarProvider } from "../../Context";
import Home from "../Home";
import MyAccount from "../MyAccount/Index";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NotFound from "../NotFound";
import SingIn from "../SingIn";
import { Navbar } from "../../Components/Navbar";
import "./App.css";

const AppRoutes = () => {
  let router = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/my-account",
      element: <MyAccount />,
    },
    {
      path: "/my-order",
      element: <MyOrder />,
    },
    {
      path: "/my-orders",
      element: <MyOrders />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/sign-in",
      element: <SingIn />,
    },
  ]);
  return router;
};

function App() {
  return (
    <shoppingCarProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </shoppingCarProvider>
  );
}

export default App;
