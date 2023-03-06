import React, { useState, useEffect } from "react";
import { autorun } from "mobx";
import { useLocalObservable } from "mobx-react-lite";
import { getDatabase, ref, child, get } from "firebase/database";
import { app } from "./Firebase";
import DataList from "./DataList";

function RetrieveMobXDataTest(path) {
  const [loading, setLoading] = useState(true);
  const store = useLocalObservable(() => ({
    data: null,
    loading: true,
    error: null,

    setData(data) {
      store.data = data;
      store.loading = false;
      store.error = null;
    },

    setError(error) {
      store.data = null;
      store.loading = false;
      store.error = error;
    },
  }));

  useEffect(() => {
    const dbRef = ref(getDatabase(app));
    const dispose = autorun(() => {
      get(child(dbRef, `Projects`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            console.log(snapshot.val());
            const data = snapshot.val();
            store.setData(data);
            setLoading(false);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
          store.setError(error);
        });
    });

    return () => {
      dispose();
    };
  }, [path, store]);
  if (loading) {
    return;
  }
  return (
    <div>
      {console.log(store)}
      <DataList data={store} />
    </div>
  );
}

export default RetrieveMobXDataTest;
