import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import { MultiSelect } from "react-multi-select-component";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import "./Wizard.css";
// NOTE: each character and agents needs to have label and value properties
import agents from "./data/agents.json"; // needs to be array of agent objects
import characters from "./data/characters.json"; // needs to be array of character objects
import EmailLinks from "./components/EmailLinks";

// TODO: change styling to be part of a theme!

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
      <Row style={{ paddingBottom: "20px" }}>
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

// to convert names of agents or characters into a string of all the names
function nameStringBuilder(listAgentsCharacters, type) {
  console.log("name building: ");
  console.log(listAgentsCharacters);
  if (type === "agents") {
    // if the list is of agents, access the agentName property
    const names = listAgentsCharacters
      ? listAgentsCharacters.map((c) => c.agentName).join(", ")
      : [""];
    return names;
  } else if (type === "characters") {
    // if the list is of character, access the characterName property instead
    const names = listAgentsCharacters
      ? listAgentsCharacters.map((c) => c.characterName).join(", ")
      : [""];
    return names;
  }
  return [""]; // just in case
}

const One = (props) => {
  const [error, setError] = useState("");
  const [selectedCharacters, setselectedCharacters] = useState([]);

  const handleCharacterChange = (character) => {
    console.log("Character change: ");
    console.log(character);
    setselectedCharacters(character);
    props.setBody({
      msgBody:
        "Looking for actors to play the role/s of: " +
        nameStringBuilder(character, "characters") +
        ". Let me know if you're interested!",
    });
    props.setSubject({
      msgSubject:
        "Cast searching for: " + nameStringBuilder(character, "characters"),
    });
    console.log("props:");
    console.log(props);
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

  const charNameString = nameStringBuilder(props.user.characters, "characters");

  return (
    <div>
      <span style={{ color: "red" }}>{error}</span>
      <h3>Select an Agent</h3>
      <FormGroup>
        <Label>
          <TextField
            id="characters-selected"
            value={charNameString}
            variant="standard"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
            size="small"
            label="Characters Selected"
          />
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
  const [emailSettings, setEmailSettings] = useState({
    bcc: "false",
  });

  console.log("step3 receive user object");
  console.log(props.user);

  const handleBodyChange = (e) => {
    console.log("body change");
    console.log(props.user);
    props.setBody({ msgBody: e.target.value });
  };

  const handleSubjectChange = (e) => {
    console.log("subject change");
    console.log(props.user);
    props.setSubject({ msgSubject: e.target.value });
  };
  const handleSettingsChange = (e) => {
    console.log("settings change");
    console.log(e);
    setEmailSettings({ bcc: e.target.value });
  };

  const charNameString = nameStringBuilder(props.user.characters, "characters");
  const agentNameString = nameStringBuilder(props.user.agents, "agents");

  const validate = () => {
    if (!props.emailBody) setError("Email is empty!");
    else {
      const body = props.emailBody.msgBody;
      const subject = props.emailSubject.msgSubject;
      const bcc = emailSettings.bcc;
      setError("");
      props.nextStep();
      props.userCallback({ emailBody: body, emailSubject: subject, bcc: bcc });
    }
  };

  return (
    <div>
      <h3>Compose Message</h3>
      <p>
        <TextField
          id="characters-selected"
          value={charNameString}
          variant="standard"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          size="small"
          label="Characters Selected"
        />
      </p>
      <p>
        <TextField
          id="agents-selected"
          value={agentNameString}
          variant="standard"
          fullWidth
          InputProps={{
            readOnly: true,
          }}
          size="small"
          label="Agents Selected"
        />
      </p>
      <FormGroup>
        <Label style={{ width: "60%" }}>
          {/* <h3>Compose Message: </h3> */}
          <TextField
            id="email-subject-textarea"
            label="Subject"
            multiline
            sx={{ width: "60%" }}
            maxRows={3}
            InputLabelProps={{ shrink: true }}
            defaultValue={props.emailSubject.msgSubject}
            onChange={handleSubjectChange}
            variant="filled"
            margin="normal"
          />
        </Label>
        <Label
          style={{ float: "right", marginRight: "10px", paddingTop: "20px" }}
        >
          <ToggleButtonGroup
            value={emailSettings.bcc}
            exclusive
            onChange={handleSettingsChange}
            aria-label="email bcc settings"
            size="small"
          >
            <ToggleButton value="true" aria-label="bcc">
              BCC
            </ToggleButton>
            <ToggleButton value="false" aria-label="separate emails">
              Separate Emails
            </ToggleButton>
          </ToggleButtonGroup>
        </Label>
        <br />
        <Label style={{ width: "100%" }}>
          <TextField
            id="email-message-textarea"
            label="Message"
            multiline
            fullWidth
            rows={5}
            InputLabelProps={{ shrink: true }}
            defaultValue={props.emailBody.msgBody}
            onChange={handleBodyChange}
            variant="filled"
            margin="normal"
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
  console.log(props);

  const charNameString = nameStringBuilder(props.user.characters, "characters");
  const agentNameString = nameStringBuilder(props.user.agents, "agents");

  // need agentemail string, email subject, email body, and whether or not to bcc
  // TODO: maybe change subject to be name of project

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
        <b>Characters:</b> {charNameString}
      </p>
      <p>
        <b>Subject:</b> {props.user.emailSubject}
      </p>
      <p>
        <b>Message:</b> {props.user.emailBody}
      </p>
      <EmailLinks
        agents={props.user.agents}
        subject={props.emailSubject.msgSubject}
        body={props.emailBody.msgBody}
        bcc={props.user.bcc}
      ></EmailLinks>
      <br />
      <ActionButtons {...props} lastStep={handleLastStep} />
    </div>
  );
};

const Sample = () => {
  const [stepWizard, setStepWizard] = useState(null);
  const [user, setUser] = useState({});
  const [activeStep, setActiveStep] = useState(0);
  const [emailBody, setEmailBody] = useState({});
  const [emailSubject, setEmailSubject] = useState({});

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
        <One
          userCallback={assignUser}
          setBody={setEmailBody}
          setSubject={setEmailSubject}
        />
        <Two user={user} userCallback={assignUser} />
        <Three
          user={user}
          userCallback={assignUser}
          emailBody={emailBody}
          emailSubject={emailSubject}
          setBody={setEmailBody}
          setSubject={setEmailSubject}
        />
        <Four
          user={user}
          completeCallback={handleComplete}
          emailBody={emailBody}
          emailSubject={emailSubject}
        />
      </StepWizard>
    </div>
  );
};

export default Sample;
