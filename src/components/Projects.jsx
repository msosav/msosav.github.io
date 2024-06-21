import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div className="container py-4 py-xl-5">
        <div className="row mb-5">
          <div className="col-md-8 col-xl-6 text-center mx-auto">
            <h2 className="title">My Projects</h2>
          </div>
        </div>
        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {projects.map((project) => (
            <div className="col">
              <div>
                <img
                  className="rounded img-fluid d-block w-100 fit-cover project-image"
                  src={project.image}
                />
                <div className="py-4 text-center">
                  <h4 className="title">{project.title}</h4>
                  <p className="text">{project.languajes}</p>
                  <a
                    className="button btn m-1"
                    href={project.link}
                    type="button"
                  >
                    Source
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
