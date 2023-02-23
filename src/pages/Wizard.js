import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
// import Select from "react-select";
// import Multiselect from "multiselect-react-dropdown";
import { MultiSelect } from "react-multi-select-component";
import "./Wizard.css";

// TODO: instead of current styling, probably implement a theme and use material ui for some thing
// guy said styling and colors not as important as actually getting themes implemented so that coloring can be changed easily

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

  const leftButonStyling = {
    display: "inline-block",
    width: "100px",
    justifyContent: "space-around",
    float: "left",
    color: "#8e8169",
    backgroundColor: "#ded7c3",
    borderRadius: "4px",
    border: "none",
    height: "25px",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
  };

  const rightButtonStyling = {
    display: "inline-block",
    width: "100px",
    justifyContent: "space-around",
    float: "right",
    color: "#8e8169",
    backgroundColor: "#ded7c3",
    borderRadius: "4px",
    border: "none",
    height: "25px",
    fontSize: "15px",
    fontWeight: "bold",
    textAlign: "center",
    cursor: "pointer",
  };

  return (
    <div>
      <Row>
        {props.currentStep > 1 && (
          <Col>
            <Button style={leftButonStyling} onClick={handleBack}>
              Back
            </Button>
          </Col>
        )}
        <Col>
          {props.currentStep < props.totalSteps && (
            <Button style={rightButtonStyling} onClick={handleNext}>
              Next
            </Button>
          )}
          {props.currentStep === props.totalSteps && (
            <Button style={rightButtonStyling} onClick={handleFinish}>
              Finish
            </Button>
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
    if (!selectedCharacters.length) setError("Please select a Character");
    else {
      setError("");
      props.nextStep();
      props.userCallback({ characters: selectedCharacters });
    }
  };

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h3>Select a Character</h3>
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
    if (!selectedAgents.length) setError("Agent is mandatory field");
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
      <h3>Select an Agent</h3>
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
  const [emailSettings, setEmailSettings] = useState({
    bcc: false,
  });
  const handleSettingsChange = (e) => {
    console.log("settings change");
    console.log(e);
    setEmailSettings({ bcc: e.target.checked });
  };

  const validate = () => {
    if (!emailBody) setError("Email is empty!");
    else {
      const body = emailBody.msgBody;
      const subject = emailSubject.msgSubject;
      const bcc = emailSettings.bcc;
      setError("");
      props.nextStep();
      props.userCallback({ emailBody: body, emailSubject: subject, bcc: bcc });
    }
  };

  return (
    <div>
      <h3>Email Configuration</h3>
      <p>
        <b> Agents:</b> {agentNameString}
      </p>
      <p>
        <b>Characters: </b>
        {charNameString}
      </p>
      <FormGroup>
        <Label style={{ width: "100%" }}>
          <b>Subject:</b> <br />
          <textarea
            style={{
              width: "70%",
              height: "40px",
              border: "1px solid #8E8169",
              borderRadius: "5px",
              textJustify: "center",
            }}
            value={emailSubject.msgSubject}
            name="emailSubject"
            onChange={handleSubjectChange}
          />
        </Label>
        <Label style={{ float: "right", marginRight: "10px" }}>
          <Input
            style={{ color: "#8E8169" }}
            type="checkbox"
            onChange={handleSettingsChange}
          />{" "}
          BCC
        </Label>
        <br />
        <Label style={{ width: "100%" }}>
          <b>Message:</b> <br />
          <textarea
            style={{
              width: "100%",
              height: "90px",
              border: "1px solid #8E8169",
              borderRadius: "5px",
              font: "inherit",
              fontSize: "14px",
            }}
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
  console.log("four");
  console.log(props.user);
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

  // if user.props.agents is empty, then agentNames is an empty array
  const agentNames = props.user.agents
    ? props.user.agents.map((c) => c.name)
    : [""];
  const agentNameString = agentNames.join(", ");

  // TODO: maybe change subject to be name of project
  let link = "";
  if (props.user.bcc) {
    link =
      "mailto:?bcc=" +
      agentEmailString +
      "&subject=" +
      props.user.emailSubject +
      "&body=" +
      props.user.emailBody;
  } else {
    link =
      "mailto:" +
      agentEmailString +
      "?subject=" +
      props.user.emailSubject +
      "&body=" +
      props.user.emailBody;
  }

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h3>Confirmation</h3>
      <p>
        <b>Agents:</b> {agentNameString}
      </p>
      <p>
        <b>Character:</b> {charNameString}
      </p>
      <p>
        <b>Subject:</b> {props.user.emailSubject}
      </p>
      <p>
        <b>Message:</b> {props.user.emailBody}
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

  const connectorStyling = {
    activeColor: "#B6AC96",
    completedColor: "#8E8169",
    disabledColor: "#DED7C3",
    size: 4,
  };

  const stepperStyling = {
    activeBgColor: "#b6ac96",
    activeTextColor: "#00000",
    completedBgColor: "#8E8169",
    completedTextColor: "#000000",
    inactiveBgColor: "#DED7C3",
    inactiveTextColor: "#000000",
  };

  return (
    <div>
      <Stepper
        activeStep={activeStep}
        connectorStyleConfig={connectorStyling}
        styleConfig={stepperStyling}
        connectorStateColors={true}
      >
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
