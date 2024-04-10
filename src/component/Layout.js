import { Outlet, Link } from "react-router-dom";
import "./Layout.css";
import img from "./images/img.svg";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
// import Button from "react-bootstrap/Button";
const Layout = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [signin, setSignIn] = useState(false);
  const handleCloseSignIn = () => setSignIn(false);
  const handleShowSignIn = () => setSignIn(true);
  const [signup, setSignUp] = useState(false);
  const handleCloseSignUp = () => setSignUp(false);
  const handleShowSignUp = () => setSignUp(true);
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-light fixed-top">
        <div class="container">
          <Link className="navbar-brand" to="/">
            <img
              src={img}
              className="light-mode-item navbar-brand-item"
              alt="img"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <form class="d-flex rounded position-relative" role="search">
              <input
                type="search"
                placeholder="Search"
                className="form-control ps-5 bg-light"
                aria-label="Search"
              />
              <button
                className="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y border-0"
                type="submit"
              >
                <i className="bi bi-search"></i>
              </button>
            </form>
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0 fw-bold">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle nav-link active"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Demo
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      className="text-decoration-none ms-2 nav-link fw-normal"
                      to="/"
                    >
                      Home default
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-decoration-none ms-2 nav-link fw-normal"
                      to="/homeclassic"
                    >
                      Home classic
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Home post
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Home video
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Home event
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Landing page
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      App download
                    </a>
                  </li>
                  <li>
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      <i className="bi bi-cloud-download-fill text-primary"></i>
                      Buy social!
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#!">
                      Albums
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Celebration
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Messaging
                    </a>
                  </li>
                  <li>
                    <a
                      class="nav-item text-decoration-none ms-2 nav-link fw-normal"
                      href="#!"
                    >
                      Profile<i className="bi bi-plus float-end"></i>
                    </a>
                    <ul class="dropdown-menu  dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="#!">
                          Feed
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          About
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Connections
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Media
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          videos
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Events
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Activity
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Events
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Events 2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Events details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Events details 2
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Groups
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Group details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Post videos
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Post videos details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Posts details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Video details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Blog details
                    </a>
                  </li>
                  <li>
                    <hr />
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Dropdown levels<i className="bi bi-plus float-end"></i>
                    </a>
                    <ul class="dropdown-menu  dropdown-submenu">
                      <li>
                        <a class="dropdown-item" href="#!">
                          Dropdown item
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Dropdown item
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Dropdown (start)
                          <i className="bi bi-plus float-end"></i>
                        </a>
                        <ul className="dropdown-menu dropdown-submenu">
                          <li>
                            <a class="dropdown-item" href="#!">
                              Dropdown item
                            </a>
                          </li>
                          <li>
                            <a class="dropdown-item" href="#!">
                              Dropdown item
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="#!"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <Link
                      className="text-decoration-none ms-2 nav-link fw-normal"
                      to="/createpage"
                    >
                      Create a page
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-decoration-none ms-2 nav-link fw-normal"
                      to="/setting"
                    >
                      Settings
                    </Link>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Notifications
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Help center
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Help details
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Authentication<i className="bi bi-plus float-end"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-submenu">
                      <li>
                        <a
                          class="dropdown-item"
                          href="#!"
                          onClick={handleShowSignIn}
                        >
                          Sign in
                        </a>
                        <Modal
                          show={signin}
                          onHide={() => handleCloseSignIn(false)}
                          aria-labelledby="example-modal-sizes-title-signIn"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-signIn">
                              Welcome Back
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div class="card card-body p-4 p-sm-5 mt-sm-n5 mb-n5">
                              <h2 class="h1 mb-2 d-flex justify-content-center">
                                Sign in
                              </h2>
                              <p>
                                Don't have an account?
                                <a href="sign-up.html">
                                  {" "}
                                  Click here to sign up
                                </a>
                              </p>
                              <form class="mt-4">
                                <div class="mb-3  input-group-lg">
                                  <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Enter email"
                                    required=""
                                  />
                                </div>
                                <div class="mb-3">
                                  <div class="input-group input-group-lg">
                                    <input
                                      class="form-control fakepassword"
                                      type="password"
                                      id="psw-input"
                                      placeholder="Enter new password"
                                    />
                                    <span class="input-group-text p-0">
                                      <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                    </span>
                                  </div>
                                </div>
                                <div class="mb-3 d-sm-flex justify-content-between">
                                  <div>
                                    <input
                                      type="checkbox"
                                      class="form-check-input"
                                      id="rememberCheck"
                                      required=""
                                    />
                                    <label
                                      class="form-check-label ms-1"
                                      for="rememberCheck"
                                    >
                                      Remember me?
                                    </label>
                                  </div>
                                  <a href="forgot-password.html">
                                    Forgot password?
                                  </a>
                                </div>
                                <div class="d-grid">
                                  <button
                                    type="submit"
                                    class="btn btn-lg btn-primary-soft"
                                  >
                                    Login
                                  </button>
                                </div>
                                <p class="mb-0 mt-3">
                                  ©2023{" "}
                                  <a href="https://www.webestica.com/">
                                    Webestica.
                                  </a>{" "}
                                  All rights reserved
                                </p>
                              </form>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#!"
                          onClick={handleShowSignUp}
                        >
                          Sign up
                        </a>
                        <Modal
                          show={signup}
                          onHide={() => handleCloseSignUp(false)}
                          aria-labelledby="example-modal-sizes-title-signup"
                        >
                          <Modal.Header closeButton>
                            <Modal.Title id="example-modal-sizes-title-signup">
                              Welcome Back
                            </Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div class="card card-body rounded-3 p-4 p-sm-5">
                              <div class="text-center">
                                <h1 class="mb-2">Sign up</h1>
                                <span class="d-block">
                                  Already have an account?{" "}
                                  <a href="sign-in.html">Sign in here</a>
                                </span>
                              </div>
                              <form class="mt-4">
                                <div class="mb-3 input-group-lg">
                                  <input
                                    type="email"
                                    class="form-control"
                                    placeholder="Enter email"
                                  />
                                  <small>
                                    We'll never share your email with anyone
                                    else.
                                  </small>
                                </div>
                                <div class="mb-3 position-relative">
                                  <div class="input-group input-group-lg">
                                    <input
                                      class="form-control fakepassword"
                                      type="password"
                                      id="psw-input"
                                      placeholder="Enter new password"
                                    />
                                    <span class="input-group-text p-0">
                                      <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                    </span>
                                  </div>
                                  <div
                                    id="pswmeter"
                                    class="mt-2 password-strength-meter"
                                  >
                                    <div class="password-strength-meter-score"></div>
                                  </div>
                                  <div class="d-flex mt-1">
                                    <div id="pswmeter-message" class="rounded">
                                      Write your password...
                                    </div>
                                    <div class="ms-auto">
                                      <i
                                        class="bi bi-info-circle ps-1"
                                        data-bs-container="body"
                                        data-bs-toggle="popover"
                                        data-bs-placement="top"
                                        data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long."
                                        data-bs-original-title=""
                                        title=""
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                <div class="mb-3 input-group-lg">
                                  <input
                                    class="form-control"
                                    type="password"
                                    placeholder="Confirm password"
                                  />
                                </div>
                                <div class="mb-3 text-start">
                                  <input
                                    type="checkbox"
                                    class="form-check-input"
                                    id="keepsingnedCheck"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="keepsingnedCheck"
                                  >
                                    {" "}
                                    Keep me signed in
                                  </label>
                                </div>
                                <div class="d-grid">
                                  <button
                                    type="submit"
                                    class="btn btn-lg btn-primary"
                                  >
                                    Sign me up
                                  </button>
                                </div>
                                <p class="mb-0 mt-3 text-center">
                                  ©2022{" "}
                                  <a href="https://www.webestica.com/">
                                    Webestica.
                                  </a>{" "}
                                  All rights reserved
                                </p>
                              </form>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          href="#Javascript-void"
                          onClick={handleShow}
                        >
                          Frogot password
                        </a>
                        <Modal
                          show={show}
                          onHide={handleClose}
                          animation={false}
                          {...props}
                          size="lg"
                          aria-labelledby="contained-modal-title-vcenter"
                          centered
                        >
                          <Modal.Header closeButton>
                            <Modal.Title>Welcome Back</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            <div class="card card-body rounded-3 text-center">
                              <h1 class="mb-2">Forgot password?</h1>
                              <p>
                                Enter the email address associated with account.
                              </p>
                              <form class="mt-3">
                                <div class="mb-3">
                                  <div class="input-group input-group-lg">
                                    <input
                                      class="form-control fakepassword"
                                      type="password"
                                      id="psw-input"
                                      placeholder="Enter new password"
                                      required
                                    />
                                    <span class="input-group-text p-0">
                                      <i class="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                    </span>
                                  </div>
                                  <div
                                    id="pswmeter"
                                    class="mt-2 password-strength-meter"
                                  >
                                    <div class="password-strength-meter-score"></div>
                                  </div>
                                  <div class="d-flex mt-1">
                                    <div id="pswmeter-message" class="rounded">
                                      Write your password...
                                    </div>
                                    <div class="ms-auto">
                                      <i
                                        class="bi bi-info-circle ps-1"
                                        data-bs-container="body"
                                        data-bs-toggle="popover"
                                        data-bs-placement="top"
                                        data-bs-content="Include at least one uppercase, one lowercase, one special character, one number and 8 characters long."
                                        data-bs-original-title=""
                                        title=""
                                      ></i>
                                    </div>
                                  </div>
                                </div>
                                {/* Back to sign in */}
                                <div class="mb-3">
                                  <p>
                                    Back to <a href="sign-in.html">Sign in</a>
                                  </p>
                                </div>
                                <div class="d-grid">
                                  <button
                                    type="submit"
                                    class="btn btn-lg btn-primary"
                                  >
                                    Reset password
                                  </button>
                                </div>
                                <p class="mb-0 mt-3">
                                  ©2023{" "}
                                  <a href="https://www.webestica.com/">
                                    Webestica.
                                  </a>{" "}
                                  All rights reserved
                                </p>
                              </form>
                            </div>
                          </Modal.Body>
                        </Modal>
                      </li>
                      <li>
                        <hr />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Sign in advance
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Sign up advance
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          Frogot password advance
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Error 404
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Offline
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#!">
                      Privacy & terms
                    </a>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
                <Link
                  class="nav-link text-decoration-none text-black fw-bold nav-link"
                  to="/mynetwork"
                >
                  My network
                </Link>
              </li>
            </ul>
          </div>
          <button className="btn bg-gray change me-lg-2 me-md-none">
            <Link to="/messages" className="setting">
              <i className="bi bi-chat-left-text-fill"></i>
            </Link>
          </button>
          <button className="btn bg-gray change me-lg-2 me-md-none">
            <Link to="/setting" className="setting">
              <i className="bi bi-gear-fill"></i>
            </Link>
          </button>
          <button className="btn bg-gray change position-relative d-inline-block me-lg-2 me-md-none">
            <i
              className="bi bi-bell-fill"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            ></i>
            <span
              bg="secondary"
              className="position-absolute top-0 start-100 p-2 translate-middle bg-danger border border-light rounded-circle"
            ></span>
            <span className="visually-hidden">New alerts</span>
            <div
              className="dropdown-menu dropdown-menu-end p-0 shadow-lg border-0 dropdown-menu-size-md"
              aria-labelledby="notifDropdown"
              data-bs-popper="static"
            >
              <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h6 className="m-0">
                    Notifications{" "}
                    <span className="badge bg-danger bg-opacity-10 text-danger ms-2">
                      4 new
                    </span>
                  </h6>
                  <a className="small" href="#!">
                    Clear all
                  </a>
                </div>
                <div className="card-body p-0">
                  <ul className="list-group list-group-flush list-unstyled p-2">
                    <li>
                      <div className="list-group-item rounded d-flex border-0 mb-1 p-3 badge-unread">
                        <div className="avatar text-center d-none d-sm-inline-block">
                          <img
                            className="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/01.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ms-sm-3">
                          <div className=" d-flex">
                            <p className="small mb-2">
                              <b>Judy Nguyen</b> sent you a friend request.
                            </p>
                            <p className="small ms-3 text-nowrap">Just now</p>
                          </div>
                          <div className="d-flex">
                            <button className="btn btn-sm py-1 btn-primary me-2">
                              Accept{" "}
                            </button>
                            <button className="btn btn-sm py-1 btn-danger-soft">
                              Delete{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="rounded badge-unread d-flex border-0 mb-1 p-3 position-relative">
                        <div className="avatar text-center d-none d-sm-inline-block">
                          <img
                            className="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/02.jpg"
                            alt=""
                          />
                        </div>
                        <div className="ms-sm-3 d-flex">
                          <div>
                            <p className="small mb-2">
                              Wish <b>Amanda Reed</b> a happy birthday (Nov 12)
                            </p>
                            <button className="btn btn-sm btn-outline-light py-1 me-2">
                              Say happy birthday 🎂
                            </button>
                          </div>
                          <p className="small ms-3">2min</p>
                        </div>
                      </div>
                    </li>

                    <li>
                      <a
                        href="#!"
                        className="list-group-item list-group-item-action rounded d-flex border-0 mb-1 p-3"
                      >
                        <div className="avatar text-center d-none d-sm-inline-block bg-success rounded-circle">
                          <span className="text-light position-absolute top-50 start-50 translate-middle fw-bold">
                            WB
                          </span>
                        </div>
                        <div className="ms-sm-3">
                          <div className="d-flex">
                            <p className="small mb-2">
                              Webestica has 15 like and 1 new activity
                            </p>
                            <p className="small ms-3">1hr</p>
                          </div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#!"
                        className="list-group-item list-group-item-action rounded d-flex border-0 p-3 mb-1"
                      >
                        <div className="avatar text-center d-none d-sm-inline-block">
                          <img
                            className="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/logo/12.svg"
                            alt=""
                          />
                        </div>
                        <div className="ms-sm-3 d-flex">
                          <p className="small mb-2">
                            <b>Bootstrap in the news:</b> The search giant’s
                            parent company, Alphabet, just joined an exclusive
                            club of tech stocks.
                          </p>
                          <p className="small ms-3">4hr</p>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="card-footer text-center">
                  <a href="#!" className="btn btn-sm btn-primary-soft">
                    See all incoming activity
                  </a>
                </div>
              </div>
            </div>
          </button>
          <ul class="list-unstyled mb-0">
            <li class="nav-item ms-2 dropdown">
              <a
                class="nav-link btn icon-md p-0 show"
                href="#javascript-void"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  class="avatar-img rounded-2"
                  src="https://social.webestica.com/assets/images/avatar/07.jpg"
                  alt=""
                />
              </a>
              <ul
                class="dropdown-menu dropdown-animation dropdown-menu-end pt-3 small me-md-n3"
                aria-labelledby="profileDropdown"
                data-bs-popper="static"
              >
                <li class="px-3">
                  <div class="d-flex align-items-center position-relative">
                    <div class="avatar me-3">
                      <img
                        class="avatar-img rounded-circle"
                        src="https://social.webestica.com/assets/images/avatar/07.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a class="h6 stretched-link" href="#javascript-void">
                        Lori Ferguson
                      </a>
                      <p class="small m-0">Web Developer</p>
                    </div>
                  </div>
                  <a
                    class="dropdown-item btn btn-primary-soft btn-sm my-2 text-center"
                    href="my-profile.html"
                  >
                    View profile
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="settings.html">
                    <i class="bi bi-gear fa-fw me-2"></i>Settings &amp; Privacy
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="#javascript-void"
                    target="_blank"
                  >
                    <i class="fa-fw bi bi-life-preserver me-2"></i>Support
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item"
                    href="docs/index.html"
                    target="_blank"
                  >
                    <i class="fa-fw bi bi-card-text me-2"></i>Documentation
                  </a>
                </li>
                <li class="dropdown-divider"></li>
                <li>
                  <Link
                    class="dropdown-item bg-danger-soft-hover"
                    to="/signinpage"
                  >
                    <i class="bi bi-power fa-fw me-2"></i>Sign Out
                  </Link>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <div class="theme-icon-active d-flex justify-content-center gap-3 align-items-center p-2 pb-0">
                    <span>Mode:</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="d-none">
                      <symbol id="check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                      </symbol>
                      <symbol id="circle-half" viewBox="0 0 16 16">
                        <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z" />
                      </symbol>
                      <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                        <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
                        <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z" />
                      </symbol>
                      <symbol id="sun-fill" viewBox="0 0 16 16">
                        <path d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                      </symbol>
                    </svg>

                    <div class="dropdown bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                      <button
                        class="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                        id="bd-theme"
                        type="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        aria-label="Toggle theme (auto)"
                      >
                        <svg
                          class="bi my-1 theme-icon-active"
                          width="1em"
                          height="1em"
                        >
                          <use href="#circle-half"></use>
                        </svg>
                        <span class="visually-hidden" id="bd-theme-text">
                          Toggle theme
                        </span>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end shadow"
                        aria-labelledby="bd-theme-text"
                      >
                        <li>
                          <button
                            type="button"
                            class="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="light"
                            aria-pressed="false"
                          >
                            <svg
                              class="bi me-2 opacity-50"
                              width="1em"
                              height="1em"
                            >
                              <use href="#sun-fill"></use>
                            </svg>
                            Light
                            <svg
                              class="bi ms-auto d-none"
                              width="1em"
                              height="1em"
                            >
                              <use href="#check2"></use>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="dropdown-item d-flex align-items-center"
                            data-bs-theme-value="dark"
                            aria-pressed="false"
                          >
                            <svg
                              class="bi me-2 opacity-50"
                              width="1em"
                              height="1em"
                            >
                              <use href="#moon-stars-fill"></use>
                            </svg>
                            Dark
                            <svg
                              class="bi ms-auto d-none"
                              width="1em"
                              height="1em"
                            >
                              <use href="#check2"></use>
                            </svg>
                          </button>
                        </li>
                        <li>
                          <button
                            type="button"
                            class="dropdown-item d-flex align-items-center active"
                            data-bs-theme-value="auto"
                            aria-pressed="true"
                          >
                            <svg
                              class="bi me-2 opacity-50"
                              width="1em"
                              height="1em"
                            >
                              <use href="#circle-half"></use>
                            </svg>
                            Auto
                            <svg
                              class="bi ms-auto d-none"
                              width="1em"
                              height="1em"
                            >
                              <use href="#check2"></use>
                            </svg>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Layout;
