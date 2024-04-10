import Story from "./Story";
import Profile from "./Profile";
import Event from "./Event";
import Post from "./Post";
const Demo = () => {
  return (
    <>
      <div class="container mt-5 pt-4 ">
        <div className="row">
          <div className="d-none d-md-none d-lg-block col-lg-3">
            <Profile />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-none">
            <div class="d-flex align-items-center mb-2 mt-2 d-lg-none">
              <button
                class="border-0 bg-transparent"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <span class="btn btn-primary">
                  <i class="bi bi-sliders"></i>
                </span>
                <span class="h6 mb-0 fw-bold d-lg-none ms-2">Settings</span>
              </button>
            </div>
            <div
              class="offcanvas offcanvas-start w-75"
              tabindex="-1"
              id="offcanvasExample"
              aria-labelledby="offcanvasExampleLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasExampleLabel">
                  Offcanvas
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body p-0">
                <Profile />
              </div>
            </div>
            <Story />
            <Event />
            <Post />
          </div>
          <div className="col-lg-3">
            {/* <Profile /> */}
            <div class="row g-4">
              <div class="col-sm-6 col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header pb-0 border-0">
                    <h5 class="card-title mb-0">Who to follow</h5>
                  </div>

                  <div class="card-body">
                    <div class="hstack gap-2 mb-3">
                      <div class="avatar">
                        <a href="#!">
                          <img
                            class="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/04.jpg"
                            alt=""
                          />
                        </a>
                      </div>

                      <div class="overflow-hidden">
                        <a class="h6 mb-0 text-decoration-none" href="#!">
                          Judy Nguyen{" "}
                        </a>
                        <p class="mb-0 small text-truncate">News anchor</p>
                      </div>

                      <a
                        class="btn btn-primary-soft rounded-circle icon-md ms-auto"
                        href="#!"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </a>
                    </div>

                    <div class="hstack gap-2 mb-3">
                      <div class=" avatar-story">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar1 rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/05.jpg"
                            alt=""
                          />{" "}
                        </a>
                      </div>

                      <div class="overflow-hidden">
                        <a class="h6 mb-0 text-decoration-none" href="#!">
                          Amanda Reed{" "}
                        </a>
                        <p class="mb-0 small text-truncate">Web Developer</p>
                      </div>

                      <a
                        class="btn btn-primary-soft rounded-circle icon-md ms-auto"
                        href="#!"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </a>
                    </div>

                    <div class="hstack gap-2 mb-3">
                      <div class="avatar">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/11.jpg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div class="overflow-hidden">
                        <a class="h6 mb-0 text-decoration-none" href="#!">
                          Billy Vasquez{" "}
                        </a>
                        <p class="mb-0 small text-truncate">News anchor</p>
                      </div>
                      <a
                        class="btn btn-primary rounded-circle icon-md ms-auto"
                        href="#!"
                      >
                        <i class="bi bi-person-check-fill"> </i>
                      </a>
                    </div>
                    <div class="hstack gap-2 mb-3">
                      <div class="avatar">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/01.jpg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      {/* Title */}
                      <div class="overflow-hidden">
                        <a class="h6 mb-0 text-decoration-none" href="#!">
                          Lori Ferguson{" "}
                        </a>
                        <p class="mb-0 small text-truncate">
                          Web Developer at Webestica
                        </p>
                      </div>
                      {/* Button */}
                      <a
                        class="btn btn-primary-soft rounded-circle icon-md ms-auto"
                        href="#!"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </a>
                    </div>
                    <div class="hstack gap-2 mb-3">
                      <div class="avatar">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar-img rounded-circle p-0"
                            src="	https://social.webestica.com/assets/images/avatar/placeholder.jpg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div class="overflow-hidden">
                        <a class="h6 mb-0 text-decoration-none" href="#!">
                          Carolyn Ortiz{" "}
                        </a>
                        <p class="mb-0 small text-truncate">News anchor</p>
                      </div>
                      <a
                        class="btn btn-primary-soft rounded-circle icon-md ms-auto"
                        href="#!"
                      >
                        <i class="bi bi-plus-lg"></i>
                      </a>
                    </div>
                    <div class="d-grid mt-3">
                      <a class="btn btn-sm btn-primary-soft" href="#!">
                        View more
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-md-12 col-lg-12">
                <div class="card">
                  <div class="card-header pb-0 border-0">
                    <h5 class="card-title mb-0 fw-bold">Today’s news</h5>
                  </div>
                  <div class="card-body">
                    <div class="mb-3">
                      <h6 class="mb-0 fw-bold">
                        <a href="blog-details.html">
                          Ten questions you should answer truthfully
                        </a>
                      </h6>
                      <small>2hr</small>
                    </div>
                    <div class="mb-3">
                      <h6 class="mb-0 fw-bold">
                        <a href="blog-details.html">
                          Five unbelievable facts about money
                        </a>
                      </h6>
                      <small>3hr</small>
                    </div>
                    <div class="mb-3">
                      <h6 class="mb-0 fw-bold">
                        <a href="blog-details.html">
                          Best Pinterest Boards for learning about business
                        </a>
                      </h6>
                      <small>4hr</small>
                    </div>
                    <div class="mb-3">
                      <h6 class="mb-0 fw-bold">
                        <a href="blog-details.html">
                          Skills that you can learn from business
                        </a>
                      </h6>
                      <small>6hr</small>
                    </div>
                    <a
                      href="#!"
                      role="button"
                      class="btn btn-link btn-link-loader btn-sm text-decoration-none text-black d-flex align-items-center"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div class="spinner-dots me-2">
                        <span class="spinner-dot"></span>
                        <span class="spinner-dot"></span>
                        <span class="spinner-dot"></span>
                      </div>
                      View all latest news
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Demo;
