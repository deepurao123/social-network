import avtar from "./images/avtar.jpg";
import "./Event.css";
const Event = () => {
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col">
            <div className="card card-body mt-2">
              <div className="d-flex mb-3">
                <div className="avtar me-2">
                  <a href="/">
                    <img
                      src={avtar}
                      className="avt rounded-circle"
                      alt="avtar"
                    ></img>
                  </a>
                </div>
                <form className="border-0 w-100">
                  <textarea
                    className="form-control pe-4 border-0 "
                    data-autoresize=""
                    placeholder="Share your thoughts..."
                  ></textarea>
                </form>
              </div>
              <ul className="nav gap-3 small fw-normal">
                <li className="nav-item bg-light-gray rounded-2">
                  <a className="nav-link py-1 px-2" href="/">
                    <i className="bi bi-image-fill text-success pe-2"></i>Photo
                  </a>
                </li>
                <li className="nav-item bg-light-gray rounded-2">
                  <a className="nav-link py-1 px-2" href="/">
                    <i class="bi bi-camera-reels-fill text-info pe-2"></i>Video
                  </a>
                </li>
                <li className="nav-item bg-light-gray rounded-2">
                  <a href="/" className="nav-link py-1 px-2">
                    <i className="bi bi-calendar2-event-fill text-danger pe-2"></i>
                    Event
                  </a>
                </li>
                <li className="nav-item bg-light-gray rounded-2">
                  <a className="nav-link py-1 px-2" href="/">
                    <i className="bi bi-emoji-smile-fill text-warning pe-2"></i>
                    Feeling /Activity
                  </a>
                </li>
                <li className="dropdown ms-lg-auto">
                  <button
                    className="bg-gray py-1 px-2  rounded-2 border-0"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="bi bi-three-dots"></i>
                  </button>
                  <ul className="dropdown-menu dropdown-menu-end">
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-envelope fa-fw pe-2"></i>Create a
                        poll
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-bookmark-check fa-fw pe-2"></i>Ask a
                        question
                      </a>
                    </li>
                    <hr />
                    <li>
                      <a className="dropdown-item" href="/">
                        <i className="bi bi-pencil-square fa-fw pe-2"></i>Help
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Event;
