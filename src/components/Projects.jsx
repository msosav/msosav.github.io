import { projects } from "../data";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="title">My Projects</h2>
          </div>
        </div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {projects.map((project, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="card bg-transparent w-75 h-60 mx-auto">
                  <img
                    className="rounded img-fluid d-block fit-cover project-image"
                    src={project.image}
                    alt={project.title}
                  />
                  <div className="py-4 text-center">
                    <h4 className="title">{project.title}</h4>
                    <p className="text">{project.languajes}</p>
                    {project.demo && (
                      <a
                        className="button btn m-1"
                        href={project.demo}
                        type="button"
                        target="_blank"
                      >
                        Demo
                      </a>
                    )}
                    <a
                      className="button btn m-1"
                      href={project.link}
                      type="button"
                      target="_blank"
                    >
                      Source
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
