import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects">
      <div class="container py-4 py-xl-5">
        <div class="row mb-5">
          <div class="col-md-8 col-xl-6 text-center mx-auto">
            <h2 class="title">My Projects</h2>
          </div>
        </div>
        <div class="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
          {projects.map((project) => (
            <div class="col">
              <div>
                <img
                  class="rounded img-fluid d-block w-100 fit-cover project-image"
                  src={project.image}
                />
                <div class="py-4 text-center">
                  <h4 class="title">{project.title}</h4>
                  <p class="text">{project.languajes}</p>
                  <a class="button btn" href={project.link} type="button">
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
