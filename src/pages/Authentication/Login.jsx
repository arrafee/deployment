import { useNavigate } from "react-router-dom";
import Input from "../../components/Form/components/Input";
import { useState } from "react";
const Login = () => {
  const navigate = useNavigate();
  const [inputLogin, setInputLogin] = useState({
    email: "",
    password: "",
  });
  const [errorMsg, setErrorMsg] = useState({
    email: "",
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setInputLogin({
      ...inputLogin,
      [name]: value,
    });

    if (name == "email") {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          email: "Email tidak boleh kosong",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          email: "",
        });
      }
    } else {
      if (value === "") {
        setErrorMsg({
          ...errorMsg,
          password: "Password tidak boleh kosong",
        });
      } else {
        setErrorMsg({
          ...errorMsg,
          password: "",
        });
      }
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();

    localStorage.setItem("isLoggedIn", true);
    alert("Login Successfully");
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-md-6">
            <div className="card px-4">
              <div className="card-body">
                <h3 className="card-title text-center">Login Page</h3>
                <div className="form mt-5">
                  <form action="/login" method="POST">
                    <div className="mb-4">
                      <Input
                        type="email"
                        className="form-control rounded-pill p-1"
                        name="email"
                        id="email"
                        label="Email"
                        value={inputLogin.email}
                        onChange={(e) => onChangeInput(e)}
                        // placeholder="Email"
                        // required=""
                        // defaultValue=""
                      />
                      <small className="text-danger">{errorMsg.email}</small>
                    </div>
                    <div className="mb-3">
                      <Input
                        type="password"
                        className="form-control rounded-pill p-1"
                        name="password"
                        id="password"
                        required=""
                        label="Password"
                        value={inputLogin.password}
                        onChange={(e) => onChangeInput(e)}
                      />
                      <small className="text-danger">{errorMsg.password}</small>
                    </div>
                    <div className="d-grid gap-2">
                      <button
                        type="button"
                        name="submit"
                        className="btn btn-primary mt-4 rounded-pill p-1"
                        onClick={(e) => handleLogin(e)}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <p className="text-center">
                <small>
                  Or{" "}
                  <a href="/register" className="text-decoration-none">
                    Create an account
                  </a>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
