import React, {useState} from 'react';
import {TextInput, InputWithChoice} from './Input';
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
                sign in
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
          placeHolder={'Pseudo'}
          onTextChange={setPseudo}
        />
      </div>
      
      <div className={styles.reg_input}>
        <TextInput
          type={'text'}
          value={mail}
          placeHolder={'Mail'}
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
                sign up
      </Button>
    </div>
  );
}

function CovidCaseForm({idData, dataCounty}) {
  const [newCase, setNewCase] = useState('');
  const [newDeath, setNewDeath] = useState('');
  const [county, setCounty] = useState('');

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
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          addCovidCase(user, newCase, newDeath,county);
        }}
      >
                  send
      </Button>
    </div>
  );
}

function ValidateCovidCaseForm({upload_time, county, nbCase, nbDeath}) {
  const {user} = useAuth();

  return (
    <div>
      <p className={styles.form_wrap}>Covid case form</p>
      <p className={styles.form_wrap}>upload time : {upload_time.replace('Z', '')}</p>
      <p className={styles.form_wrap}>county : {county}</p>
      <p className={styles.form_wrap}>Current number of case: {nbCase}</p>
      <p className={styles.form_wrap}>Current number of death: {nbDeath}</p>
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          cancelCovidCase(user, upload_time.replace('Z', ''));
        }}
      >
                  delete
      </Button>
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          validateCovidCase(user, upload_time.replace('Z', ''));
        }}
      >
                  validate
      </Button>
    </div>
  );
}

function FireCaseForm({idData, dataCounty}) {
  const [newCase, setNewCase] = useState('');
  const [county, setCounty] = useState('');

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
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          addFireCase(user, newCase, county);
        }}
      >
                  send
      </Button>
    </div>
  );
}

function ValidateFireCaseForm({upload_time, county, nbCase}) {
  const {user} = useAuth();

  return (
    <div>
      <p className={styles.form_wrap}>Fire case form</p>
      <p className={styles.form_wrap}>upload time : {upload_time.replace('Z', '')}</p>
      <p className={styles.form_wrap}>county : {county}</p>
      <p className={styles.form_wrap}>Current number of case: {nbCase}</p>
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          cancelFiredCase(user, upload_time.replace('Z', ''));
        }}
      >
                  delete
      </Button>
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          validateFireCase(user, upload_time.replace('Z', ''));
        }}
      >
                  validate
      </Button>
    </div>
  );
}

function MailForm() {
  const [receiver, setReceiver] = useState('');
  const [object, setObjet] = useState('');
  const [message, setMessage] = useState('');

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
      <TextInput
        type={'text'}
        value={message}
        placeHolder={'enter the message of your mail'}
        onTextChange={setMessage}
      />
      <Button
        onClick={ () => {
          console.log('new case covid fill');
          sendMail(user, receiver, object, message);
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
      <Button
        onClick={ () => {
          registerAlert(mail, county); // send the mail and county of the user in the Alert database
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
      <Button
        onClick={ () => {
          sendAlert(user, county, level); // send a email to all user in the county concerned and tell the alert level
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
      <Button
        onClick={ () => {
          cancelAlert(user, county); // send a email to all user in the county concerned
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
