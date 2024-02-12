import { LoginContainer } from "../Components/Login/LoginContainer";
import { LoginHeader } from "../Components/Login/LoginHeader";
import { LoginMain } from "../Components/Login/LoginMain";
import "../Components/Login/login.css";
const Login = () => {
  return (
    <LoginContainer>
      <LoginHeader></LoginHeader>
      <LoginMain></LoginMain>
    </LoginContainer>
  );
};

export default Login;
