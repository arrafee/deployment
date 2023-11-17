import { Link } from "react-router-dom";

const Navbar = ({ logout }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-light shadow">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Simple Header
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-4">
            <li className="nav-item">
              <Link
                to={"/"}
                className="nav-link text-primary"
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/createProduct"} className="nav-link text-primary">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-primary" aria-disabled="true">
                About
              </a>
            </li>
            <li className="nav-item">
              {isLoggedIn ? (
                <Link
                  to={"/"}
                  className="nav-link text-bg-primary rounded-2"
                  aria-current="page"
                  onClick={() => logout()}
                >
                  Logout
                </Link>
              ) : (
                <Link
                  to={"/login"}
                  className="nav-link text-bg-primary rounded-2"
                  aria-current="page"
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
