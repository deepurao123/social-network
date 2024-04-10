import Profile from "./Profile";
import "./CreatePage.css";
const CreatePage = () => {
  return (
    <>
      <div className="container mt-4 pt-5">
        <div className="row g-4">
          <div className="col-lg-3">
            <Profile />
          </div>
          <div class="col-md-8 col-lg-6 vstack gap-4">
            <div class="card">
              <div class="card-header border-0 pb-0">
                <h1 class="h4 card-title mb-0">Create a page</h1>
              </div>
              <div class="card-body">
                <form class="row g-3">
                  <div class="col-12">
                    <label class="form-label">Page name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Page name (Required)"
                    />
                    <small>Name that describes what the page is about.</small>
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <label class="form-label">Display name</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Display name (Required)"
                    />
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <label class="form-label">Email</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email (Required)"
                    />
                  </div>
                  <div class="col-sm-6 col-lg-4">
                    <label class="form-label">Category (required)</label>
                    <select
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option selected> Comedy</option>
                      <option value="1"> Comedy</option>
                      <option value="1"> Education</option>
                      <option value="2">Entertainment</option>
                      <option value="3"> Hotel</option>
                      <option value="1"> Technology</option>
                      <option value="1"> Travel</option>
                    </select>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Website URL</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="https://www.webestica.com"
                    />
                  </div>
                  <div class="col-lg-6">
                    <label class="form-label">Phone number</label>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Phone number (Required)"
                    />
                  </div>
                  <div class="col-12">
                    <label class="form-label">About page</label>
                    <textarea
                      class="form-control"
                      rows="3"
                      placeholder="Description (Required)"
                    ></textarea>
                    <small>Character limit: 300</small>
                  </div>
                  <hr />
                  <div class="col-12">
                    <h5 class="card-title mb-0">Social Links</h5>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Facebook</label>
                    <div class="input-group">
                      <span class="input-group-text border-0">
                        {" "}
                        <i class="bi bi-facebook text-facebook"></i>{" "}
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.facebook.com"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Twitter</label>
                    <div class="input-group">
                      <span class="input-group-text border-0">
                        {" "}
                        <i class="bi bi-twitter text-twitter"></i>{" "}
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.twitter.com"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Instagram</label>
                    <div class="input-group">
                      <span class="input-group-text border-0">
                        {" "}
                        <i class="bi bi-instagram text-instagram"></i>{" "}
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.instagram.com"
                      />
                    </div>
                  </div>
                  <div class="col-sm-6">
                    <label class="form-label">Pinterest</label>
                    <div class="input-group">
                      <span class="input-group-text border-0">
                        {" "}
                        <i class="bi bi-pinterest text-pinterest"></i>{" "}
                      </span>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://www.pinterest.com"
                      />
                    </div>
                  </div>
                  <div class="col-12 text-end">
                    <button type="submit" class="btn btn-primary mb-0">
                      Create a page
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CreatePage;
