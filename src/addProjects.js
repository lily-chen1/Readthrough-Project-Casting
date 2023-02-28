import React, { useState } from "react";
import DBService from "./services/DBService";


//
//
//
// Will most likily use different methos with MobX
//
//
//



const AddProject = () => {
  const initialProjectState = {
    title: "",
    description: "",
    genre1: "",
    genre2: "",
    characters: {}
  };

  const [project, setProject] = useState(initialProjectState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const saveProject = () => {
    var data = {
      title: project.title,
      description: project.description,
      genres: {
        1: project.genre1,
        2: project.genre2
      },
      characters: {}
    };

    DBService.createProject(data)
      .then((res) => {
        setSubmitted(true);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newProject = () => {
    setProject(initialProjectState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProject}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              required
              value={project.title}
              onChange={handleInputChange}
              name="title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={project.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <div className="form-group">
            <label htmlFor="genres">Genres</label>
            <input
              type="text"
              className="form-control"
              id="genre1"
              required
              value={project.genre1}
              onChange={handleInputChange}
              name="genre1"
            />
            <input
              type="text"
              className="form-control"
              id="genre2"
              required
              value={project.genre2}
              onChange={handleInputChange}
              name="genre2"
            />
          </div>

          <button onClick={saveProject} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddProject;