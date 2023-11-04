import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Register = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("");
  const navigate = useNavigate();

  let isProcced = true;
  let errorMessage = "Please Enter The Value In ";
  const vaildCondition = (value: string, name: string) => {
    if (value === null || value === "") {
      isProcced = false;
      errorMessage += name;
    }
  };

  const isVaildate = () => {
    vaildCondition(id, "username");

    vaildCondition(name, " Fullname");

    vaildCondition(password, " Password");

    vaildCondition(email, " Email");

    if (!isProcced) {
      toast.warning(errorMessage);
    } else {
      if (
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email) &&
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
      ) {
      } else {
        isProcced = false;
        toast.warning("Please Enter a Vaild Email or Password");
      }
    }
    return isProcced;
  };

  const handlesubmit = (e: any) => {
    if (isVaildate()) {
      e.preventDefault();
      const regObj = {
        id,
        name,
        email,
        password,
        phone,
        country,
        address,
        gender,
      };

      fetch("http://localhost:5000/posts", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(regObj),
      })
        .then(() => {
          toast.success("registered successfully");
          navigate("/");
        })
        .catch((err) => {
          toast.error("failed :" + err.message);
        });
    }
  };
  return (
    <div>
      <div className="">
        <form
          className="container border p-4 shadow-2xl mb-6"
          onSubmit={handlesubmit}
        >
          <div className="card bg-blue-400">
            <div className="card-header">
              <h1 className="text-center font-black my-4 text-white pt-6">
                User Registeration
              </h1>
            </div>
            <div className="card-body">
              <div className="row flex justify-center items-center flex-col">
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="p-2 block text-white">
                      User Name <span className="errmsg mr-2">*</span>
                    </label>
                    <input
                      value={id}
                      onChange={(e) => setId(e.target.value)}
                      className="form-control border p-2"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="p-2 block text-white">
                      Password <span className="errmsg mr-2">*</span>
                    </label>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      className="form-control border p-2"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="block text-white">
                      Full Name <span className="errmsg mr-2">*</span>
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="form-control border p-2"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="block text-white">
                      Email <span className="errmsg mr-2">*</span>
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="form-control border p-2"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="block text-white">
                      Phone <span className="errmsg mr-2"></span>
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="form-control border p-2"
                    ></input>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group mb-2">
                    <label className="block text-white">
                      Country <span className="errmsg mr-2">*</span>
                    </label>
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="form-control border pl-2 py-2 pr-24"
                    >
                      <option value="india">India</option>
                      <option value="usa">USA</option>
                      <option value="singapore">Singapore</option>
                    </select>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label className="block text-white">Address</label>
                    <textarea
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="form-control p-2 outline-none resize-none"
                    ></textarea>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="form-group">
                    <label className="block text-white">Gender</label>
                    <br></br>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label className="text-white ml-2">Male</label>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => setGender(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check ml-2"
                    ></input>
                    <label className="text-white ml-2">Female</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="card-footer flex justify-center items-center gap-6 my-5">
              <button
                type="submit"
                className="py-2 px-8 bg-green-600 text-white mb-2"
              >
                Register
              </button>{" "}
              |
              <Link to={"/"} className="py-2 px-8 bg-white text-blue-600 mb-2">
                Close
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
