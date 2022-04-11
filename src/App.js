import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminLayout from "./admin/AdminLayout";
import Aboutus from "./components/AboutUs";
import AllOrders from "./components/AllOrders";
import Cart from "./components/Cart";
import CartNew from "./components/CartNew";
import Checkout from "./components/Checkout";
import Developedby from "./components/DevelopedBy";
import Faq from "./components/Faq";
import Feedback from "./components/Feedback";
import ForgotPassword from "./components/ForgotPassword";
import Login from "./components/Login";
import OrderDetails from "./components/OrderDetails";
import OtpVerification from "./components/OtpVerification";
import PlaceOrder from "./components/PlaceOrder";
import ProductCategory from "./components/ProductCategory";
import Profile from "./components/Profile";
import Register from "./components/Register";
import TermsAndConditions from "./components/TermsAndConditions";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <ToastContainer></ToastContainer>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
          {/* admin Routes */}
          <Route path="/adminManage" element={<AdminLayout />} />
          <Route path="/adminlogin" element={<AdminLayout />} />
          <Route path="/allProductsList" element={<AdminLayout />} />
          <Route path="/viewFeedback" element={<AdminLayout />} />
          <Route path="/userManage" element={<AdminLayout />} />
          <Route path="/addProduct" element={<AdminLayout />} />
          <Route path="/feedbackList" element={<AdminLayout />} />
          <Route path="/modifyProduct" element={<AdminLayout />} />
          <Route path="/deleteProduct" element={<AdminLayout />} />
          <Route path="/allUsers" element={<AdminLayout />} />

          {/* User Routes */}
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/orderDetail" element={<OrderDetails />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/otp-verification" element={<OtpVerification />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/termsandconditions" element={<TermsAndConditions />} />
          <Route path="/productCategory" element={<ProductCategory />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/developeby" element={<Developedby />} />
          <Route path="/cartNew" element={<CartNew />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeOrder" element={<PlaceOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/allOrders" element={<AllOrders />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/orderDetails" element={<OrderDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
