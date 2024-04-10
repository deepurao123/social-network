import "./MyProfile.css";
import Event from "./Event";
import avtar1 from "./images/avtar1.jpg";
import post from "./images/post.jpg";
import img8 from "./images/img8.jpg";
import "./Post.css";
//Import necessary modules and styles
import React from "react";
const MyProfile = () => {
  return (
    <>
      <Event></Event>
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
            <div class="card mt-4">
              <div class="card-header border-0 pb-0">
                <div class="d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <div class="avatar me-2">
                      <a href="#!">
                        <img
                          class="avatar-img rounded-circle p-0"
                          src="https://social.webestica.com/assets/images/logo/13.svg"
                          alt=""
                        />
                      </a>
                    </div>
                    <div>
                      <h6 class="card-title mb-0">
                        <a href="#!"> Apple Education </a>
                      </h6>
                      <p class="mb-0 small">9 November at 23:29</p>
                    </div>
                  </div>
                  <a
                    href="#!"
                    class="text-secondary btn btn-secondary-soft-hover py-1 px-2"
                    id="cardShareAction5"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i class="bi bi-three-dots"></i>
                  </a>
                  <ul
                    class="dropdown-menu dropdown-menu-end"
                    aria-labelledby="cardShareAction5"
                  >
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="bi bi-bookmark fa-fw pe-2"></i>Save post
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="bi bi-person-x fa-fw pe-2"></i>Unfollow lori
                        ferguson{" "}
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="bi bi-x-circle fa-fw pe-2"></i>Hide post
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="bi bi-slash-circle fa-fw pe-2"></i>Block
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>
                    <li>
                      <a class="dropdown-item" href="#!">
                        <i class="bi bi-flag fa-fw pe-2"></i>Report post
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card-body pb-0">
                <p>
                  Find out how you can save time in the classroom this year.
                  Earn recognition while you learn new skills on iPad and Mac.
                  Start recognition your first Apple Teacher badge today!
                </p>
                <ul class="nav nav-stack pb-2 small">
                  <li class="nav-item">
                    <a class="nav-link active text-secondary" href="#!">
                      <i class="bi bi-heart-fill me-1 icon-xs bg-danger text-white rounded-circle"></i>{" "}
                      Louis, Billy and 126 others{" "}
                    </a>
                  </li>
                  <li class="nav-item ms-sm-auto">
                    <a class="nav-link" href="#!">
                      {" "}
                      <i class="bi bi-chat-fill pe-1"></i>Comments (12)
                    </a>
                  </li>
                </ul>
              </div>
              <div class="card-footer py-3">
                <ul class="nav nav-fill nav-stack small">
                  <li class="nav-item">
                    <a class="nav-link mb-0 active" href="#!">
                      {" "}
                      <i class="bi bi-heart pe-1"></i>Liked (56)
                    </a>
                  </li>
                  <li class="nav-item dropdown">
                    <a
                      href="#!"
                      class="nav-link mb-0"
                      id="cardShareAction6"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <i class="bi bi-reply-fill flip-horizontal ps-1"></i>Share
                      (3)
                    </a>
                    <ul
                      class="dropdown-menu dropdown-menu-end"
                      aria-labelledby="cardShareAction6"
                    >
                      <li>
                        <a class="dropdown-item" href="#!">
                          {" "}
                          <i class="bi bi-envelope fa-fw pe-2"></i>Send via
                          Direct Message
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          <i class="bi bi-bookmark-check fa-fw pe-2"></i>
                          Bookmark{" "}
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          <i class="bi bi-link fa-fw pe-2"></i>Copy link to post
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          <i class="bi bi-share fa-fw pe-2"></i>Share post via …
                        </a>
                      </li>
                      <li>
                        <hr class="dropdown-divider" />
                      </li>
                      <li>
                        <a class="dropdown-item" href="#!">
                          {" "}
                          <i class="bi bi-pencil-square fa-fw pe-2"></i>Share to
                          News Feed
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link mb-0" href="#!">
                      {" "}
                      <i class="bi bi-send-fill pe-1"></i>Send
                    </a>
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
export default MyProfile;
