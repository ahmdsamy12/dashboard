import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    sessionStorage.clear();
  }, []);

  const ProceedLogin = (e: any) => {
    e.preventDefault();

    if (vaildate()) {
      fetch("http://localhost:5000/posts/" + username)
        .then((res) => {
          return res.json();
        })
        .then((resp) => {
          if (Object.keys(resp).length === 0) {
            toast.error("Please Enter valid username");
          } else {
            if (resp.password === password) {
              toast.success("Success");
              sessionStorage.setItem("username", username);
              navigate("/products");
            } else {
              toast.error("Please Enter valid credentials");
            }
          }
        })
        .catch((err) => {
          toast.error("Login Failed due to :" + err.message);
        });
    }
  };

  const vaildate = () => {
    let result = true;

    if (username === null || username === "") {
      result = false;
      toast.warning("Please Enter username");
    }

    if (password === null || password === "") {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="row">
      <div className="" style={{ marginTop: "50px" }}>
        <form
          onSubmit={ProceedLogin}
          className="container p-10 border shadow-2xl bg-white mb-8"
        >
          <div className="card bg-blue-400 p-4 w-full flex flex-col justify-center items-center shadow-fuchsia-600">
            <div className="card-header my-4">
              <h2 className="text-center font-black text-white">User Login</h2>
            </div>
            <div className="card-body mb-10">
              <div className="form-group my-10">
                <label className="block text-white">
                  User Name <span className="errmsg">*</span>
                </label>
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="form-contro border py-2 pl-2 pr-10  outline-none"
                ></input>
              </div>
              <div className="form-group mb-4">
                <label className="block text-white">
                  Password <span className="errmsg">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="form-control py-2 pl-2 pr-10 outline-none border"
                ></input>
              </div>
            </div>
            <div className="card-footer text-white ml-2 mb-10 font-black">
              <button
                type="submit"
                className="py-2 px-6 bg-green-400 text-white"
              >
                Login
              </button>{" "}
              |
              <Link
                className="ml-2 py-2 px-6  bg-white text-blue-500"
                to={"/register"}
              >
                New User
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
