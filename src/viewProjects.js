import React, { useState, useEffect } from "react";
import DBService from "./services/DBService";

const ViewProjects = () => {
  const [projects, setProjects] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setProjects(DBService.viewProjects);
    setLoading(false);
  }, []);

  const deleteProject = (id) => {
    DBService.deleteProject(id)
      .then((res) => {
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div className="submit-form">
      {loading ? (
        <div>
          <h4>Loading.....</h4>
        </div>
      ) : submitted ? (
        <div>
          <h4>You deleted successfully!</h4>
          <a href="/addProject">
            <button>Add Project</button>
          </a>
          <a href="/viewProjects">
            <button>View Projects</button>
          </a>
        </div>
      ) : (
        <div>
          <h4>List of Projects</h4>
          {console.log(projects.length)}
          {Object.keys(projects).map((key) => (
            <div>
              <h4>HI</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );

};

export default ViewProjects;