import ProjectStore from "./projectStore";
import UserStore from "./userStore";
import TransportLayer from "../services/transportLayer";

class RootStore {
  constructor() {
    let temp = new TransportLayer();
    this.projectStore = new ProjectStore(this, temp);
    this.usersStore = new UserStore(this);
  }
}

const rootStore = new RootStore();

export default rootStore;
