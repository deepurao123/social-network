import "./Story.css";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.jpg";
const Story = () => {
  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-3 p-0">
            <div className="d-flex">
              <div className="position-relative border-dashed">
                <div className="card border border-2 h-150 d-flex align-items-center justify-content-center text-center">
                  <a
                    className="stretched-link btn btn-light rounded-circle icon-md"
                    href="/"
                  >
                    <i className="bi bi-plus"></i>
                  </a>
                  <h6 className="mt-2 mb-0 small">Post a Story</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="col-9 ">
            <div
              className="scrolling-wrapper row flex-row flex-nowrap pb-2"
              id="style-scroll"
            >
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img1} className="story" alt="img1"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Carolyn Ortiz</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img2} className="story" alt="img2"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Judy Nguyen</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img3} className="story" alt="img3"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Billy Vasquez</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img4} className="story" alt="img4"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Billy Vasquez</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img5} className="story" alt="img5"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Lori Stevens</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img6} className="story" alt="img6"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Carolyn Ortiz</strong>
                    </span>
                  </a>
                </div>
              </div>
              <div className="col p-1">
                <div className="position-relative">
                  <a className="item-link" href="/">
                    <span className="item-preview">
                      <img src={img7} className="story" alt="img7"></img>
                    </span>
                    <span className="info">
                      <strong className="name">Carolyn Ortiz</strong>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Story;
