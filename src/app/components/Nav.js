import Link from "next/link";
// import { Navbar, Container } from "react-bootstrap";

function App() {
  return (
    <nav bg="light" expand="lg">
      <div>
        <div href="/">
          <img
            src="path_to_your_logo_image"
            height="30"
            className="d-inline-block align-top"
            alt="Your Logo"
          />
        </div>
        <div aria-controls="basic-navbar-nav" />
        <div id="basic-navbar-nav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/">
                Link
              </Link>
            </li>
            {/* Add more navbar items here */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default App;
