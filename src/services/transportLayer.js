import {
  getDatabase,
  ref,
  update,
  query,
  push,
  set,
  remove,
  onValue,
} from "firebase/database";
import { app } from "../Firebase";
import { makeAutoObservable } from "mobx";
export class TransportLayer {
  updateListeners = [];
  createListeners = [];
  deleteListeners = [];

  constructor() {
    makeAutoObservable(this);
  }

  onReceiveProjectUpdate(callback) {
    this.updateListeners.push(callback);
  }
  receiveProjectUpdate(updatedProject) {
    this.updateListeners.forEach((callback) => {
      const db = getDatabase(app);
      const postListRef = ref(db, "Projects", updatedProject.key);
      update(postListRef, updatedProject);
      callback(updatedProject);
      return updatedProject;
    });
  }

  onReceiveProjectCreate(callback) {
    this.createListeners.push(callback);
  }
  receiveProjectCreate(createdProject) {
    this.createListeners.forEach((callback) => {
      const db = getDatabase(app);
      const postListRef = ref(db, "Projects");
      const newPostRef = push(postListRef);
      set(newPostRef, createdProject);
      callback(createdProject);
      return createdProject;
    });
  }

  onReceiveProjectDelete(callback) {
    this.deleteListeners.push(callback);
  }
  ReceiveProjectDelete(project_id) {
    this.deleteListeners.forEach((callback) => {
      const db = getDatabase(app);
      const postListRef = ref(db, "Projects", project_id);
      remove(postListRef);
      callback(project_id);
      return project_id;
    });
  }

  //RETURN json
  fetchProjects() {
    return new Promise(() => {
      const db = getDatabase(app);
      const the_ref = query(ref(db, "/Projects"));
      //const projectArray = [];
      onValue(the_ref, (snapshot) => {
        return snapshot.val();
        //Object.keys(data).map((key) => (projectArray[key] = data[key]));
      });
    });
  }

  fetchUsers() {
    /////////////////////
    const db = getDatabase(app);
    const the_ref = query(ref(db, "/Users"));
    //const projectArray = [];
    onValue(the_ref, (snapshot) => {
      return snapshot.val();
      //Object.keys(data).map((key) => (projectArray[key] = data[key]));
    });
  }

  fetchUser(user_id) {
    const db = getDatabase(app);
    const the_ref = query(ref(db, "/Users", user_id));
    //const projectArray = [];
    onValue(the_ref, (snapshot) => {
      return snapshot.val();
      //Object.keys(data).map((key) => (projectArray[key] = data[key]));
    });
  }
}

export default TransportLayer;
