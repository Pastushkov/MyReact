import { reduxForm } from "redux-form";
import { CreateField, Input } from "../common/FormControls/FormsControls";
import { required } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../state/authReducer";
import { Redirect } from "react-router";
import style from "../common/FormControls/FormsControls.module.css";
const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      {CreateField([required], "email", "email", Input)}
      {CreateField([required], "password", "password", Input, {
        type: "password",
      })}
      {CreateField(
        null,
        null,
        "rememberMe",
        Input,
        { type: "checkbox" },
        "remember Me"
      )}

      {captchaUrl && <img src={captchaUrl} alt="captcha" />}
      {captchaUrl &&
        CreateField([required], "Symbols from image", "captcha", Input)}

      {error && <div className={style.login_error}>{error}</div>}

      <button>Login</button>
    </form>
  );
};

const LoginReduxFrom = reduxForm({
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginReduxFrom captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  captchaUrl: state.auth.captchaUrl,
});

export default connect(mapStateToProps, { login })(Login);
