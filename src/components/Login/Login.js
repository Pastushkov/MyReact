import { reduxForm, Field } from "redux-form";
import { Input } from "../common/FormControls/FormsControls";
import { required } from "../../utils/validators/validators";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[required]} placeholder={"Login"} name={"login"} component={Input} />
      </div>
      <div>
        <Field validate={[required]} placeholder={"Password"} component={Input} name={"password"} />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxFrom = reduxForm({
  form: "login",
})(LoginForm);

const onSubmit = (formData) => {
  console.log(formData);
};

const Login = (props) => {
  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxFrom onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
