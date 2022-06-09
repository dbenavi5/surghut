/* eslint-disable indent */
/* eslint-disable comma-dangle */
/* eslint-disable object-curly-spacing */
/* eslint-disable quotes */
/* eslint-disable max-len */
/* eslint-disable react/prop-types */
/* eslint-disable require-jsdoc */
import React, { useState } from "react";
import { MailTextInput, TextInput, InputWithChoice } from "../input/Input";
import Button from "../button/Button";
// import styles from './Form.module.css';

import { useAuth } from "../../contexts/auth";
import {
  addCovidCase,
  cancelCovidCase,
  validateCovidCase,
} from "../../api/covid/covid";

import {
  addFireCase,
  cancelFiredCase,
  validateFireCase,
} from "../../api/fire/fire";

import { sendMail } from "../../api/mailbox/mailbox";

import { registerAlert, sendAlert, cancelAlert } from "../../api/alert/alert";

// eslint-disable-next-line react/prop-types
function CovidCaseForm({ idData, dataCounty }) {
  const [newCase, setNewCase] = useState("");
  const [newDeath, setNewDeath] = useState("");
  const [county, setCounty] = useState("");
  const [result, setResult] = useState(null);

  const { user } = useAuth();

  return (
    <div id="form">
      <div className="form container">
        <p className="">Covid case form</p>
        <TextInput
          className=""
          type={"number"}
          value={newCase}
          placeHolder={"Enter number of covid cases"}
          onTextChange={setNewCase}
        />
        <TextInput
          className=""
          type={"number"}
          value={newDeath}
          placeHolder={"Enter number of covid death cases"}
          onTextChange={setNewDeath}
        />
        <InputWithChoice
          className=""
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={"enter the name the county"}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await addCovidCase(
              user,
              newCase,
              newDeath,
              county
            );
            setResult(fetchResult);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

// eslint-disable-next-line camelcase
function ValidateCovidCaseForm({ upload_time, county, nbCase, nbDeath }) {
  const { user } = useAuth();

  const [result, setResult] = useState(null);

  return (
    <div id="form">
      <div className="form container">
        <p className="">Covid case form</p>
        <p className="">upload time : {upload_time.replace("Z", "")}</p>
        <p className="">county : {county}</p>
        <p className="">Current number of case: {nbCase}</p>
        <p className="">Current number of death: {nbDeath}</p>
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await cancelCovidCase(
              user,
              upload_time.replace("Z", "")
            );
            setResult(fetchResult);
          }}
        >
          Delete
        </Button>
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await validateCovidCase(
              user,
              upload_time.replace("Z", "")
            );
            setResult(fetchResult);
          }}
        >
          Validate
        </Button>
      </div>
    </div>
  );
}

function FireCaseForm({ idData, dataCounty }) {
  const [newCase, setNewCase] = useState("");
  const [county, setCounty] = useState("");
  const [result, setResult] = useState(null);

  const { user } = useAuth();

  // console.log(newCase);

  return (
    <div id="form">
      <div className="form container">
        <p className="">Fire case form</p>
        <TextInput
          className=""
          type={"number"}
          value={newCase}
          placeHolder={"Enter number of fire case"}
          onTextChange={setNewCase}
        />
        <InputWithChoice
          className=""
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={"enter the name the county"}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await addFireCase(user, newCase, county);
            setResult(fetchResult);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
}

// eslint-disable-next-line camelcase
function ValidateFireCaseForm({ upload_time, county, nbCase }) {
  const { user } = useAuth();
  const [result, setResult] = useState(null);

  return (
    <div id="form">
      <div className="form container">
        <p className="">Fire case form</p>
        <p className="">upload time : {upload_time.replace("Z", "")}</p>
        <p className="">county : {county}</p>
        <p className="">Current number of case: {nbCase}</p>
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await cancelFiredCase(
              user,
              upload_time.replace("Z", "")
            );
            setResult(fetchResult);
          }}
        >
          Delete
        </Button>
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await validateFireCase(
              user,
              upload_time.replace("Z", "")
            );
            setResult(fetchResult);
          }}
        >
          Validate
        </Button>
      </div>
    </div>
  );
}

function MailForm() {
  const [receiver, setReceiver] = useState("");
  const [object, setObjet] = useState("");
  const [message, setMessage] = useState("");
  const [result, setResult] = useState(null);

  const { user } = useAuth();

  return (
    <div id="form">
      <div className="form container">
        <p className="">Send a mail to a user</p>
        <TextInput
          className=""
          type={"text"}
          value={receiver}
          placeHolder={"Enter username of the receiver"}
          onTextChange={setReceiver}
        />
        <TextInput
          className=""
          type={"text"}
          value={object}
          placeHolder={"enter the subject of your mail"}
          onTextChange={setObjet}
        />
        <MailTextInput
          className=""
          type={"text"}
          value={message}
          placeHolder={"enter the message of your mail"}
          onTextChange={setMessage}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await sendMail(user, receiver, object, message);
            setResult(fetchResult);
          }}
        >
          send
        </Button>
      </div>
    </div>
  );
}

// Form that save a mail in the data base in case we need to send
// a email to a user when his county is concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

function AlertRegisterForm({ idData, dataCounty }) {
  const [mail, setMail] = useState("");
  const [county, setCounty] = useState("");
  const [result, setResult] = useState(null);

  return (
    <div id="form">
      <div className="form container">
        <p className="">Register your mail to receive alert from your county</p>
        <TextInput
          className=""
          type={"text"}
          value={mail}
          placeHolder={"Enter your mail"}
          onTextChange={setMail}
        />
        <InputWithChoice
          className=""
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={"enter the name of your county"}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            const fetchResult = await registerAlert(mail, county); // send the mail and county of the user in the Alert database
            setResult(fetchResult);
          }}
        >
          register
        </Button>
      </div>
    </div>
  );
}

// Form that send a mail to all user in the Alert database and are in the county concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

function SendAlertForm({ idData, dataCounty }) {
  const [county, setCounty] = useState("");
  const [level, setLevel] = useState("");
  const [result, setResult] = useState(null);

  const { user } = useAuth(); // get information on the current user connected

  return (
    <div id="form">
      <div className="form container">
        <p className="">Send a alert in a county</p>
        <InputWithChoice
          className=""
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={"enter the name of the county"}
          onTextChange={setCounty}
        />
        <TextInput
          className=""
          type={"number"}
          value={level}
          placeHolder={"Enter the new level of alert"}
          onTextChange={setLevel}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            const fetchResult = await sendAlert(user, county, level); // send a email to all user in the county concerned and tell the alert level
            setResult(fetchResult);
          }}
        >
          send
        </Button>
      </div>
    </div>
  );
}

// Form that send a mail to all user in the Alert database and are in the county concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

function CancelAlertForm({ idData, dataCounty }) {
  const [county, setCounty] = useState("");
  const [result, setResult] = useState(null);

  const { user } = useAuth(); // get information on the current user connected

  return (
    <div id="form">
      <div className="form container">
        <p className="">Cancel an alert in a county</p>
        <InputWithChoice
          className=""
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={"enter the name of the county"}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className=""
          onClick={async () => {
            const fetchResult = await cancelAlert(user, county); // send a email to all user in the county concerned
            setResult(fetchResult);
          }}
        >
          send
        </Button>
      </div>
    </div>
  );
}

export {
  CovidCaseForm,
  ValidateCovidCaseForm,
  FireCaseForm,
  ValidateFireCaseForm,
  MailForm,
  AlertRegisterForm,
  SendAlertForm,
  CancelAlertForm,
};
