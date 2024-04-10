import React, { useState, useCallback } from "react";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { photos } from "./photos";
import "./MyNetwork.css";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import MyProfile from "./MyProfile";
import Connections from "./Connections";
const MyNetwork = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <>
      <div class="container mt-4 pt-5">
        <div class="row g-4">
          <div class="col-lg-8 vstack gap-4">
            <div class="card">
              <div class="h-200px rounded-top inner"></div>
              <div class="card-body py-0">
                <div class="d-sm-flex align-items-start text-center text-sm-start">
                  <div>
                    <div class="avatar avatar-xxl mt-n5 mb-3">
                      <img
                        class="avatar-img rounded-circle border border-white border-3"
                        src="https://social.webestica.com/assets/images/avatar/07.jpg"
                        alt=""
                      />
                    </div>
                  </div>
                  <div class="ms-sm-4 mt-sm-3">
                    <h1 class="mb-0 h5">
                      Sam Lanson{" "}
                      <i class="bi bi-patch-check-fill text-success small"></i>
                    </h1>
                    <p>250 connections</p>
                  </div>
                  <div class="d-flex mt-3 justify-content-center ms-sm-auto">
                    <button class="btn btn-danger-soft me-2" type="button">
                      {" "}
                      <i class="bi bi-pencil-fill pe-1"></i> Edit profile{" "}
                    </button>
                    <div class="dropdown">
                      <button
                        class="icon-md btn btn-light"
                        type="button"
                        id="profileAction2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="bi bi-three-dots"></i>
                      </button>
                      <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="profileAction2"
                      >
                        <li>
                          <a class="dropdown-item" href="javascript-void">
                            {" "}
                            <i class="bi bi-bookmark fa-fw pe-2"></i>Share
                            profile in a message
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript-void">
                            {" "}
                            <i class="bi bi-file-earmark-pdf fa-fw pe-2"></i>
                            Save your profile to PDF
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript-void">
                            {" "}
                            <i class="bi bi-lock fa-fw pe-2"></i>Lock profile
                          </a>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a class="dropdown-item" href="javascript-void">
                            {" "}
                            <i class="bi bi-gear fa-fw pe-2"></i>Profile
                            settings
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* List profile */}
                <ul class="list-inline mb-0 text-center text-sm-start mt-3 mt-sm-0">
                  <li class="list-inline-item">
                    <i class="bi bi-briefcase me-1"></i> Lead Developer
                  </li>
                  <li class="list-inline-item">
                    <i class="bi bi-geo-alt me-1"></i> New Hampshire
                  </li>
                  <li class="list-inline-item">
                    <i class="bi bi-calendar2-plus me-1"></i> Joined on Nov 26,
                    2019
                  </li>
                </ul>
              </div>
              {/* Card body END */}
              <div class="card-footer mt-3 pt-2 pb-0">
                {/* <ul class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0">
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="myprofile">
                      {" "}
                      Posts{" "}
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="my-profile-about.html">
                      {" "}
                      About{" "}
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a
                      class="nav-link active"
                      href="my-profile-connections.html"
                    >
                      {" "}
                      Connections{" "}
                      <span class="badge bg-success bg-opacity-10 text-success small">
                        {" "}
                        230
                      </span>{" "}
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="my-profile-media.html">
                      {" "}
                      Media
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="my-profile-videos.html">
                      {" "}
                      Videos
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="my-profile-events.html">
                      {" "}
                      Events
                    </a>{" "}
                  </li>
                  <li class="nav-item">
                    {" "}
                    <a class="nav-link" href="my-profile-activity.html">
                      {" "}
                      Activity
                    </a>{" "}
                  </li>
                </ul> */}
                <ul
                  class="nav nav-bottom-line align-items-center justify-content-center justify-content-md-start mb-0 border-0"
                  id="pills-tab"
                  role="tablist"
                >
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link active"
                      id="pills-posts-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-posts"
                      type="button"
                      role="tab"
                      aria-controls="pills-posts"
                      aria-selected="true"
                    >
                      Posts
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      About
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Connections-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Connections"
                      type="button"
                      role="tab"
                      aria-controls="pills-Connections"
                      aria-selected="false"
                    >
                      Connections{" "}
                      <span class="badge bg-success bg-opacity-10 text-success small">
                        {" "}
                        230
                      </span>
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills- Media-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills- Media"
                      type="button"
                      role="tab"
                      aria-controls="pills- Media"
                      aria-selected="false"
                    >
                      Media
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Videos-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Videos"
                      type="button"
                      role="tab"
                      aria-controls="pills-Videos"
                      aria-selected="false"
                    >
                      Videos
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Events-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Events"
                      type="button"
                      role="tab"
                      aria-controls="pills-Events"
                      aria-selected="false"
                    >
                      Events
                    </button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button
                      class="nav-link"
                      id="pills-Activity-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-Activity"
                      type="button"
                      role="tab"
                      aria-controls="pills-Activity"
                      aria-selected="false"
                    >
                      Activity
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            {/* my-profile-connections.html */}
            <div class="tab-content" id="pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="pills-posts"
                role="tabpanel"
                aria-labelledby="pills-posts-tab"
                tabindex="0"
              >
                <MyProfile />
              </div>
              <div
                class="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabindex="0"
              >
                ...
              </div>
              <div
                class="tab-pane fade"
                id="pills-Connections"
                role="tabpanel"
                aria-labelledby="pills-Connections-tab"
                tabindex="0"
              >
                <Connections></Connections>
              </div>
              <div
                class="tab-pane fade"
                id="pills-disabled"
                role="tabpanel"
                aria-labelledby="pills-disabled-tab"
                tabindex="0"
              >
                ...
              </div>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="row g-4">
              <div class="col-sm-6 col-lg-12">
                <div class="card">
                  <div class="card-header border-0 pb-0">
                    <h5 class="card-title">About</h5>
                  </div>
                  <div class="card-body position-relative pt-0">
                    <p>
                      He moonlights difficult engrossed it, sportsmen.
                      Interested has all Devonshire difficulty gay assistance
                      joy.
                    </p>
                    <ul class="list-unstyled mt-3 mb-0">
                      <li class="mb-2">
                        {" "}
                        <i class="bi bi-calendar-date fa-fw pe-1"></i> Born:{" "}
                        <strong> October 20, 1990 </strong>{" "}
                      </li>
                      <li class="mb-2">
                        {" "}
                        <i class="bi bi-heart fa-fw pe-1"></i> Status:{" "}
                        <strong> Single </strong>{" "}
                      </li>
                      <li>
                        {" "}
                        <i class="bi bi-envelope fa-fw pe-1"></i> Email:{" "}
                        <strong> webestica@gmail.com </strong>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-12">
                <div class="card">
                  <div class="card-header d-flex justify-content-between border-0">
                    <h5 class="card-title">Experience</h5>
                    <a class="btn btn-primary-soft btn-sm" href="#!">
                      {" "}
                      <i class="fa-solid fa-plus"></i>{" "}
                    </a>
                  </div>
                  <div class="card-body position-relative pt-0">
                    <div class="d-flex">
                      <div class="avatar me-3">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar-img rounded-circle"
                            src="	https://social.webestica.com/assets/images/logo/08.svg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div>
                        <h6 class="card-title mb-0">
                          <a href="#!"> Apple Computer, Inc. </a>
                        </h6>
                        <p class="small">
                          May 2015 – Present Employment Duration 8 mos{" "}
                          <a class="btn btn-primary-soft btn-xs ms-2" href="#!">
                            Edit{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="avatar me-3">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar-img rounded-circle"
                            src="https://social.webestica.com/assets/images/logo/09.svg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div>
                        <h6 class="card-title mb-0">
                          <a href="#!"> Microsoft Corporation </a>
                        </h6>
                        <p class="small small-1">
                          May 2017 – Present Employment Duration 1 yrs 5 mos{" "}
                          <a class="btn btn-primary-soft btn-xs ms-2" href="#!">
                            Edit{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                    <div class="d-flex">
                      <div class="avatar me-3">
                        <a href="#!">
                          {" "}
                          <img
                            class="avatar-img rounded-circle"
                            src="https://social.webestica.com/assets/images/logo/10.svg"
                            alt=""
                          />{" "}
                        </a>
                      </div>
                      <div>
                        <h6 class="card-title mb-0">
                          <a href="#!"> Tata Consultancy Services. </a>
                        </h6>
                        <p class="small mb-0">
                          May 2022 – Present Employment Duration 6 yrs 10 mos{" "}
                          <a class="btn btn-primary-soft btn-xs ms-2" href="#!">
                            Edit{" "}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-12">
                <div class="card">
                  <div class="card-header d-sm-flex justify-content-between border-0">
                    <h5 class="card-title">Photos</h5>
                    <a class="btn btn-primary-soft btn-sm" href="/photo.js">
                      {" "}
                      See all photo
                    </a>
                  </div>
                  <div class="card-body position-relative pt-0">
                    <div class="row">
                      <div class="col-12">
                        <Gallery photos={photos} onClick={openLightbox} />
                        <ModalGateway>
                          {viewerIsOpen ? (
                            <Modal onClose={closeLightbox}>
                              <Carousel
                                currentIndex={currentImage}
                                views={photos.map((x) => ({
                                  ...x,
                                  srcset: x.srcSet,
                                  caption: x.title,
                                }))}
                              />
                            </Modal>
                          ) : null}
                        </ModalGateway>
                      </div>
                      {/* <div class="col-6">
                        <a
                          href="https://social.webestica.com/assets/images/albums/01.jpg"
                          data-gallery="image-popup"
                          data-glightbox=""
                        >
                          <img
                            class="rounded img-fluid"
                            src="https://social.webestica.com/assets/images/albums/01.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="col-6">
                        <a
                          href="https://social.webestica.com/assets/images/albums/02.jpg"
                          data-gallery="image-popup"
                          data-glightbox=""
                        >
                          <img
                            class="rounded img-fluid"
                            src="https://social.webestica.com/assets/images/albums/02.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="col-4">
                        <a
                          href="https://social.webestica.com/assets/images/albums/03.jpg"
                          data-gallery="image-popup"
                          data-glightbox=""
                        >
                          <img
                            class="rounded img-fluid"
                            src="https://social.webestica.com/assets/images/albums/03.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="col-4">
                        <a
                          href="https://social.webestica.com/assets/images/albums/04.jpg"
                          data-gallery="image-popup"
                          data-glightbox=""
                        >
                          <img
                            class="rounded img-fluid"
                            src="https://social.webestica.com/assets/images/albums/04.jpg"
                            alt=""
                          />
                        </a>
                      </div>
                      <div class="col-4">
                        <a
                          href="	https://social.webestica.com/assets/images/albums/05.jpg"
                          data-gallery="image-popup"
                          data-glightbox=""
                        >
                          <img
                            class="rounded img-fluid"
                            src="	https://social.webestica.com/assets/images/albums/05.jpg"
                            alt=""
                          />
                        </a>
                      </div> */}
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-12">
                <div class="card">
                  <div class="card-header d-sm-flex justify-content-between align-items-center border-0">
                    <h5 class="card-title">
                      Friends{" "}
                      <span class="badge bg-danger bg-opacity-10 text-danger">
                        230
                      </span>
                    </h5>
                    <a class="btn btn-primary-soft btn-sm" href="#!">
                      {" "}
                      See all friends
                    </a>
                  </div>
                  <div class="card-body position-relative pt-0">
                    <div class="row g-3">
                      <div class="col-6">
                        <div class="card shadow-none text-center h-100">
                          <div class="card-body p-2 pb-0">
                            <div class="avatar avatar-story avatar-xl">
                              <a href="#!">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="	https://social.webestica.com/assets/images/avatar/02.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <h6 class="card-title mb-1 mt-3">
                              {" "}
                              <a href="#!"> Amanda Reed </a>
                            </h6>
                            <p class="mb-0 small lh-sm">
                              16 mutual connections
                            </p>
                          </div>
                          <div class="card-footer p-2 border-0">
                            <button
                              class="btn btn-sm btn-primary me-1"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="send message"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-chat-left-text"></i>{" "}
                            </button>
                            <button
                              class="btn btn-sm btn-danger"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Remove friend"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-person-x"></i>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="card shadow-none text-center h-100">
                          <div class="card-body p-2 pb-0">
                            <div class="avatar avatar-xl">
                              <a href="#!">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="https://social.webestica.com/assets/images/avatar/03.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <h6 class="card-title mb-1 mt-3">
                              {" "}
                              <a href="#!"> Samuel Bishop </a>
                            </h6>
                            <p class="mb-0 small lh-sm">
                              22 mutual connections
                            </p>
                          </div>
                          <div class="card-footer p-2 border-0">
                            <button
                              class="btn btn-sm btn-primary me-1"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="send message"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-chat-left-text"></i>{" "}
                            </button>
                            <button
                              class="btn btn-sm btn-danger"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Remove friend"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-person-x"></i>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="card shadow-none text-center h-100">
                          <div class="card-body p-2 pb-0">
                            <div class="avatar avatar-xl">
                              <a href="#!">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="https://social.webestica.com/assets/images/avatar/04.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <h6 class="card-title mb-1 mt-3">
                              {" "}
                              <a href="javascript-void"> Bryan Knight </a>
                            </h6>
                            <p class="mb-0 small lh-sm">1 mutual connection</p>
                          </div>
                          <div class="card-footer p-2 border-0">
                            <button
                              class="btn btn-sm btn-primary me-1"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="send message"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-chat-left-text"></i>{" "}
                            </button>
                            <button
                              class="btn btn-sm btn-danger"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Remove friend"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-person-x"></i>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <div class="col-6">
                        <div class="card shadow-none text-center h-100">
                          <div class="card-body p-2 pb-0">
                            <div class="avatar avatar-xl">
                              <a href="#!">
                                <img
                                  class="avatar-img rounded-circle"
                                  src="	https://social.webestica.com/assets/images/avatar/05.jpg"
                                  alt=""
                                />
                              </a>
                            </div>
                            <h6 class="card-title mb-1 mt-3">
                              {" "}
                              <a href="#!"> Amanda Reed </a>
                            </h6>
                            <p class="mb-0 small lh-sm">
                              15 mutual connections
                            </p>
                          </div>
                          <div class="card-footer p-2 border-0">
                            <button
                              class="btn btn-sm btn-primary me-1"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="send message"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-chat-left-text"></i>{" "}
                            </button>
                            <button
                              class="btn btn-sm btn-danger"
                              id="my-tooltip"
                              data-tooltip-id="my-tooltip"
                              data-tooltip-content="Remove friend"
                            >
                              <Tooltip id="my-tooltip" />
                              <i class="bi bi-person-x"></i>{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
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
export default MyNetwork;
