import "./HomeClassic.css";
import Post from "./Post";
import Event from "./Event";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
import { Link } from "react-router-dom";
const HomeClassic = () => {
  return (
    <>
      <header className="navbar-light bg-light fixed-top  z-index">
        <nav class="navbar navbar-icon navbar-expand-lg ">
          <div class="container-fluid p-0">
            <a
              class="btn text-secondary py-0 me-sm-3 sidebar-start-toggle"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              href="#javascript-void"
            >
              <i class="bi bi-justify-left fs-3 lh-1"></i>
            </a>
            <Link class="navbar-brand" to="/">
              <img
                class="light-mode-item navbar-brand-item"
                src="https://social.webestica.com/assets/images/logo.svg"
                alt="logo"
              />
            </Link>
            <button
              class="navbar-toggler ms-auto icon-md btn btn-light p-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-animation">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <ul class="navbar-nav navbar-nav-scroll mx-auto text-capitalize font-size">
                <li class="nav-item">
                  <a class="nav-link active" href="#javascript-void">
                    {" "}
                    <i class="bi bi-house"></i>{" "}
                    <span class="nav-text"> Home </span>{" "}
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link" href="#javascript-void">
                    {" "}
                    <i class="bi bi-folder"></i>{" "}
                    <span class="nav-text"> Albums </span>{" "}
                  </a>
                </li>

                <li class="nav-item dropdown">
                  <a class="nav-link" href="#javascript-void">
                    {" "}
                    <i class="bi bi-people"></i>{" "}
                    <span class="nav-text"> Groups </span>{" "}
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#javascript-void">
                    <div class="badge-notif badge-notif-bottom"></div>
                    <i class="bi bi-chat-left"></i>{" "}
                    <span class="nav-text"> messaging </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#javascript-void">
                    <div class="badge-notif badge-notif-bottom"></div>
                    <i class="bi bi-bell"></i>{" "}
                    <span class="nav-text"> Notifications </span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#javascript-void">
                    {" "}
                    <i class="bi bi-ui-radios-grid"></i>{" "}
                    <span class="nav-text"> My network </span>{" "}
                  </a>
                </li>
              </ul>
            </div>
            <ul class="nav flex-nowrap align-items-center ms-auto list-unstyled">
              <li class="nav-item ms-2 dropdown nav-search">
                <a
                  class="nav-link btn icon-md p-0"
                  href="#javascript-void"
                  id="searchDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-search fs-5"> </i>
                </a>
                <div
                  class="dropdown-menu dropdown-animation dropdown-menu-end p-3 small"
                  aria-labelledby="searchDropdown"
                >
                  <div class="nav flex-nowrap align-items-center">
                    <div class="nav-item w-100">
                      <form class="rounded position-relative">
                        <input
                          class="form-control ps-5 bg-light"
                          type="search"
                          placeholder="Search..."
                          aria-label="Search"
                        />
                        <button
                          class="btn bg-transparent px-2 py-0 position-absolute top-50 start-0 translate-middle-y"
                          type="submit"
                        >
                          <i class="bi bi-search fs-5"> </i>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item ms-2 dropdown">
                <a
                  class="nav-link btn icon-md p-0"
                  href="#javascript-void"
                  id="profileDropdown"
                  role="button"
                  data-bs-auto-close="outside"
                  data-bs-display="static"
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
                      <i class="bi bi-gear fa-fw me-2"></i>Settings &amp;
                      Privacy
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
                    <a
                      class="dropdown-item bg-danger-soft-hover"
                      href="sign-in-advance.html"
                    >
                      <i class="bi bi-power fa-fw me-2"></i>Sign Out
                    </a>
                  </li>
                  <li>
                    {" "}
                    <hr class="dropdown-divider" />
                  </li>
                  <li>
                    <div class="modeswitch-item theme-icon-active d-flex justify-content-center gap-3 align-items-center p-2 pb-0">
                      <span>Mode:</span>
                      <button
                        type="button"
                        class="btn btn-modeswitch nav-link text-primary-hover mb-0 active"
                        data-bs-theme-value="light"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Light"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-sun fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"></path>
                          <use href="#"></use>
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="btn btn-modeswitch nav-link text-primary-hover mb-0"
                        data-bs-theme-value="dark"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Dark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-moon-stars fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"></path>
                          <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path>
                          <use href="#"></use>
                        </svg>
                      </button>
                      <button
                        type="button"
                        class="btn btn-modeswitch nav-link text-primary-hover mb-0"
                        data-bs-theme-value="auto"
                        data-bs-toggle="tooltip"
                        data-bs-placement="top"
                        data-bs-title="Auto"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          class="bi bi-circle-half fa-fw mode-switch"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"></path>
                          <use href="#"></use>
                        </svg>
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      <div class="container-fluid p-0">
        <div class="row justify-content-between g-0">
          <div class="col-md-2 col-lg-3 col-xxl-4 mt-n4">
            {/* <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
            >
              Enable body scrolling
            </button> */}

            <div
              class="offcanvas offcanvas-start"
              data-bs-scroll="true"
              data-bs-backdrop="false"
              tabindex="-1"
              id="offcanvasScrolling"
              aria-labelledby="offcanvasScrollingLabel"
            >
              <div class="offcanvas-body">
                <div class="nav-sidenav p-4 bg-light h-100 ">
                  <ul class="nav nav-link-secondary flex-column fw-bold gap-2">
                    <li class="nav-item">
                      <a class="nav-link" href="my-profile.html">
                        {" "}
                        <i class="bi bi-card-checklist nav-icon"></i>{" "}
                        <span class="nav-text">Feed </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="my-profile-connections.html">
                        {" "}
                        <i class="bi bi-people nav-icon"></i>{" "}
                        <span class="nav-text">Connections </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="blog.html">
                        {" "}
                        <i class="bi bi-newspaper nav-icon"></i>{" "}
                        <span class="nav-text">Latest News </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="events.html">
                        {" "}
                        <i class="bi bi-calendar-event-fill nav-icon"></i>{" "}
                        <span class="nav-text">Events </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="groups.html">
                        {" "}
                        <i class="bi bi-collection-fill nav-icon"></i>{" "}
                        <span class="nav-text">Groups </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="notifications.html">
                        {" "}
                        <i class="bi bi-bell-fill nav-icon"></i>{" "}
                        <span class="nav-text">Notifications </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="settings.html">
                        {" "}
                        <i class="bi bi-gear-wide-connected nav-icon"></i>{" "}
                        <span class="nav-text">Settings </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="albums.html">
                        {" "}
                        <i class="bi bi-images nav-icon"></i>{" "}
                        <span class="nav-text">Photos </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="celebration.html">
                        {" "}
                        <i class="bi bi-bookmark-heart-fill nav-icon"></i>{" "}
                        <span class="nav-text">Celebration </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="post-videos.html">
                        {" "}
                        <i class="bi bi-camera-reels nav-icon"></i>{" "}
                        <span class="nav-text">Video </span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="messaging.html">
                        {" "}
                        <i class="bi bi-chat-left-text nav-icon"></i>{" "}
                        <span class="nav-text">Messaging </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Main content START */}
          <div class="col-md-8 col-lg-6 col-xxl-4 vstack gap-1 mt-5 pt-5">
            <div className="row ">
              <div className="col-3 align-items-center justify-content-center text-center">
                <a
                  className="stretched-link btn btn-dark rounded-circle icon-md1"
                  href="/"
                >
                  <i className="bi bi-plus icon-2 align-items-center justify-content-center text-center"></i>
                </a>
                <h6 className="mt-2 mb-0 small">Post a Story</h6>
              </div>
              <div className="col-8 p-0">
                <div
                  className="scrolling-wrapper row flex-row flex-nowrap "
                  id="style-scroll"
                >
                  <div className="col p-1 align-items-center justify-content-center text-center">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img1} className="story2" alt="img1"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Carolyn Ortiz
                      </a>
                    </div>
                  </div>
                  <div className="col p-1">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img2} className="story2" alt="img2"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Judy Nguyen
                      </a>
                    </div>
                  </div>
                  <div className="col p-1">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img3} className="story2" alt="img3"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Billy Vasquez
                      </a>
                    </div>
                  </div>
                  <div className="col p-1">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img4} className="story2" alt="img4"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Amanda reed
                      </a>
                    </div>
                  </div>
                  <div className="col p-1">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img5} className="story2" alt="img5"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Lori Stevens
                      </a>
                    </div>
                  </div>
                  <div className="col p-1">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img6} className="story2" alt="img6"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Samuel Bishop
                      </a>
                    </div>
                  </div>
                  <div className="col p-1">
                    <div className="position-relative">
                      <a className="item-link" href="/">
                        <span className="item-preview2">
                          <img src={img7} className="story2" alt="img7"></img>
                        </span>
                      </a>
                    </div>
                    <div className="overflow-hidden contact-name">
                      <a
                        className="mb-0 h6 small text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Joan Wallace
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Event></Event>
            <Post></Post>
          </div>
          {/* Right sidebar START */}
          <div class="col-md-2 col-lg-3 col-xxl-4">
            <div class="sidebar-end p-4 bg-light h-100">
              <div class="sidebar-end-alignment d-flex justify-content-center flex-column">
                {/* Right sidebar toggle */}
                <div class="d-flex gap-2 align-items-center">
                  <a
                    class="btn p-0 text-secondary sidebar-end-toggle d-none d-lg-flex"
                    href="#javascript-void"
                  >
                    <i class="bi bi-justify-left fs-3"></i>
                  </a>
                  <h5 class="contact-title mb-0">Contacts</h5>
                </div>
                <form class="contact-search rounded position-relative">
                  <input
                    class="form-control bg-light"
                    type="search"
                    placeholder="Search..."
                    aria-label="Search"
                  />
                </form>
                <ul class="list-unstyled">
                  <li
                    class="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
                    data-target="chatToast"
                  >
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/01.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Frances Guerrero{" "}
                      </a>
                    </div>
                    <div class=" ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-success"></i>{" "}
                    </div>
                  </li>
                  <li
                    class="mt-3 hstack gap-3 align-items-center position-relative toast-btn"
                    data-target="chatToast2"
                  >
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/02.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Lori Ferguson{" "}
                      </a>
                    </div>
                    <div class=" ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-success"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/placeholder.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Samuel Bishop{" "}
                      </a>
                    </div>
                    <div class=" ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-danger"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="	https://social.webestica.com/assets/images/avatar/09.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Louis Crawford{" "}
                      </a>
                    </div>
                    <div class="small ms-auto text-nowrap"> 20sec </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/04.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Dennis Barrett{" "}
                      </a>
                    </div>
                    <div class="ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-success"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-story1 avatar-xs p-0">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/05.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Judy Nguyen{" "}
                      </a>
                    </div>
                    <div class="ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-success"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/08.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Bryan Knight{" "}
                      </a>
                    </div>
                    <div class="ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-danger"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="	https://social.webestica.com/assets/images/avatar/10.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Jacqueline Miller{" "}
                      </a>
                    </div>
                    <div class=" small ms-auto text-nowrap"> 1min </div>
                  </li>

                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/11.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Amanda Reed{" "}
                      </a>
                    </div>
                    <div class=" small ms-auto text-nowrap"> 3min </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar avatar-xs">
                      <a href="#javascript-void">
                        <img
                          class="avatar-img rounded-circle"
                          src="https://social.webestica.com/assets/images/avatar/12.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 text-decoration-none"
                        href="#javascript-void"
                      >
                        Larry Lawson{" "}
                      </a>
                    </div>
                    <div class=" small ms-auto text-nowrap"> 1hrs </div>
                  </li>
                </ul>
                <h5 class="mt-3 contact-title">Groups</h5>
                <ul class="list-unstyled pb-5">
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="avatar">
                      <ul class="avatar-group avatar-group-four p-0">
                        <li class="avatar avatar-xxs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/01.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                        <li class="avatar avatar-xxs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/02.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                        <li class="avatar avatar-xxs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/03.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                        <li class="avatar avatar-xxs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/placeholder.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 stretched-link text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Frances, Lori, Amanda, Lawson{" "}
                      </a>
                    </div>
                    <div class=" ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-success"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="flex-shrink-0 avatar">
                      <ul class="avatar-group avatar-group-two d-inline-flex p-0">
                        <li class="avatar avatar-xs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/08.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                        <li class="avatar avatar-xs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/10.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    {/* Info */}
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 stretched-link text-truncate d-inline-block text-decoration-none"
                        href="#javascript-void"
                      >
                        Lawson, Knight{" "}
                      </a>
                    </div>
                    <div class=" ms-auto fs-3">
                      {" "}
                      <i class="bi bi-dot text-danger"></i>{" "}
                    </div>
                  </li>
                  <li class="mt-3 hstack gap-3 align-items-center position-relative">
                    <div class="flex-shrink-0 avatar">
                      <ul class="avatar-group avatar-group-three position-relative d-inline-flex ps-1 p-0">
                        <li class="avatar avatar-xs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/12.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                        <li class="avatar avatar-xs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/11.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                        <li class="avatar avatar-xs">
                          <a href="#javascript-void">
                            <img
                              class="avatar-img rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/04.jpg"
                              alt="avatar"
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div class="overflow-hidden contact-name">
                      <a
                        class="h6 mb-0 stretched-link text-truncate d-inline-block  text-decoration-none"
                        href="#javascript-void"
                      >
                        Miller, Joan, Vasquez, Ortiz{" "}
                      </a>
                    </div>
                    <div class=" small ms-auto text-nowrap"> 1min </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeClassic;
