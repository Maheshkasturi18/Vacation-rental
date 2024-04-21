import React from "react";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div
            className=" navbar-collapse d-flex justify-content-between"
            id="navbarTogglerDemo01"
          >
            <a className="navbar-brand poppins-medium fs-4" href="#">
              <span className="text-92">S</span>he
              <span className="text-92">S</span>hare
            </a>

            <div className="d-flex gap-md-3 gap-1 poppins-light ">
              <button
                className="btn p-1 py-md-1 px-md-3 bttn"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
              >
                Register
              </button>
              <button className="btn p-1 py-md-1 px-md-3 bttn" type="button">
                LogIn
              </button>

              {/* register */}
              <div
                className="modal fade"
                id="exampleModalToggle"
                aria-hidden="true"
                data-bs-backdrop="static"
                aria-labelledby="exampleModalToggleLabel"
                tabindex="-1"
              >
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                  <div className="modal-content">
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn-close p-2"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body ">
                      <form action="" className=" px-1">
                        <div className="mb-3 d-grid">
                          <label htmlFor="Username">Username</label>
                          <input
                            type="text"
                            name="Username"
                            id="Username"
                            className="p-1"
                            required
                          />
                        </div>
                        <div className="mb-3 d-grid">
                          <label htmlFor="Email">Email</label>
                          <input
                            type="email"
                            name="Email"
                            id="Email"
                            className="p-1"
                            required
                          />
                        </div>
                        <div className="mb-4 d-grid">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="p-1"
                            id="password"
                            required
                          />
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn bttn p-1 py-md-1 px-md-3"
                          >
                            Register
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer border-0 fs-13 text-end">
                      Already have an account?
                      <button
                        className="border-0 bg-transparent text-92 "
                        data-bs-target="#exampleModalToggle2"
                        data-bs-toggle="modal"
                      >
                        LogIn
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* login */}
              <div
                className="modal fade"
                id="exampleModalToggle2"
                aria-hidden="true"
                data-bs-backdrop="static"
                aria-labelledby="exampleModalToggleLabel2"
                tabindex="-1"
              >
                <div className="modal-dialog modal-dialog-centered justify-content-center">
                  <div className="modal-content ">
                    <div className="modal-header border-0">
                      <button
                        type="button"
                        className="btn-close p-2"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <form action="" className=" px-1">
                        <div className="mb-3 d-grid">
                          <label htmlFor="Email">Email</label>
                          <input
                            type="email"
                            name="Email"
                            id="Email"
                            className="p-1"
                            required
                          />
                        </div>
                        <div className="mb-4 d-grid">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            name="password"
                            className="p-1"
                            id="password"
                            required
                          />
                          <span className="text-end text-secondary-emphasis fs-13">
                            forgot password?
                          </span>
                        </div>
                        <div className="d-flex justify-content-end">
                          <button
                            type="submit"
                            className="btn bttn p-1 py-md-1 px-md-3"
                          >
                            LogIn
                          </button>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer border-0 fs-13 text-end">
                      Dont have an account?
                      <button
                        className="border-0 bg-transparent text-92"
                        data-bs-target="#exampleModalToggle"
                        data-bs-toggle="modal"
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
