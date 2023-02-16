import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import Select from "react-select";
import Multiselect from "multiselect-react-dropdown";

const ActionButtons = (props) => {
  const handleBack = () => {
    props.previousStep();
  };

  const handleNext = () => {
    props.nextStep();
  };

  const handleFinish = () => {
    props.lastStep();
  };

  return (
    <div>
      <Row>
        {props.currentStep > 1 && (
          <Col>
            <Button onClick={handleBack}>Back</Button>
          </Col>
        )}
        <Col>
          {props.currentStep < props.totalSteps && (
            <Button onClick={handleNext}>Next</Button>
          )}
          {props.currentStep === props.totalSteps && (
            <Button onClick={handleFinish}>Finish</Button>
          )}
        </Col>
      </Row>
    </div>
  );
};

const One = (props) => {
  const [error, setError] = useState("");

  const characters = [
    {
      character: "chara1",
      characterName: "Char One Name",
      label: "Character 1",
      desc: "Character 1 Description Text.",
    },
    {
      character: "chara2",
      characterName: "Char Two Name",
      label: "Character 2",
      desc: "Character 2 Description Text.",
    },
    {
      character: "chara3",
      characterName: "Char Three Name",
      label: "Character 3",
      desc: "Character 3 Description Text.",
    },
  ];

  const [selectedCharacter, setSelectedCharacter] = useState([]);
  const handleCharacterChange = (character) => {
    setSelectedCharacter(character);
  };

  const validate = () => {
    if (!selectedCharacter.character) setError("Please select a Character");
    else {
      setError("");
      props.nextStep();
      props.userCallback(selectedCharacter);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>Select a Character</h1>
      <FormGroup>
        <Label>Character: </Label>
        <Select options={characters} onChange={handleCharacterChange} />
        {/* <Multiselect 
		options={characters} 
		onSelect={(e) => handleCharacterChange(e)}
        onRemove={(e) => handleCharacterChange(e)}
				/> */}
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Two = (props) => {
  const [error, setError] = useState("");
  const options = [
    { name: "agent1", label: "Agent 1", email: "agent1@gmail.com" },
    { name: "agent2", label: "Agent 2", email: "agent2@comcast.net" },
    { name: "agent3", label: "Agent 3", email: "agent3@yahoo.com" },
  ];

  const [selectedOption, setSelectedOption] = useState([]);
  const handleChange = (options) => {
    setSelectedOption(options); // TODO: make multi-select somehow
  };

  const validate = () => {
    if (!selectedOption.name) setError("Agent is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback(selectedOption);
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>Select an Agent</h1>
      <FormGroup>
        <Label>
          Character: <b>{props.user.characterName || ""}</b>
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Name: </Label>
        {/* MULTISELECT HERE? */}
        {/* <Multiselect /> */}
        <Select options={options} onChange={handleChange} />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
      {/* <ActionButtons {...props} nextStep={validate} /> */}
    </div>
  );
};

const Three = (props) => {
  const [error, setError] = useState("");
  console.log("step3 receive user object");
  console.log(props.user);

  const validate = () => {
    if (!emailBody) setError("Email is empty!");
    else {
      setError("");
      props.nextStep();
      props.userCallback(emailBody);
    }
  };

  const [emailBody, setEmailBody] = useState({
    msgBody:
      "Looking for actors to play the role of: " +
      props.user.characterName +
      ". Let me know if you're interested!",
  });
  const handleBodyChange = (e) => {
    console.log("body change");
    console.log(props.user);
    setEmailBody({ msgBody: e.target.value });
  };

  return (
    <div>
      <h2>Email Configuration</h2>
      <p>Agent: {props.user.name}</p>
      <p>Character: {props.user.characterName}</p>
      <br />
      <FormGroup>
        <Label>
          Message: <br />
          {/* <input
            type="text"
            name="postContent"
            value={emailBody}
            onChange={handleBodyChange}
          /> */}
          <textarea
            value={emailBody.msgBody}
            name="emailBody"
            onChange={handleBodyChange}
          />
        </Label>
        <br />
        {/* <textarea name="postContent" /> */}
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Four = (props) => {
  const link =
    "mailto:" +
    props.user.email +
    "?subject=Cast%20Searching%20for%20" +
    props.user.character +
    "&body=Test%20Email%20Body%20Info:%20" +
    props.user.msgBody;

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <p>Agent: {props.user.name}</p>
      <p>Character: {props.user.characterName}</p>
      <p>Message: {props.user.msgBody}</p>
      <br />
      {/* Button that generates a mailto: link with the above information */}
      <a href={link}>Send Mail!</a>
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const Sample = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);

  const assignStepWizard = (instance) => {
    setStepWizard(instance);
  };

  const assignUser = (val) => {
    console.log("parent receive user callback");
    console.log(val);
    setUser((user) => ({
      ...user,
      ...val,
    }));
  };

  const handleStepChange = (e) => {
    console.log("step change");
    console.log(e);
    setActiveStep(e.activeStep - 1);
  };

  const handleComplete = () => {
    alert("test: after email confirmation");
  };

  return (
    <div>
      <Stepper activeStep={activeStep}>
        <Step label="Select Character" />
        <Step label="Select Agent" />
        <Step label="Email Settings" />
        <Step label="Confirmation" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} userCallback={assignUser} />
        <Four user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default Sample;
