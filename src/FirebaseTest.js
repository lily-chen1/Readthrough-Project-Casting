import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

function FirebaseTest() {
  const [projects, setProjects] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getProjects();
  }, []);

  async function getProjects() {
    await getDocs(collection(db, "projects"))
      .then((snapshot) => {
        if (snapshot.docs.length > 0) {
          const doc_array = [];
          snapshot.docs.forEach((doc) => {
            doc_array.push(doc.data());
          });
          setProjects(doc_array);
          setLoading(false);
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
  if (loading) {
    return;
  }
  return (
    <div>
      {console.log(projects)}
      <DataList data={projects} />
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

export default FirebaseTest;
