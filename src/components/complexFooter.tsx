import data from "../../public/data.json";

export default function ComplexFooter() {
  return (
    <>
      <footer>
        <div className="row">
          <div className="col-12 col-md-4">
            <h5 className="mt-5">Cargo 917</h5>
            <p className="text-body text-sm pe-5"></p>
          </div>

          <div className="col-12 mt-5 mb-lg-0 mb-4">
            <div className="copyright text-center text-sm text-body">
              Copyright ©
              <script>document.write(new Date().getFullYear())</script>
              &nbsp;2024 &nbsp;
              <a href="" className="text-dark" target="_blank">
                Cargo 917
              </a>
              .
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
