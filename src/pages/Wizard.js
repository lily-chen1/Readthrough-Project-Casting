import React, { useState } from "react";
import { Stepper, Step } from "react-form-stepper";
import StepWizard from "react-step-wizard";
import { Row, Col, Button, FormGroup, Label, Input } from "reactstrap";
import Select from 'react-select';
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
	const options = [
		{ name: 'agent1', label: 'Agent 1' },
		{ name: 'agent2', label: 'Agent 2' },
		{ name: 'agent3', label: 'Agent 3' }
	  ]
	  
	  const [selectedOption, setSelectedOption] = useState([]);
	  const handleChange = (options) => {
		setSelectedOption(options);
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
		<h1>Select an Actor</h1>
		<FormGroup>
			<Label>Name: </Label>
			<Select options={options} onChange={handleChange}/>
		</FormGroup>
		<br />
		<ActionButtons {...props} nextStep={validate} />
		{/* <ActionButtons {...props} nextStep={validate} /> */}
		</div>
  );
};

const Two = (props) => {
  const [error, setError] = useState("");

  const characters = [
	{ character: 'chara1', label: 'Character 1' },
	{ character: 'chara2', label: 'Character 2' },
	{ character: 'chara3', label: 'Character 3' }
  ]
  
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
        <Label>
          For: <b>{props.user.name || ""}</b>
        </Label>
      </FormGroup>
      <FormGroup>
        <Label>Character: </Label>
		<Select options={characters} onChange={handleCharacterChange}/>
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

const Three = (props) => {
  console.log("step3 receive user object");
  console.log(props.user);

  const handleLastStep = () => {
    props.lastStep();
    props.completeCallback();
  };

  return (
    <div>
      <h2>Email Configuration</h2>
      <p>Agent: {props.user.value}</p>
      <p>Character: {props.user.character}</p>
      <br />
	  <FormGroup>
        <Label>Message: </Label>
		<br/>
        <textarea name="postContent" />
      </FormGroup>
	  <br/>
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
      ...val
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
        <Step label="Select Actor" />
        <Step label="Select Character" />
        <Step label="Email Settings" />
        <Step label="Confirmation" />
      </Stepper>
      {/* NOTE: IMPORTANT !! StepWizard must contains at least 2 children components, else got error */}
      <StepWizard instance={assignStepWizard} onStepChange={handleStepChange}>
        <One userCallback={assignUser} />
        <Two user={user} userCallback={assignUser} />
        <Three user={user} completeCallback={handleComplete} />
      </StepWizard>
    </div>
  );
};

export default Sample;
