import { makeAutoObservable, runInAction} from "mobx";

export class UserStore {
    rootStore;
    transportLayer;
    users = {};
    isLoading = true

    constructor(rootStore, transportLayer) {
        makeAutoObservable(this);
        this.rootStore = rootStore; // Store that can resolve authors.
        this.transportLayer = transportLayer; // Thing that can make server requests.
    }

    loadUsers() {
        this.isLoading = true;
        this.users = this.transportLayer.fetchUsers();
        this.isLoading = false;
    }

    loadUser(user_id) {
        this.isLoading = true;
        if (this.users != {}){
            this.users = {};
        }
        this.users = this.transportLayer.fetchUser();
        this.isLoading = false;
    }
}




