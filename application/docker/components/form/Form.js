/* eslint-disable react/prop-types */
import React, {useState} from 'react';
import {MailTextInput, TextInput, InputWithChoice} from '../input/Input';
import Button from '../button/Button';
import styles from './Form.module.css';

import {useAuth} from '../../contexts/auth';
import {
  addCovidCase,
  cancelCovidCase,
  validateCovidCase,
} from '../../api/covid/covid';

import {
  addFireCase,
  cancelFiredCase,
  validateFireCase,
} from '../../api/fire/fire';

import {sendMail} from '../../api/mailbox/mailbox';

import {registerAlert, sendAlert, cancelAlert} from '../../api/alert/alert';

const CovidCaseForm = ({idData, dataCounty}) => {
  const [newCase, setNewCase] = useState('');
  const [newDeath, setNewDeath] = useState('');
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);

  const {user} = useAuth();

  return (
    <div id={styles.caseForm}>
      <div className={'container'} id={styles.caseContainer}>
        <h1>Covid case form</h1>
        <TextInput
          className={styles.caseInput}
          type={'number'}
          value={newCase}
          placeHolder={'Enter number of covid cases'}
          onTextChange={setNewCase}
        />
        <TextInput
          className={styles.caseInput}
          type={'number'}
          value={newDeath}
          placeHolder={'Enter number of covid death cases'}
          onTextChange={setNewDeath}
        />
        <InputWithChoice
          className={styles.caseInput}
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={'enter the name the county'}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className="button"
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await addCovidCase(
                user,
                newCase,
                newDeath,
                county,
            );
            setResult(fetchResult);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

const ValidateCovidCaseForm = ({uploadTime, county, nbCase, nbDeath}) => {
  const {user} = useAuth();

  const [result, setResult] = useState(null);

  return (
    <div id={styles.form}>
      <div cclassName={styles.container}>
        <h1>Covid case form</h1>
        <p>upload time : {uploadTime.replace('Z', '')}</p>
        <p>county : {county}</p>
        <p>Current number of case: {nbCase}</p>
        <p>Current number of death: {nbDeath}</p>
        {result ? <p>{result}</p> : <></>}
        <Button
          className="button"
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await cancelCovidCase(
                user,
                uploadTime.replace('Z', ''),
            );
            setResult(fetchResult);
          }}
        >
          Delete
        </Button>
        <Button
          className="button"
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await validateCovidCase(
                user,
                uploadTime.replace('Z', ''),
            );
            setResult(fetchResult);
          }}
        >
          Validate
        </Button>
      </div>
    </div>
  );
};

const FireCaseForm = ({idData, dataCounty}) => {
  const [newCase, setNewCase] = useState('');
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);

  const {user} = useAuth();

  // console.log(newCase);

  return (
    <div id={styles.caseForm}>
      <div className={'container'} id={styles.caseContainer}>
        <h1>Fire case form</h1>
        <TextInput
          className={styles.caseInput}
          type={'number'}
          value={newCase}
          placeHolder={'Enter number of fire case'}
          onTextChange={setNewCase}
        />
        <InputWithChoice
          className={styles.caseInput}
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={'enter the name the county'}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className="button"
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
};

// eslint-disable-next-line camelcase
const ValidateFireCaseForm = ({upload_time, county, nbCase}) => {
  const {user} = useAuth();
  const [result, setResult] = useState(null);

  return (
    <div id={styles.form}>
      <div className={styles.container}>
        <h1>Fire case form</h1>
        <p>upload time : {upload_time.replace('Z', '')}</p>
        <p>county : {county}</p>
        <p>Current number of case: {nbCase}</p>
        {result ? <p>{result}</p> : <></>}
        <Button
          className="button"
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await cancelFiredCase(
                user,
                upload_time.replace('Z', ''),
            );
            setResult(fetchResult);
          }}
        >
          Delete
        </Button>
        <Button
          className="button"
          onClick={async () => {
            // console.log('new case covid fill');
            const fetchResult = await validateFireCase(
                user,
                upload_time.replace('Z', ''),
            );
            setResult(fetchResult);
          }}
        >
          Validate
        </Button>
      </div>
    </div>
  );
};

const MailForm = () => {
  const [receiver, setReceiver] = useState('');
  const [object, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);

  const {user} = useAuth();

  return (
    <div id={styles.form}>
      <div className={styles.container}>
        <h1>Send a mail to a user</h1>
        <TextInput
          className={styles.input}
          type={'text'}
          value={receiver}
          placeHolder={'Enter username of the receiver'}
          onTextChange={setReceiver}
        />
        <TextInput
          className={styles.input}
          type={'text'}
          value={object}
          placeHolder={'enter the subject of your mail'}
          onTextChange={setObjet}
        />
        <MailTextInput
          className={styles.inputMail}
          type={'text'}
          value={message}
          placeHolder={'enter the message of your mail'}
          onTextChange={setMessage}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className="button"
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
};

// Form that save a mail in the data base in case we need to send
// a email to a user when his county is concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

const AlertRegisterForm = ({idData, dataCounty}) => {
  const [mail, setMail] = useState('');
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);

  return (
    <div id={styles.alertForm}>
      <div className={'container'} id={styles.alertContainer}>
        <h1>Register to receive alert of your county</h1>
        <TextInput
          className={styles.alertInput}
          type={'text'}
          value={mail}
          placeHolder={'Enter your mail'}
          onTextChange={setMail}
        />
        <InputWithChoice
          className={styles.alertInput}
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={'enter the name of your county'}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className={styles.alertBtn}
          onClick={async () => {
            // send the mail and county of the user in the Alert database
            const fetchResult = await registerAlert(mail, county);
            setResult(fetchResult);
          }}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

// Form that send a mail to all user in the Alert database
// and are in the county concerned idData is the id of the
// dom element of the dataCounty dataCounty is an array of
// json where there is the name of all county
const SendAlertForm = ({idData, dataCounty}) => {
  const [county, setCounty] = useState('');
  const [level, setLevel] = useState('');
  const [result, setResult] = useState(null);

  const {user} = useAuth(); // get information on the current user connected

  return (
    <div id={styles.alertForm}>
      <div className={'container'} id={styles.alertContainer}>
        <h1>Send a alert in a county</h1>
        <TextInput
          className={styles.alertInput}
          type={'number'}
          value={level}
          placeHolder={'Enter the new level of alert'}
          onTextChange={setLevel}
        />
        <InputWithChoice
          className={styles.alertInput}
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={'enter the name of the county'}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className={styles.alertBtn}
          onClick={async () => {
            // send a email to all user in the county concerned
            // and tell the alert level
            const fetchResult = await sendAlert(user, county, level);
            setResult(fetchResult);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

// Form that send a mail to all user in the Alert database
// and are in the county concerned idData is the id of the
// dom element of the dataCounty dataCounty is an array of
// json where there is the name of all county

const CancelAlertForm = ({idData, dataCounty}) => {
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);

  const {user} = useAuth(); // get information on the current user connected

  return (
    <div id={styles.alertForm}>
      <div className={'container'} id={styles.alertContainer}>
        <h1>Cancel an alert in a county</h1>
        <InputWithChoice
          className={styles.alertInput}
          data={dataCounty}
          idData={idData}
          value={county}
          placeHolder={'enter the name of the county'}
          onTextChange={setCounty}
        />
        {result ? <p>{result}</p> : <></>}
        <Button
          className={styles.alertBtn}
          onClick={async () => {
            // send a email to all user in the county concerned
            const fetchResult = await cancelAlert(user, county);
            setResult(fetchResult);
          }}
        >
          Send
        </Button>
      </div>
    </div>
  );
};

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
