const SigninPage = () => {
  return (
    <>
      <div class="container mt-5 pt-5">
        <div class="row justify-content-center text-center">
          <div class="col-12">
            <h1 class="display-4 text-black fw-bold mb-4 ">Welcome back!</h1>
          </div>
          <div class="col-sm-10 col-md-8 col-lg-6 ">
            <div class="card card-body p-4 p-sm-5 mt-sm-n5 mb-n5">
              <h2 class="h1 mb-2">Sign in</h2>
              <p>
                Don't have an account?
                <a href="sign-up.html"> Click here to sign up</a>
              </p>
              <form class="mt-4">
                <div class="mb-3  input-group-lg">
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    required
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
                      required
                    />
                    <label class="form-check-label ms-1" for="rememberCheck">
                      Remember me?
                    </label>
                  </div>
                  <a href="forgot-password.html">Forgot password?</a>
                </div>
                <div class="d-grid">
                  <button type="submit" class="btn btn-lg btn-primary-soft">
                    Login
                  </button>
                </div>
                {/* Copyright */}
                <p class="mb-0 mt-3">
                  ©2023 <a href="https://www.webestica.com/">Webestica.</a> All
                  rights reserved
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SigninPage;
