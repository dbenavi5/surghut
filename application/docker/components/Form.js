import React, {useState} from 'react';
import {MailTextInput, TextInput, InputWithChoice} from './Input';
import Button from './Button';
import styles from './Form.module.css';

import {useAuth} from '../contexts/auth';
import {addCovidCase,
  cancelCovidCase,
  validateCovidCase,
} from '../api/covid/covid';

import {addFireCase,
  cancelFiredCase,
  validateFireCase} from '../api/fire/fire';

import {sendMail} from '../api/mailbox/mailbox';

import {registerAlert, sendAlert, cancelAlert} from '../api/alert/alert';

function LoginForm() {
  const [pseudo, setPseudo] = useState('');     //set username
  const [password, setPassword] = useState('');

  const {login} = useAuth();

  return (
    <div>
      <p className={styles.form_wrap}>Login</p>
      <TextInput
        type={'text'}
        value={pseudo}
        placeHolder={'Pseudo'}
        onTextChange={setPseudo}
      />
      <TextInput
        type={'password'}
        value={password}
        placeHolder={'Password'}
        onTextChange={setPassword}
      />
      <Button
        onClick={ () => {
          console.log('login');
          login(pseudo, password);
        }}
      >
                Sign In
      </Button>
    </div>
  );
}

function RegisterForm() {
  const [pseudo, setPseudo] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useAuth();

  return (
    <div>
      <p className={styles.form_wrap}>Sign-Up to get alerts!</p>
      
      <div className={styles.reg_input}>
        <TextInput
          type={'text'}
          value={pseudo}
          placeHolder={'Username'}
          onTextChange={setPseudo}
        />
      </div>
      
      <div className={styles.reg_input}>
        <TextInput
          type={'text'}
          value={mail}
          placeHolder={'Email'}
          onTextChange={setMail}
        />
      </div>
      <div className={styles.reg_input}>
        <TextInput
          type={'password'}
          value={password}
          placeHolder={'Password'}
          onTextChange={setPassword}
        />
      </div>
      <Button
        onClick={ () => {
          console.log('login');
          register(pseudo, mail, password);
        }}
      >
                Sign Up
      </Button>
    </div>
  );
}

function CovidCaseForm({idData, dataCounty}) {
  const [newCase, setNewCase] = useState('');
  const [newDeath, setNewDeath] = useState('');
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);


  const {user} = useAuth();

  return (
    <div>
      <p className={styles.form_wrap}>Covid case form</p>
      <TextInput
        type={'number'}
        value={newCase}
        placeHolder={'Enter number of covid case'}
        onTextChange={setNewCase}
      />
      <TextInput
        type={'number'}
        value={newDeath}
        placeHolder={'Enter number of covid death case'}
        onTextChange={setNewDeath}
      />
      <InputWithChoice
        data={dataCounty}
        idData={idData}
        value={county}
        placeHolder={'enter the name the county'}
        onTextChange={setCounty}
      />
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
         const fetchResult = await addCovidCase(user, newCase, newDeath,county);
         setResult(fetchResult);
        }}
      >
                  Send
      </Button>
    </div>
  );
}

function ValidateCovidCaseForm({upload_time, county, nbCase, nbDeath}) {
  const {user} = useAuth();

  const [result, setResult] = useState(null);


  return (
    <div>
      <p className={styles.form_wrap}>Covid case form</p>
      <p className={styles.form_wrap}>upload time : {upload_time.replace('Z', '')}</p>
      <p className={styles.form_wrap}>county : {county}</p>
      <p className={styles.form_wrap}>Current number of case: {nbCase}</p>
      <p className={styles.form_wrap}>Current number of death: {nbDeath}</p>
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
          const fetchResult = await cancelCovidCase(user, upload_time.replace('Z', ''));
          setResult(fetchResult);

        }}
      >
                  Delete
      </Button>
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
          const fetchResult = await validateCovidCase(user, upload_time.replace('Z', ''));
         setResult(fetchResult);
          
        }}
      >
                  Validate
      </Button>
    </div>
  );
}

function FireCaseForm({idData, dataCounty}) {
  const [newCase, setNewCase] = useState('');
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);


  const {user} = useAuth();

  console.log(newCase);

  return (
    <div>
      <p className={styles.form_wrap}>Fire case form</p>
      <TextInput
        type={'number'}
        value={newCase}
        placeHolder={'Enter number of fire case'}
        onTextChange={setNewCase}
      />
      <InputWithChoice
        data={dataCounty}
        idData={idData}
        value={county}
        placeHolder={'enter the name the county'}
        onTextChange={setCounty}
      />
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
          const fetchResult = await addFireCase(user, newCase, county);
         setResult(fetchResult);

        }}
      >
                  Send
      </Button>
    </div>
  );
}

function ValidateFireCaseForm({upload_time, county, nbCase}) {
  const {user} = useAuth();
  const [result, setResult] = useState(null);


  return (
    <div>
      <p className={styles.form_wrap}>Fire case form</p>
      <p className={styles.form_wrap}>upload time : {upload_time.replace('Z', '')}</p>
      <p className={styles.form_wrap}>county : {county}</p>
      <p className={styles.form_wrap}>Current number of case: {nbCase}</p>
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
          const fetchResult = await cancelFiredCase(user, upload_time.replace('Z', ''));
          setResult(fetchResult);

        }}
      >
                  Delete
      </Button>
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
          const fetchResult = await validateFireCase(user, upload_time.replace('Z', ''));
          setResult(fetchResult);
        }}
      >
                  Validate
      </Button>
    </div>
  );
}

function MailForm() {
  const [receiver, setReceiver] = useState('');
  const [object, setObjet] = useState('');
  const [message, setMessage] = useState('');
  const [result, setResult] = useState(null);


  const {user} = useAuth();

  return (
    <div>
      <p className={styles.form_wrap}>Send a mail to a user</p>
      <TextInput
        type={'text'}
        value={receiver}
        placeHolder={'Enter username of the receiver'}
        onTextChange={setReceiver}
      />
      <TextInput
        type={'text'}
        value={object}
        placeHolder={'enter the subject of your mail'}
        onTextChange={setObjet}
      />
      <MailTextInput
        type={'text'}
        value={message}
        placeHolder={'enter the message of your mail'}
        onTextChange={setMessage}
      />
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          console.log('new case covid fill');
          const fetchResult = await sendMail(user, receiver, object, message);
          setResult(fetchResult);
        }}
      >
                  send
      </Button>
    </div>
  );
}


// Form that save a mail in the data base in case we need to send
// a email to a user when his county is concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

function AlertRegisterForm({idData, dataCounty}) {
  const [mail, setMail] = useState('');
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);


  return (
    <div>
      <p className={styles.form_wrap}>Register your mail to receive alert from your county</p>
      <TextInput
        type={'text'}
        value={mail}
        placeHolder={'Enter your mail'}
        onTextChange={setMail}
      />
      <InputWithChoice
        data={dataCounty}
        idData={idData}
        value={county}
        placeHolder={'enter the name of your county'}
        onTextChange={setCounty}
      />
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          const fetchResult = await registerAlert(mail, county); // send the mail and county of the user in the Alert database
          setResult(fetchResult);        
        }}
      >
                  register
      </Button>
    </div>
  );
}

// Form that send a mail to all user in the Alert database and are in the county concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

function SendAlertForm({idData, dataCounty}) {
  const [county, setCounty] = useState('');
  const [level, setLevel] = useState('');
  const [result, setResult] = useState(null);


  const {user} = useAuth(); // get information on the current user connected

  return (
    <div>
      <p className={styles.form_wrap}>Send a alert in a county</p>
      <InputWithChoice
        data={dataCounty}
        idData={idData}
        value={county}
        placeHolder={'enter the name of the county'}
        onTextChange={setCounty}
      />
      <TextInput
        type={'number'}
        value={level}
        placeHolder={'Enter the new level of alert'}
        onTextChange={setLevel}
      />
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          const fetchResult = await sendAlert(user, county, level); // send a email to all user in the county concerned and tell the alert level
          setResult(fetchResult);          
        }}
      >
                  send
      </Button>
    </div>
  );
}

// Form that send a mail to all user in the Alert database and are in the county concerned
// idData is the id of the dom element of the dataCounty
// dataCounty is an array of json where there is the name of all county

function CancelAlertForm({idData, dataCounty}) {
  const [county, setCounty] = useState('');
  const [result, setResult] = useState(null);


  const {user} = useAuth(); // get information on the current user connected

  return (
    <div>
      <p className={styles.form_wrap}>Cancel an alert in a county</p>
      <InputWithChoice
        data={dataCounty}
        idData={idData}
        value={county}
        placeHolder={'enter the name of the county'}
        onTextChange={setCounty}
      />
      {result ? <p>{result}</p> : <></>}
      <Button
        onClick={ async () => {
          const fetchResult = await cancelAlert(user, county); // send a email to all user in the county concerned
          setResult(fetchResult);
        }}
      >
                  send
      </Button>
    </div>
  );
}

export {LoginForm,
  RegisterForm,
  CovidCaseForm,
  ValidateCovidCaseForm,
  FireCaseForm,
  ValidateFireCaseForm,
  MailForm,
  AlertRegisterForm,
  SendAlertForm,
  CancelAlertForm,
};
