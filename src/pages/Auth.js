import { useEffect } from "react";
import { useNavigate } from "react-router";

const Auth = ({ authenticate }) => {
  const navigate = useNavigate();
  useEffect(() => {
    authenticate();
    navigate("/anyRoute");
  }, []);
  return <h1>plxz Authenticate</h1>;
};
export default Auth;
