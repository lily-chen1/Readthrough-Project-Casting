import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import Select from "react-select";
// import Multiselect from "multiselect-react-dropdown";
import { MultiSelect } from "react-multi-select-component";

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
      value: "Character 1",
      desc: "Character 1 Description Text.",
    },
    {
      character: "chara2",
      characterName: "Char Two Name",
      label: "Character 2",
      value: "Character 2",
      desc: "Character 2 Description Text.",
    },
    {
      character: "chara3",
      characterName: "Char Three Name",
      label: "Character 3",
      value: "Character 3",
      desc: "Character 3 Description Text.",
    },
  ];

  const [selectedCharacters, setselectedCharacters] = useState([]);
  const handleCharacterChange = (character) => {
    console.log("Character change: ");
    console.log(character);
    setselectedCharacters(character);
  };

  const validate = () => {
    if (!selectedCharacters) setError("Please select a Character");
    else {
      setError("");
      props.nextStep();
      props.userCallback({ characters: selectedCharacters });
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>Select a Character</h1>
      <FormGroup>
        <Label>Character: </Label>
        <MultiSelect
          options={characters}
          onChange={(e) => handleCharacterChange(e)}
          value={selectedCharacters}
          labelledby="Character Select"
        />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Two = (props) => {
  const [error, setError] = useState("");
  const agents = [
    {
      name: "agent1",
      label: "Agent 1",
      value: "Agent1",
      email: "agent1@gmail.com",
    },
    {
      name: "agent2",
      label: "Agent 2",
      value: "Agent2",
      email: "agent2@comcast.net",
    },
    {
      name: "agent3",
      label: "Agent 3",
      value: "Agent3",
      email: "agent3@yahoo.com",
    },
  ];

  const [selectedAgents, setselectedAgents] = useState([]);
  const handleChangeAgents = (options) => {
    setselectedAgents(options);
  };

  const validate = () => {
    if (!selectedAgents) setError("Agent is mandatory field");
    else {
      setError("");
      props.nextStep();
      props.userCallback({ agents: selectedAgents });
    }
  };

  // if user.props.characters is empty, then characterNames is an empty array
  const characterNames = props.user.characters
    ? props.user.characters.map((c) => c.characterName)
    : [""];
  const charNameString = characterNames.join(", ");

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h1>Select an Agent</h1>
      <FormGroup>
        <Label>
          <b>Character: </b> {charNameString || ""}
        </Label>
      </FormGroup>
      <br />
      <FormGroup>
        <Label>Name: </Label>
        <MultiSelect
          options={agents}
          onChange={handleChangeAgents}
          value={selectedAgents}
          labelledBy="Agent Select"
        />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Three = (props) => {
  const [error, setError] = useState("");
  console.log("step3 receive user object");
  console.log(props.user);

  // if user.props.characters is empty, then characterNames is an empty array
  const characterNames = props.user.characters
    ? props.user.characters.map((c) => c.characterName)
    : [""];
  const charNameString = characterNames.join(", ");

  // if user.props.agents is empty, then agentNames is an empty array
  const agentNames = props.user.agents
    ? props.user.agents.map((c) => c.name)
    : [""];
  const agentNameString = agentNames.join(", ");

  const validate = () => {
    if (!emailBody) setError("Email is empty!");
    else {
      setError("");
      props.nextStep();
      props.userCallback(emailBody, emailSubject);
    }
  };

  const [emailBody, setEmailBody] = useState({
    msgBody:
      "Looking for actors to play the role/s of: " +
      charNameString +
      ". Let me know if you're interested!",
  });
  const handleBodyChange = (e) => {
    console.log("body change");
    console.log(props.user);
    setEmailBody({ msgBody: e.target.value });
  };

  const [emailSubject, setEmailSubject] = useState({
    msgSubject: "Cast Searching for: " + charNameString,
  });
  const handleSubjectChange = (e) => {
    console.log("subject change");
    console.log(props.user);
    setEmailSubject({ msgSubject: e.target.value });
  };

  return (
    <div>
      <h2>Email Configuration</h2>
      <p>
        <b> Agents:</b> {agentNameString}
      </p>
      <p>
        <b>Characters: </b>
        {charNameString}
      </p>
      <br />
      {/* TODO: update styling for textarea so the size is appropriate */}
      {/* TODO: Add settings also (idk what exactly - maybe bcc?) */}
      <FormGroup>
        <Label>
          Subject: <br />
          <textarea
            value={emailSubject.msgSubject}
            name="emailSubject"
            onChange={handleSubjectChange}
          />
        </Label>
        <br />
        <Label>
          Message: <br />
          <textarea
            value={emailBody.msgBody}
            name="emailBody"
            onChange={handleBodyChange}
          />
        </Label>
        <br />
      </FormGroup>
      <br />
      <ActionButtons {...props} nextStep={validate} />
    </div>
  );
};

const Four = (props) => {
  // if user.props.agents is empty, then agentNames is an empty array
  const agentEmails = props.user.agents
    ? props.user.agents.map((c) => c.email)
    : [""];
  const agentEmailString = agentEmails.join(",");

  // if user.props.characters is empty, then characterNames is an empty array
  const characterNames = props.user.characters
    ? props.user.characters.map((c) => c.characterName)
    : [""];
  const charNameString = characterNames.join(", ");
  const charNameEmailString = characterNames.join(",%20");

  // if user.props.agents is empty, then agentNames is an empty array
  const agentNames = props.user.agents
    ? props.user.agents.map((c) => c.name)
    : [""];
  const agentNameString = agentNames.join(", ");

  // TODO: maybe change subject to be name of project
  // TODO: add bcc or other email customization options
  const link =
    "mailto:" +
    agentEmailString +
    "?subject=" +
    props.user.msgSubject +
    "&body=" +
    props.user.msgBody;

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Confirmation</h2>
      <p>
        <b>Agents:</b> {agentNameString}
      </p>
      <p>
        <b>Character:</b> {charNameString}
      </p>
      <p>
        <b>Message:</b> {props.user.msgBody}
      </p>
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
