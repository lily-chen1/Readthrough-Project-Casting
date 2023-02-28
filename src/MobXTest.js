import React, { useState, useEffect } from "react";
import { autorun } from "mobx";
import { useLocalObservable } from "mobx-react-lite";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAhZunTEpuLdYrRdVXfLM_xSpFaeN7HZ2E",
  authDomain: "readthrough-network.firebaseapp.com",
  databaseURL: "https://readthrough-network-default-rtdb.firebaseio.com",
  projectId: "readthrough-network",
  storageBucket: "readthrough-network.appspot.com",
  messagingSenderId: "91949141674",
  appId: "1:91949141674:web:c0b1d58b23260eaa634ad3",
};
const app = initializeApp(firebaseConfig);

function MobXTest(path) {
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

function DataList({ data }) {
  const renderValue = (value) => {
    if (Array.isArray(value)) {
      return (
        <ul>
          {value.map((item, index) => (
            <li key={index}>{renderValue(item)}</li>
          ))}
        </ul>
      );
    } else if (typeof value === "object") {
      return (
        <ul>
          {Object.entries(value).map(([key, nestedValue], index) => (
            <li key={index}>
              <strong>{key}:</strong> {renderValue(nestedValue)}
            </li>
          ))}
        </ul>
      );
    } else {
      return JSON.stringify(value);
    }
  };

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>
          <ul>
            {Object.entries(item).map(([key, value], subIndex) => (
              <li key={subIndex}>
                <strong>{key}:</strong> {renderValue(value)}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default MobXTest;
