import { useState } from "react";
import { useObserver } from "mobx-react";
import { app } from "./Firebase";
import { getDatabase, ref, child, set } from "firebase/database";

const useEditData = (initialData) => {
  const [data, setData] = useState(initialData);

  const editData = async (updatedData) => {
    try {
      setData(updatedData);

      const dbRef = ref(getDatabase(app));
      await set(child(dbRef, `Projects/1`), updatedData);
    } catch (error) {
      console.error(error);
    }
  };

  return useObserver(() => ({ data, editData }));
};

const EditMobXDataTest = () => {
  const { data, editData } = useEditData({
    title: "",
    description: "",
  });

  const handleEdit = () => {
    editData({ title: "Titanic 2", description: "more boats" });
  };

  return (
    <div>
      <p>Title: {data.title}</p>
      <p>description: {data.description}</p>
      <button onClick={handleEdit}>Edit Data</button>
    </div>
  );
};

export default EditMobXDataTest;
