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
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container-fluid">
            <h2 className="navbar-brand">KJ</h2>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="https://www.foxnews.com"
                  >
                    Book
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="https://www.foxnews.com">
                    Merch
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    aria-disabled="true"
                    href="https://www.foxnews.com"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
