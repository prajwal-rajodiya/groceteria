import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import AllOrders from "../components/AllOrders";
import Login from "../components/Login";
import AddProduct from "./AddProduct";
import Admin from "./Admin";
import AdminAllProductsList from "./AdminAllProductsList";
import AdminManage from "./AdminManage";
import AllUserList from "./AllUserList";
import DeleteProduct from "./DeleteProduct";
import FeedbackList from "./FeedbackList";
import ModifyProduct from "./ModifyProduct";
import UsersManage from "./UsersManage";
import ViewFeedback from "./ViewFeedback";

function AdminLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => {
    if (sessionStorage.getItem("role") !== "admin") {
      navigate("/login");
      return null;
    }
  }, []);
  if (sessionStorage.getItem("role") !== "admin") {
    return null;
  }
  switch (location.pathname) {
    case "/adminManage":
      return <AdminManage />;

    case "/adminlogin":
      return <Admin />;

    case "/allProductsList":
      return <AdminAllProductsList />;

    case "/viewFeedback":
      return <ViewFeedback />;

    case "/userManage":
      return <UsersManage />;

    case "/addProduct":
      return <AddProduct />;

    case "/feedbackList":
      return <FeedbackList />;

    case "/modifyProduct":
      return <ModifyProduct />;

    case "/deleteProduct":
      return <DeleteProduct />;

    case "/allUsers":
      return <AllUserList />;

    case "/allOrders":
      return <AllOrders />;

    default:
      return <Login />;
  }
}
export default AdminLayout;
