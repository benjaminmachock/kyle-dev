// //Imports
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";

const Header = () => {
  //Hooks

  //Functions

  return (
    <>
      <header data-bs-theme="dark">
        <nav
          className="navbar navbar-expand-md bg-dark sticky-top border-bottom"
          data-bs-theme="dark"
        >
          <div className="container">
            <a
              className="navbar-brand d-md-none"
              href="https://www.foxnews.com"
            >
              <svg className="bi" width="24" height="24"></svg>
              KJ
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas"
              aria-controls="#offcanvas"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              tabindex="-1"
              id="#offcanvas"
              aria-labelledby="#offcanvasLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="#offcanvasLabel">
                  Aperture
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 justify-content-between">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <svg className="bi" width="24" height="24"></svg>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      KJ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      Book
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      Schedule
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      KJ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      Merch
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      Contact
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="https://www.foxnews.com">
                      <svg className="bi" width="24" height="24"></svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
