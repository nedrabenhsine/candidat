import axios from "axios";
import { useState } from "react";
import "./index.css";

const Signup = () => {
  const [data, setData] = useState({
    firstname: "",
    username: "",
    lastname: "",
    password: "",
    adress: "",
    telephone: "",
    role: 3,
  });
  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:5000/users`, data)
      .then((res) => {
        window.location = "/login";
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <div class="header">
      <div class="inner-header flex">
        <section>
          <div className="row">
            <div className="col-4 mx-auto ">
              <div className="mt-1">
                <div className="pb-0 text-left ">
                  <img
                    class="size-96 company-logo bg-white"
                    alt="company logo"
                    _v-ab01d028=""
                    src="https://img.jobi.tn/0796ce39-f07d-bf64-07c0-d2eb7c00ca22/version/crop/50x50/0-0/"
                  />
                  <h3 className="font-weight-bolder text-info text-gradient mb-1">
                    Welcome back
                  </h3>
                  <p className="mb-2">
                    remplissez le formulaire pour vous inscrire
                  </p>
                </div>
                <div className="">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <label>prénom</label>
                        <div className="mb-1">
                          <input
                            type="lastname"
                            className="form-control"
                            placeholder="lastname"
                            aria-label="lastname"
                            name="lastname"
                            onChange={handleChange}
                          />
                        </div>
                        <label>nom</label>
                        <div className="mb-1">
                          <input
                            type="firstname"
                            className="form-control"
                            placeholder="firstname"
                            aria-label="firstname"
                            name="firstname"
                            onChange={handleChange}
                          />
                        </div>
                        <label>email</label>
                        <div className="mb-1">
                          <input
                            type="username"
                            className="form-control"
                            placeholder="username"
                            aria-label="username"
                            name="username"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      <div className="col">
                        <label>adress</label>
                        <div className="mb-1">
                          <input
                            type="adress"
                            className="form-control"
                            placeholder="adress"
                            aria-label="adress"
                            name="adress"
                            onChange={handleChange}
                          />
                        </div>
                        <label>téléphone mobile</label>
                        <div className="mb-1">
                          <input
                            type="telephone"
                            className="form-control"
                            placeholder="telephone"
                            aria-label="telephone"
                            name="telephone"
                            onChange={handleChange}
                          />
                        </div>
                        <label>mot de passe</label>
                        <div className="mb-1">
                          <input
                            type="password"
                            className="form-control"
                            placeholder="Password"
                            name="password"
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="text-center">
                      <button
                        type="submit"
                        className="btn bg-info w-100 mt-1 mb-0 text-white"
                      >
                        Sign in
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div className="text-center pt-0 px-lg-2 px-1">
                  <p className="mb-4 text-sm mx-auto">
                    Don't have an account?
                    <a
                      href="javascript:;"
                      className="text-info text-gradient font-weight-bold"
                    >
                      Sign up
                    </a>
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>
    </div>
  );
};
export default Signup;
