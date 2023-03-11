import ProjectStore from './projectStore';
import UserStore from './userStore';
import TransportLayer from '../services/transportLayer';

class RootStore {
    constructor() {
        this.projectStore = new ProjectStore(this, TransportLayer);
        this.usersStore = new UserStore(this);
    }
}

const rootStore = new RootStore();

export default rootStore;