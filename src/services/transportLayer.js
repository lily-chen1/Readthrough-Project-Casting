import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./Firebase";

export class TransportLayer {

    //RETURN json
    onReceiveProjectUpdate(json){
        const db = getDatabase();
        const postListRef = ref(db, "Projects", json.key);
        update(postListRef, json);
        return json;
    }

    //RETURN json
    onReceiveProjectCreate(json){
        const db = getDatabase();
        const postListRef = ref(db, "Projects");
        const newPostRef = push(postListRef);
        set(newPostRef, json);
        return json;
    }

    //Return id
    onReceiveProjectDelete(project_id){
        const db = getDatabase();
        const postListRef = ref(db, "Projects",project_id);
        remove(postListRef);
        return project_id;
    }

    //RETURN json
    fetchProjects(){
        const db = getDatabase();
        const the_ref = query(ref(db, "/Projects"));
        //const projectArray = [];
        onValue(the_ref, (snapshot) => {
            return snapshot.val();
            //Object.keys(data).map((key) => (projectArray[key] = data[key]));
        });
    }


    fetchUsers(){/////////////////////
        const db = getDatabase();
        const the_ref = query(ref(db, "/Users"));
        //const projectArray = [];
        onValue(the_ref, (snapshot) => {
            return snapshot.val();
            //Object.keys(data).map((key) => (projectArray[key] = data[key]));
        });
    }

    fetchUser(user_id){
        const db = getDatabase();
        const the_ref = query(ref(db, "/Users", user_id));
        //const projectArray = [];
        onValue(the_ref, (snapshot) => {
            return snapshot.val();
            //Object.keys(data).map((key) => (projectArray[key] = data[key]));
        });
    }


}