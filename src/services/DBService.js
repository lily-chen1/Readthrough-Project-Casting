import { getDatabase, ref, push, set, query, onValue } from "firebase/database";
import db from "../firebase";

// const getAll = () => {
//   return db;
// };

const createProject = (data) => {
    const db = getDatabase();
    const postListRef = ref(db, 'Projects');
    const newPostRef = push(postListRef);
    return set(newPostRef, data);
    // return Promise.resolve("Submit Success");
};

const viewProjects = () => {
    const db = getDatabase();
    const the_ref = query(ref(db, "/Projects"));
    const projectArray = [];
    onValue(the_ref, (snapshot) => {
        const data = snapshot.val();
        Object.keys(data).map((key) => (projectArray[key] = data[key]));
      });
    return projectArray;
};

// const update = (key, data) => {
//   return db.child(key).update(data);
// };

const removeProject = (key) => {
   const db = getDatabase();
  return db.child(key).remove();
};

// const removeAll = () => {
//   return db.remove();
// };

export default {createProject, viewProjects, removeProject};