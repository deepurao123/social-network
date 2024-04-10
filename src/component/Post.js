import avtar1 from "./images/avtar1.jpg";
import post from "./images/post.jpg";
import img8 from "./images/img8.jpg";
import "./Post.css";
//Import necessary modules and styles
import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
const Post = () => {
  // Carousel options
  const options = {
    items: 3,
    margin: 10,
    loop: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 4,
      },
    },
  };

  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col">
            <div className="card mt-3">
              <div className="card-header">
                <div cassName="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar-story me-2">
                      <a href="#!">
                        <img
                          src={avtar1}
                          className="avatar1 rounded-circle p-0"
                          alt="avtar1"
                        ></img>
                      </a>
                    </div>
                    <div>
                      <div className="nav">
                        <h6 className="nav-item fw-bold ">
                          <a href="#!"> Lori Ferguson </a>
                        </h6>
                        <span className="nav-item small content"> 2hr</span>
                      </div>
                      <p className="mb-0 small">Web Developer at Webestica</p>
                    </div>
                    <div className="dropdown ms-auto">
                      <button
                        className=" bg-gray rounded-2 py-1 px-2 border-0"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-three-dots"></i>
                      </button>
                      <ul class="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-bookmark fa-fw pe-2"></i>Save
                            post
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-person-x fa-fw pe-2"></i>
                            Unfollow lori ferguson
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-x-circle fa-fw pe-2"></i>Hide
                            post
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-slash-circle fa-fw pe-2"></i>
                            Block
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-flag fa-fw pe-2"></i>Report post
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="deepu">
                  <p className="mt-3">
                    I'm thrilled to share that I've completed a graduate
                    certificate course in project management with the
                    president's honor roll.
                  </p>
                  <div className="bg-black post">
                    <img src={post} className="post1" alt="post"></img>
                  </div>

                  <ul className="nav nav-stack py-3 small">
                    <li className="nav-item">
                      <a className="nav-link active" href="#!">
                        <i class="bi bi-hand-thumbs-up-fill pe-1"></i>Liked (56)
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#!">
                        <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                      </a>
                    </li>
                    <li className="nav-item dropdown ms-sm-auto">
                      <button
                        className="nav-link mb-0 "
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i className="bi bi-reply-fill flip-horizontal "></i>
                        Share (3)
                      </button>
                      <ul className="dropdown-menu dropdown-menu-end">
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-envelope fa-fw pe-2"></i>Send
                            via Direct Message
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                            Bookmark
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-link fa-fw pe-2"></i>Copy link
                            to post
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-share fa-fw pe-2"></i>Share post
                            via …
                          </a>
                        </li>
                        <li>
                          <hr className="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#!">
                            <i className="bi bi-pencil-square fa-fw pe-2"></i>
                            Share to News Feed
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="d-flex mb-3">
                  <div className="avatar me-2 ">
                    <a href="#!">
                      <img
                        className="avatar-img rounded-circle"
                        src={img8}
                        alt="img8"
                      />
                    </a>
                  </div>
                  <form className="nav nav-item w-100 position-relative">
                    <textarea
                      className="form-control pe-5 bg-body-secondary"
                      rows="1"
                      placeholder="Add a comment..."
                    ></textarea>
                    <button
                      className="nav-link bg-transparent px-3 position-absolute top-50 end-0 translate-middle-y border-0"
                      type="submit"
                    >
                      <i className="bi bi-send-fill"> </i>
                    </button>
                  </form>
                </div>
                <div className="comment">
                  <ul className="comment-wrap list-unstyled">
                    <li className="comment-item">
                      <div className="d-flex position-relative">
                        <div className="avatar avatar-xs">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle "
                              src="https://social.webestica.com/assets/images/avatar/05.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="ms-2">
                          <div className="bg-body-secondary rounded-start-top-0 p-3 rounded">
                            <div className="d-flex justify-content-between">
                              <h6 className="mb-1">
                                <a href="#!"> Frances Guerrero </a>
                              </h6>
                              <small className="ms-2">5hr</small>
                            </div>
                            <p className="small mb-0">
                              Removed demands expense account in outward tedious
                              do. Particular way thoroughly unaffected
                              projection.
                            </p>
                          </div>
                          <ul className="nav nav-divider py-2 small">
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Like (3)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Reply
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                View 5 replies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <ul className="comment-item-nested list-unstyled ms-5">
                        <li className="comment-item">
                          <div className="d-flex">
                            <div className="avatar2 avatar-xs">
                              <a href="#!">
                                <img
                                  className="avt rounded-circle"
                                  src="https://social.webestica.com/assets/images/avatar/06.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="ms-2">
                              <div className="bg-body-secondary p-3 rounded">
                                <div className="d-flex justify-content-between">
                                  <h6 className="mb-1">
                                    <a href="#!"> Lori Stevens </a>
                                  </h6>
                                  <small className="ms-2">2hr</small>
                                </div>
                                <p className="small mb-0">
                                  See resolved goodness felicity shy civility
                                  domestic had but Drawings offended yet
                                  answered Jennings perceive.
                                </p>
                              </div>
                              <ul className="nav nav-divider py-2 small">
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">
                                    Like (5)
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">
                                    Reply
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                        <li className="comment-item">
                          <div className="d-flex">
                            <div className=" avatar2 avatar-xs">
                              <a href="#!">
                                <img
                                  className="avt rounded-circle"
                                  src="https://social.webestica.com/assets/images/avatar/07.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <div className="ms-2">
                              <div className="bg-body-secondary p-3 rounded">
                                <div className="d-flex justify-content-between">
                                  <h6 className="mb-1">
                                    <a href="#!"> Billy Vasquez </a>
                                  </h6>
                                  <small className="ms-2">15min</small>
                                </div>
                                <p className="small mb-0">
                                  Wishing calling is warrant settled was lucky.
                                </p>
                              </div>
                              <ul className="nav nav-divider py-2 small">
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">
                                    Like
                                  </a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" href="#!">
                                    Reply
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </li>
                      </ul>
                      <a
                        href="#!"
                        role="button"
                        class="btn btn-link btn-link-loader btn-sm text-black d-flex align-items-center mb-3 ms-5 text-decoration-none"
                        data-bs-toggle="button"
                        aria-pressed="true"
                      >
                        <div className="spinner-dots me-2">
                          <span className="spinner-dot"></span>
                          <span className="spinner-dot"></span>
                          <span className="spinner-dot"></span>
                        </div>
                        Load more replies...
                      </a>
                    </li>
                    <li className="comment-item">
                      <div className="d-flex">
                        <div className="avatar2 avatar-xs">
                          <a href="#!">
                            <img
                              className="avt rounded-circle"
                              src="https://social.webestica.com/assets/images/avatar/05.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <div className="ms-2">
                          <div className="bg-body-secondary p-3 rounded">
                            <div className="d-flex justify-content-between">
                              <h6 className="mb-1">
                                <a href="#!"> Frances Guerrero </a>
                              </h6>
                              <small className="ms-2">4min</small>
                            </div>
                            <p className="small mb-0">
                              Removed demands expense account in outward tedious
                              do. Particular way thoroughly unaffected
                              projection.
                            </p>
                          </div>
                          <ul className="nav nav-divider pt-2 small">
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Like (1)
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                Reply
                              </a>
                            </li>
                            <li className="nav-item">
                              <a className="nav-link" href="#!">
                                View 6 replies
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className=" border-0 p-0 bg-none">
                  <a
                    href="#!"
                    role="button"
                    className="btn btn-link btn-link-loader btn-sm text-black d-flex align-items-center text-decoration-none"
                    data-bs-toggle="button"
                    aria-pressed="true"
                  >
                    <div class="spinner-dots me-2">
                      <span className="spinner-dot"></span>
                      <span className="spinner-dot"></span>
                      <span className="spinner-dot"></span>
                    </div>
                    Load more comments
                  </a>
                </div>
              </div>
            </div>
            <div className="card mt-4">
              {/* Card header START */}
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <a href="#!">
                        <img
                          className="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/logo/12.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <h6 className=" mb-0">
                        <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/">
                          Bootstrap: Front-end framework
                        </a>
                      </h6>
                      <a
                        href="#!"
                        className="mb-0 text-body text-decoration-none"
                      >
                        Sponsored
                        <i
                          className="bi bi-info-circle ps-1"
                          data-bs-container="body"
                          data-bs-toggle="popover"
                          data-bs-placement="top"
                          data-bs-content="You're seeing this ad because your activity meets the intended audience of our site."
                        ></i>
                      </a>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      href="#!"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardShareAction2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction2"
                    >
                      <li>
                        <a className="dropdown-item" href="#!" alt="">
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!" alt="">
                          <i className="bi bi-person-x fa-fw pe-2"></i>
                          Unfollow lori ferguson
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!" alt="">
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!" alt="">
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>
                          Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  Quickly design and customize responsive mobile-first sites
                  with Bootstrap.
                </p>
              </div>
              <img
                src="	https://social.webestica.com/assets/images/post/3by2/02.jpg"
                alt=""
              />
              <div className="card-footer border-0 d-flex justify-content-between align-items-center">
                <p className="mb-0">Currently v5.1.3 </p>
                <button className="btn btn-primary-soft btn-sm " href="#!">
                  Download now
                </button>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <a href="#!">
                        <img
                          className="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/avatar/04.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">
                        <a href="#!"> Judy Nguyen </a>
                      </h6>
                      <div className="nav nav-divider">
                        <p className="nav-item mb-0 small">
                          Web Developer at Webestica
                        </p>
                        <span
                          className="nav-item small "
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Tooltip on top"
                        >
                          <i class="bi bi-globe"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="dropdown">
                    <button
                      href="#!"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2 border-0"
                      id="cardShareAction3"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </button>
                    <ul
                      className="dropdown-menu dropdown-menu-end "
                      aria-labelledby="cardShareAction3"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow
                          lori ferguson
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p>
                  I'm so privileged to be involved in the
                  <a href="#!">@bootstrap </a>hiring process! Interviewing with
                  their team was fun and I hope this can be a valuable resource
                  for folks! <a href="#!"> #inclusivebusiness</a>
                  <a href="#!"> #internship</a> <a href="#!"> #hiring</a>
                  <a href="#!"> #apply </a>
                </p>
                <div className="d-flex justify-content-between">
                  <div className="row g-3">
                    <div className="col-6">
                      <a
                        className="h-100"
                        href="#!"
                        data-glightbox=""
                        data-gallery="image-popup"
                      >
                        <img
                          src="https://social.webestica.com/assets/images/post/1by1/03.jpg"
                          className="rounded img-fluid"
                          alt=""
                        />
                      </a>
                    </div>
                    <div className="col-6">
                      <a href="/" data-glightbox="" data-gallery="image-popup">
                        <img
                          src="https://social.webestica.com/assets/images/post/3by2/01.jpg"
                          className="rounded img-fluid"
                          alt=""
                        />
                      </a>
                      <div className="position-relative bg-dark mt-3 rounded">
                        <div className="hover-actions-item position-absolute top-50 start-50 translate-middle z-index-9">
                          <a
                            className=" text-white text-decoration-none"
                            href="#!"
                          >
                            View all
                          </a>
                        </div>
                        <a
                          href="assets/images/post/3by2/02.jpg"
                          data-glightbox=""
                          data-gallery="image-popup"
                        >
                          <img
                            className="img-fluid opacity-50 rounded"
                            src="https://social.webestica.com/assets/images/post/3by2/02.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-stack py-3 small">
                  <li className="nav-item">
                    <a className="text-decoration-none text-dark" href="#!">
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                      Louis, Billy and 126 others
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="#!">
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
                <ul className="nav nav-pills nav-pills-light nav-fill nav-stack small border-top border-bottom py-1 mb-3">
                  <li className="nav-item">
                    <button className="nav-link mb-0 active">
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </button>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link mb-0"
                      id="cardShareAction4"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share (3)
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction4"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="#!">
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
                <ul className="comment-wrap list-unstyled">
                  <li className="comment-item">
                    <div className="d-flex">
                      <div className="avatar avatar-xs">
                        <a href="#!">
                          <img
                            className="avatar-img rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ms-2">
                        <div className="bg-body-secondary rounded-start-top-0 p-3 rounded">
                          <div className="d-flex justify-content-between">
                            <h6 className="mb-1">
                              <a href="#!"> Frances Guerrero </a>
                            </h6>
                            <small className="ms-2">5hr</small>
                          </div>
                          <p className="small mb-0">
                            Removed demands expense account in outward tedious
                            do. Particular way thoroughly unaffected projection.
                          </p>
                        </div>
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              Like (3)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              View 5 replies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="comment-item-nested list-unstyled ms-5">
                      <li className="comment-item">
                        <div className="d-flex">
                          <div className="avatar avatar-xs">
                            <a href="#!">
                              <img
                                className="avatar-img rounded-circle p-0"
                                src="https://social.webestica.com/assets/images/avatar/06.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="ms-2">
                            <div className="bg-body-secondary p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  <a href="#!"> Lori Stevens </a>
                                </h6>
                                <small className="ms-2">2hr</small>
                              </div>
                              <p className="small mb-0">
                                See resolved goodness felicity shy civility
                                domestic had but Drawings offended yet answered
                                Jennings perceive.
                              </p>
                            </div>
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  Like (5)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  Reply
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                      <li className="comment-item">
                        <div className="d-flex">
                          <div className="avatar avatar-xs">
                            <a href="#!">
                              <img
                                className="avatar-img rounded-circle p-0"
                                src="https://social.webestica.com/assets/images/avatar/07.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="ms-2">
                            <div className="bg-body-secondary p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  <a href="#!"> Billy Vasquez </a>
                                </h6>
                                <small className="ms-2">15min</small>
                              </div>
                              <p className="small mb-0">
                                Wishing calling is warrant settled was lucky.
                              </p>
                            </div>
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  Like
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#!">
                                  Reply
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                    <a
                      href="#!"
                      role="button"
                      className="btn btn-link btn-link-loader btn-sm text-dark text-decoration-none d-flex align-items-center mb-3 ms-5"
                      data-bs-toggle="button"
                      aria-pressed="true"
                    >
                      <div className="spinner-dots me-2">
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                        <span className="spinner-dot"></span>
                      </div>
                      Load more replies
                    </a>
                  </li>
                  <li className="comment-item">
                    <div className="d-flex">
                      <div className="avatar avatar-xs">
                        <a href="#!">
                          <img
                            className="avatar-img rounded-circle p-0"
                            src="	https://social.webestica.com/assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="ms-2">
                        <div className="bg-body-secondary p-3 rounded w-217">
                          <div className="d-flex ps-2">
                            <h6 className="mb-1">
                              <a href="#!"> Frances Guerrero </a>
                            </h6>
                            <small className="ms-2">4min</small>
                          </div>
                          <p className="small mb-0">(Congratulations:)</p>
                          <div className="card p-3 border border-2 rounded mt-2 shadow-none">
                            <img
                              src="https://social.webestica.com/assets/images/elements/12.svg"
                              alt=""
                            />
                          </div>
                        </div>
                        <ul className="nav nav-divider pt-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              Like (1)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              View 6 replies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="card-footer border-0 pt-0">
                <a
                  href="#!"
                  role="button"
                  className="btn btn-link btn-link-loader btn-sm text-dark text-decoration-none d-flex align-items-center"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <div className="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  Load More Coments
                </a>
              </div>
            </div>
            <div class="card mt-4">
              {/* Card header START */}
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <a href="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/logo/13.svg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    {/* Title */}
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="#!"> Apple Education </a>
                      </h6>
                      <p className="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  <a
                    href="#!"
                    class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction5"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction5"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow
                        lori ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body pb-0">
                <p>
                  Find out how you can save time in the classroom this year.
                  Earn recognition while you learn new skills on iPad and Mac.
                  Start recognition your first Apple Teacher badge today!
                </p>
                <ul className="nav nav-stack pb-2 small">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="#!">
                      {" "}
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="#!">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer py-3">
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="#!">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link mb-0"
                      id="cardShareAction6"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share (3)
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction6"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="#!">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header d-flex justify-content-between align-items-center border-0 pb-0">
                <h6 className="card-title mb-0">People you may know</h6>
                <button className="btn btn-sm btn-primary-soft">See all</button>
              </div>
              <div className="card-body h-300">
                <OwlCarousel className="owl-theme" {...options}>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="v">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="https://social.webestica.com/assets/images/avatar/12.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="https://social.webestica.com/assets/images/avatar/09.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="	https://social.webestica.com/assets/images/avatar/10.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="https://social.webestica.com/assets/images/avatar/11.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="https://social.webestica.com/assets/images/avatar/09.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="https://social.webestica.com/assets/images/avatar/12.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <div className="card shadow-none text-center">
                      <div className="card-body p-2 pb-0">
                        <div className="avatar3 avatar-story avatar-xl">
                          <a href="#!">
                            <img
                              className="avatar-img rounded-circle p-0"
                              src="https://social.webestica.com/assets/images/avatar/09.jpg"
                              alt=""
                            />
                          </a>
                        </div>
                        <h6 className="card-title mb-1 mt-3">
                          <a href="#!"> Larry Lawson </a>
                        </h6>
                        <p className="mb-0 small lh-sm">
                          33 mutual connections
                        </p>
                      </div>
                      <div className="card-footer p-2 border-0">
                        <button className="btn btn-sm btn-primary-soft w-100">
                          Add friend
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Add more items as needed  */}
                </OwlCarousel>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <a href="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/avatar/04.jpg"
                          alt="not found"
                        />{" "}
                      </a>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="#!"> All in the Mind </a>
                      </h6>
                      <p className="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction7"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction7"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow
                        lori ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body pb-0">
                <p>How do you protect your business against cyber-crime?</p>
                <div className="vstack gap-2">
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option"
                    />
                    <label
                      className="btn btn-outline-primary w-100"
                      for="option"
                    >
                      We have cybersecurity insurance coverage
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option2"
                    />
                    <label
                      className="btn btn-outline-primary w-100"
                      for="option2"
                    >
                      Our dedicated staff will protect us
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option3"
                    />
                    <label
                      className="btn btn-outline-primary w-100"
                      for="option3"
                    >
                      We give regular training for best practices
                    </label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      className="btn-check"
                      name="poll"
                      id="option4"
                    />
                    <label
                      className="btn btn-outline-primary w-100"
                      for="option4"
                    >
                      Third-party vendor protection
                    </label>
                  </div>
                </div>
                <ul className="nav nav-divider mt-2 mb-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      263 votes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      2d left
                    </a>
                  </li>
                </ul>
                <ul className="nav nav-stack pb-2 small mt-4">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="#!">
                      {" "}
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="#!">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer py-3">
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="#!">
                      {" "}
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link mb-0"
                      id="feedActionShare6"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share (3)
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare6"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="#!">
                      {" "}
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <a href="#!">
                        {" "}
                        <img
                          className="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/avatar/04.jpg"
                          alt=""
                        />{" "}
                      </a>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">
                        {" "}
                        <a href="#!"> All in the Mind </a>
                      </h6>
                      <p className="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  <a
                    href="#!"
                    className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction10"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction10"
                  >
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow
                        lori ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        {" "}
                        <i className="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="card-body pb-0">
                <p>How do you protect your business against cyber-crime?</p>
                <div className="card card-body mt-4">
                  <div className="d-sm-flex justify-content-sm-between align-items-center">
                    <span className="small">16/20 responded</span>
                    <span className="small">
                      Results not visible to participants
                    </span>
                  </div>
                  <div className="vstack gap-4 gap-sm-3 mt-3">
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="overflow-hidden w-100 me-3">
                        <div className="progress bg-primary bg-opacity-10 position-relative">
                          <div
                            className="progress-bar bg-primary bg-opacity-25 w-25"
                            role="progressbar"
                            aria-valuenow="25"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            We have cybersecurity insurance coverage{" "}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">25%</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="overflow-hidden w-100 me-3">
                        <div className="progress bg-primary bg-opacity-10 position-relative">
                          <div
                            className="progress-bar bg-primary bg-opacity-25 w-15"
                            role="progressbar"
                            aria-valuenow="15"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            Our dedicated staff will protect us
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">15%</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="overflow-hidden w-100 me-3">
                        <div className="progress bg-primary bg-opacity-10 position-relative">
                          <div
                            className="progress-bar bg-primary bg-opacity-25 w-10"
                            role="progressbar"
                            aria-valuenow="10"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            We give regular training for best practices
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">10%</div>
                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                      <div className="overflow-hidden w-100 me-3">
                        <div className="progress bg-primary bg-opacity-10 position-relative">
                          <div
                            className="progress-bar bg-primary bg-opacity-25 w-55"
                            role="progressbar"
                            aria-valuenow="55"
                            aria-valuemin="0"
                            aria-valuemax="100"
                          ></div>
                          <span className="position-absolute pt-1 ps-3 fs-6 fw-normal text-truncate w-100">
                            Third-party vendor protection
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0">55%</div>
                    </div>
                  </div>
                </div>
                <ul className="nav nav-divider mt-2 mb-0">
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      263 votes
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      2d left
                    </a>
                  </li>
                </ul>
                <ul className="nav nav-stack pb-2 small mt-4">
                  <li className="nav-item">
                    <a className="nav-link active text-secondary" href="#!">
                      <i className="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>
                      Louis, Billy and 126 others
                    </a>
                  </li>
                  <li className="nav-item ms-sm-auto">
                    <a className="nav-link" href="#!">
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer py-3">
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="#!">
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link mb-0"
                      id="feedActionShare8"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share (3)
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare8"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="#!">
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="card mt-4">
              <div className="card-header">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-2">
                      <a href="#!">
                        <img
                          className="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/logo/11.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <h6 className="card-title mb-0">
                        <a href="#!"> Webestica </a>
                      </h6>
                      <p className="small mb-0">9 December at 10:00 </p>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#!"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardShareAction8"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction8"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-person-x fa-fw pe-2"></i>Unfollow
                          lori ferguson
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <p className="mb-0">
                  The next-generation blog, news, and magazine theme for you to
                  start sharing your content today with beautiful aesthetics!
                  This minimal &amp; clean Bootstrap 5 based theme is ideal for
                  all types of sites that aim to provide users with content.
                  <a href="#!"> #bootstrap</a> <a href="#!"> #webestica </a>
                  <a href="#!"> #getbootstrap</a> <a href="#!"> #bootstrap5 </a>
                </p>
              </div>
              <a href="#!">
                <img
                  className="webtica"
                  src="https://social.webestica.com/assets/images/post/3by2/03.jpg"
                  alt=""
                />
              </a>
              <div className="card-body position-relative bg-light">
                <a href="#!" className="small stretched-link">
                  https://blogzine.webestica.com
                </a>
                <h6 className="mb-0 mt-1">
                  Blogzine - Blog and Magazine Bootstrap 5 Theme
                </h6>
                <p className="mb-0 small">
                  Bootstrap based News, Magazine and Blog Theme
                </p>
              </div>
              <div className="card-footer py-3">
                <ul className="nav nav-fill nav-stack small">
                  <li className="nav-item">
                    <a className="nav-link mb-0 active" href="#!">
                      <i className="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="#!">
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                  <li className="nav-item dropdown">
                    <a
                      href="#!"
                      className="nav-link mb-0"
                      id="feedActionShare7"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share (3)
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-end"
                      aria-labelledby="feedActionShare7"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link mb-0" href="#!">
                      <i className="bi bi-send-fill pe-1"></i>Send
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-3">
              <h6 class="mb-3">Suggested stories </h6>
              <OwlCarousel className="owl-theme" {...options}>
                <div className="item">
                  <div className="position-relative">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img5}
                          className="story w-100"
                          alt="img5"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Lori Stevens</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="position-relative">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img6}
                          className="story w-100"
                          alt="img6"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Carolyn Ortiz</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="position-relative">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img7}
                          className="story w-100"
                          alt="img7"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Carolyn Ortiz</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="position-relative">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img4}
                          className="story w-100"
                          alt="img4"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Billy Vasquez</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="position-relative">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img3}
                          className="story w-100"
                          alt="img3"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Billy Vasquez</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="position-relative">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img2}
                          className="story w-100"
                          alt="img2"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Judy Nguyen</strong>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="item">
                  <div className="position-relative ">
                    <a className="item-link" href="/">
                      <span className="item-preview-owl">
                        <img
                          src={img1}
                          className="story w-100"
                          alt="img1"
                        ></img>
                      </span>
                      <span className="info">
                        <strong className="name">Carolyn Ortiz</strong>
                      </span>
                    </a>
                  </div>
                </div>
              </OwlCarousel>
            </div>
            <div className="card mt-4">
              <div className="card-header border-0 pb-0">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className=" avatar-story me-2">
                      <a href="#!">
                        <img
                          className="avatar1 rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/avatar/12.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <div className="nav nav-divider">
                        <h6 className="nav-item card-title mb-0">
                          <a href="#!"> Joan Wallace </a>
                        </h6>
                        <span className="nav-item small"> 1day</span>
                      </div>
                      <p className="mb-0 small">12 January at 12:00</p>
                    </div>
                  </div>
                  <div className="dropdown">
                    <a
                      href="#!"
                      className="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                      id="cardFeedAction2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-three-dots"></i>
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardFeedAction2"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-bookmark fa-fw pe-2"></i>Save post
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                          ferguson
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-x-circle fa-fw pe-2"></i>Hide post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-slash-circle fa-fw pe-2"></i>Block
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          <i className="bi bi-flag fa-fw pe-2"></i>Report post
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="card-body pb-0">
                <p>
                  Comfort reached gay perhaps chamber his
                  <a href="#!">#internship</a> <a href="#!">#hiring</a>
                  <a href="#!">#apply</a>
                </p>
              </div>
              <div className="">
                <iframe
                  className="fullscreen-video"
                  width="100%"
                  height="360"
                  src="https://www.youtube.com/embed/1UUOMXGcPQI?si=KDWc2Nj0L9-7qmVF"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
              <div className="card-body pt-0">
                <ul className="nav nav-stack py-3 small">
                  <li className="nav-item">
                    <a className="nav-link active" href="#!">
                      {" "}
                      <i className="bi bi-hand-thumbs-up-fill pe-1"></i>Liked
                      (56)
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#!">
                      {" "}
                      <i className="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                  <li className="nav-item dropdown ms-sm-auto">
                    <a
                      className="nav-link mb-0"
                      href="#!"
                      id="cardShareAction9"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i className="bi bi-reply-fill flip-horizontal ps-1"></i>
                      Share (3)
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction9"
                    >
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-link fa-fw pe-2"></i>Copy link to
                          post
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-share fa-fw pe-2"></i>Share post
                          via …
                        </a>
                      </li>
                      <li>
                        <hr className="dropdown-divider" />
                      </li>
                      <li>
                        <a className="dropdown-item" href="#!">
                          {" "}
                          <i className="bi bi-pencil-square fa-fw pe-2"></i>
                          Share to News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="d-flex mb-3">
                  <div className="avatar avatar-xs me-2">
                    <a href="#!">
                      <img
                        className="rounded-circle p-0"
                        src="https://social.webestica.com/assets/images/avatar/12.jpg"
                        alt=""
                      />
                    </a>
                  </div>
                  <form className="input-group">
                    <textarea
                      data-autoresize=""
                      className="form-control me-2 bg-light rounded"
                      rows="1"
                      placeholder="Add a comment..."
                    ></textarea>
                    <button
                      className="btn btn-primary mb-0 rounded"
                      type="submit"
                    >
                      Post
                    </button>
                  </form>
                </div>
                <ul className="comment-wrap list-unstyled mb-0">
                  <li className="comment-item">
                    <div className="d-flex">
                      <div className="avatar avatar-xs">
                        <a href="#!">
                          <img
                            className="rounded-circle p-0"
                            src="https://social.webestica.com/assets/images/avatar/05.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="ms-2">
                        <div class="bg-light rounded-start-top-0 p-3 rounded">
                          <div class="d-flex justify-content-between">
                            <h6 class="mb-1">
                              {" "}
                              <a href="#!"> Frances Guerrero </a>
                            </h6>
                            <small class="ms-2">5hr</small>
                          </div>
                          <p className="small mb-0">
                            Preference any astonished unreserved Mrs.
                          </p>
                        </div>
                        <ul className="nav nav-divider py-2 small">
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              {" "}
                              Like (3)
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              {" "}
                              Reply
                            </a>
                          </li>
                          <li className="nav-item">
                            <a className="nav-link" href="#!">
                              {" "}
                              View 5 replies
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <ul className="comment-item-nested list-unstyled ms-5">
                      <li className="comment-item">
                        <div className="d-flex">
                          <div className="avatar avatar-xs">
                            <a href="#!">
                              <img
                                className="rounded-circle p-0"
                                src="https://social.webestica.com/assets/images/avatar/06.jpg"
                                alt=""
                              />
                            </a>
                          </div>
                          <div className="ms-2">
                            <div className="bg-light p-3 rounded">
                              <div className="d-flex justify-content-between">
                                <h6 className="mb-1">
                                  {" "}
                                  <a href="#!"> Lori Stevens </a>{" "}
                                </h6>
                                <small className="ms-2">2hr</small>
                              </div>
                              <p className="small mb-0">
                                Dependent on so extremely delivered by. Yet ?no
                                jokes worse her why.
                              </p>
                            </div>
                            <ul className="nav nav-divider py-2 small">
                              <li className="nav-item">
                                <a className="nav-link" href="#javascript-void">
                                  {" "}
                                  Like (5)
                                </a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link" href="#javascript-void">
                                  {" "}
                                  Reply
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="card-footer border-0 pt-0">
                <a
                  href="#!"
                  role="button"
                  class="btn btn-link btn-link-loader btn-sm text-secondary d-flex align-items-center"
                  data-bs-toggle="button"
                  aria-pressed="true"
                >
                  <div class="spinner-dots me-2">
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                    <span className="spinner-dot"></span>
                  </div>
                  Load more comments
                </a>
              </div>
            </div>
            <a
              href="#!"
              role="button"
              class="btn btn-loader btn-primary-soft w-100 mt-4"
              data-bs-toggle="button"
              aria-pressed="true"
            >
              <span class="load-text"> Load more </span>
              <div class="load-icon">
                <div class="spinner-grow spinner-grow-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
