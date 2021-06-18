import LoginForm from "./LoginForm";
import { reduxForm } from "redux-form";

const LoginReduxFrom = reduxForm({
  form: "login",
})(LoginForm);

const onSubmit=(formData)=>{
  console.log(formData);
}

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxFrom onSubmit={onSubmit}/>
    </div>
  );
};

export default Login;
