import { makeAutoObservable, runInAction } from "mobx";

export class ProjectStore {
  rootStore;
  transportLayer;
  projects = [];
  isLoading = true;

  constructor(rootStore, transportLayer) {
    makeAutoObservable(this);
    this.rootStore = rootStore; // Store that can resolve authors.
    this.transportLayer = transportLayer; // Thing that can make server requests.

    this.transportLayer.onReceiveProjectUpdate((updatedProject) =>
      this.updateProjectList(updatedProject)
    );

    this.transportLayer.onReceiveProjectCreate((createdProject) =>
      this.updateProjectList(createdProject)
    );

    this.transportLayer.onReceiveProjectDelete(
      (project_id) => delete this.projects[project_id]
    );
    console.log("what");
    this.loadProjects();
  }

  // Fetches all Projects from the server.
  async loadProjects() {
    this.isLoading = true;
    this.projects = [];
    console.log("what2");
    let fetchedProjects = await this.transportLayer.fetchProjects();

    runInAction(() => {
      fetchedProjects.forEach((json) => this.updateProjectList(json));
      this.isLoading = false;
    });
  }

  updateProjectList(json) {
    let project = this.projects.find((project) => project.id === json.id);
    if (!project) {
      this.projects = Object.assign(json);
    } else {
      this.projects[json.id] = json.val;
    }
  }

  // createProject(json) { // could this be done like on Receive Project Update
  //     this.transportLayer.createProject(json);
  //     this.updateProjectList(json); //could this also just be this.loadProjects()? its simply trying to trigger a refresh right
  // }

  // deleteProject(project_id) {
  //     this.transportLayer.deleteProject(project_id);
  //     delete this.projects[project_id];
  // }
}

export default ProjectStore;
