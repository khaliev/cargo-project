export default function Footer() {
  return (
    <>
      <footer className="footer pt-3  ">
        <div className="row align-items-center justify-content-lg-between">
          <div className="col-lg-6 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-muted text-lg-start">
              Copyright ©{" "}
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;2024
              <a href="" className="text-dark ms-1" target="_blank">
                Cargo 917
              </a>
              .
            </div>
          </div>
          <div className="col-lg-6">
            <ul className="nav nav-footer justify-content-center justify-content-lg-end">
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Cargo 917
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link text-sm text-muted"
                  target="_blank"
                >
                  Blog
                </a>
              </li>
              <li className="nav-item">
                <a
                  href=""
                  className="nav-link text-sm pe-0 text-muted"
                  target="_blank"
                >
                  License
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
