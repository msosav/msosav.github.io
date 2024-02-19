export default function About() {
  return (
    <section id="about">
      <div className="container py-4 py-xl-5">
        <div className="row gy-4 gy-md-0">
          <div className="col-md-6">
            <div className="p-xl-5 m-xl-5">
              <img
                className="rounded img-fluid w-100 fit-cover hero-image"
                src="https://avatars.githubusercontent.com/msosav"
              />
            </div>
          </div>
          <div className="col-md-6 d-md-flex align-items-md-center">
            <div className="hero-container">
              <h2 className="hero-title">Hi, I'm Miguel</h2>
              <p className="my-3 hero-text">
                I'm a Colombian Computer Science student, passionate about
                technology and software development. I have experience in
                backend and frontend development, and I'm always looking to
                improve my skills.
              </p>
              <br />
              <a
                className="btn button btn-lg me-2"
                role="button"
                href="#contact"
              >
                Contact Me
              </a>
              <a
                className="btn button-outline btn-lg"
                role="button"
                href="#projects"
              >
                Projects
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
