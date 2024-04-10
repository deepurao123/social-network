import img from "./images/img.jpg";
import profile from "./images/profile.jpg";
import home from "./images/home.svg";
import person from "./images/person.svg";
import earth from "./images/earth.svg";
import calendar from "./images/calendar.svg";
import chat from "./images/chat.svg";
import notification from "./images/notification.svg";
import cog from "./images/cog.svg";
import "./Profile.css";
const Profile = () => {
  return (
    <>
      <div className="container p-0">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="top_img">
                <img src={img} className="w-100" alt=""></img>
              </div>
              <div className="card-body pt-0">
                <div className="text-center">
                  <div className="avatar mt-n5 mb-3">
                    <img
                      src={profile}
                      className="avatar-img"
                      alt="profile"
                    ></img>
                  </div>
                  <h5 className="mb-0">
                    <a className="text-decoration " href="/">
                      Sam Lanson
                    </a>
                  </h5>
                  <small>Web Developer at Webestica</small>
                  <p className="mt-3">
                    I'd love to change the world, but they won’t give me the
                    source code.
                  </p>
                  <div className="hstack gap-2 gap-xl-3 justify-content-center">
                    <div>
                      <h6 className="mb-0">256</h6>
                      <small>Post</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                      <h6 className="mb-0">2.5K</h6>
                      <small>Followers</small>
                    </div>
                    <div className="vr"></div>
                    <div>
                      <h6 className="mb-0">365</h6>
                      <small>Following</small>
                    </div>
                  </div>
                </div>
                <hr />
                <ul className="nav nav-link-secondary flex-column fw-bold gap-2">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={home}
                        className="me-2 h-20 fa-fw"
                        alt="home"
                      ></img>
                      <span className="feed">Feed</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={person}
                        className="me-2 h-20 fa-fw"
                        alt="person"
                      ></img>
                      <span>Connections</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={earth}
                        className="me-2 h-20 fa-fw"
                        alt="earth"
                      ></img>
                      <span>Latest News</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={calendar}
                        className="me-2 h-20 fa-fw"
                        alt="calendar"
                      ></img>
                      <span>Events</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={chat}
                        className="me-2 h-20 fa-fw"
                        alt="chat"
                      ></img>
                      <span>Groups</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={notification}
                        className="me-2 h-20 fa-fw"
                        alt="notification"
                      ></img>
                      <span>Notifications</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <img
                        src={cog}
                        className="me-2 h-20 fa-fw"
                        alt="cog"
                      ></img>
                      <span>Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="card-footer text-center py-2">
                <a className="btn btn-link fw-bold text-decoration" href="/">
                  View Profile
                </a>
              </div>
            </div>
            <ul className="nav small mt-4 justify-content-center lh-1">
              <li className="nav-item ">
                <a className="nav-link " href="/about.html">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/settings.html">
                  Settings
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" target="_blank" href="/">
                  Support{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " target="_blank" href="/">
                  Docs{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/help.html">
                  Help
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="/privacy-and-terms.html">
                  Privacy &amp; terms
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default Profile;
