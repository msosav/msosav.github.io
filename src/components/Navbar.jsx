export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-dark py-3" data-bs-theme="dark">
      <div className="container">
        <a
          className="navbar-brand d-flex align-items-center text-center"
          href="#"
        >
          <span>Miguel Sosa</span>
        </a>
        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navcol-5"
        >
          <span className="visually-hidden">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navcol-5" className="collapse navbar-collapse text-center">
          <ul className="navbar-nav ms-auto">
            <li className="navbar-item">
              <a className="nav-link active" href="#about">
                About
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link active" href="#projects">
                Projects
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link active" href="#skills">
                Skills
              </a>
            </li>
            <li className="navbar-item">
              <a className="nav-link active" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
