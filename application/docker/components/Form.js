import React, {useState} from 'react';
import {TextInput} from './Input';
import Button from './Button';

import {useAuth} from '../contexts/auth';
import {addCovidCase,
   cancelCovidCase, 
   validateCovidCase,
   } from '../api/covid/covide';

import {addFireCase, 
  cancelFiredCase, 
  validateFireCase} from '../api/fire/fire';

import {sendMail} from '../api/mailbox/mailbox';

import {registerAlert, sendAlert, cancelAlert} from '../api/alert/alert';

function LoginForm() {
  const [pseudo, setPseudo] = useState('');
  const [password, setPassword] = useState('');

  const {login} = useAuth();

  return (
    <div>
      <p>LoginForm</p>
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
      <p>RegisterForm</p>
      <TextInput
        type={'text'}
        value={pseudo}
        placeHolder={'Pseudo'}
        onTextChange={setPseudo}
      />
      <TextInput
        type={'text'}
        value={mail}
        placeHolder={'Mail'}
        onTextChange={setMail}
      />
      <TextInput
        type={'text'}
        value={password}
        placeHolder={'Password'}
        onTextChange={setPassword}
      />
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

function CovidCaseForm() {
  const [newCase, setNewCase] = useState('');
  const [county, setCounty] = useState('');

  const {user} = useAuth();

  return (
    <div>
        <p>Covid case form</p>
        <TextInput
          type={'text'}
          value={newCase}
          placeHolder={'Enter number of new covid case'}
          onTextChange={setNewCase}
        />
        <TextInput
          type={'text'}
          value={county}
          placeHolder={'enter the name the county'}
          onTextChange={setCounty}
        />
        <Button
          onClick={ () => {
            console.log('new case covid fill');
            addCovidCase(user, newCase, county);
          }}
        >
                  sign up
        </Button>
      </div>
  )
}

function ValidateCovidCaseForm({upload_time, county, nbCase}) {

  const {user} = useAuth();

  return (
    <div>
        <p>Covid case form</p>
        <p>upload time : {upload_time.replace('Z', '')}</p>
        <p>county : {county}</p>
        <p>number of new case: {nbCase}</p>
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
  )
}

function FireCaseForm() {
  const [newCase, setNewCase] = useState('');
  const [county, setCounty] = useState('');

  const {user} = useAuth();

  return (
    <div>
        <p>Fire case form</p>
        <TextInput
          type={'text'}
          value={newCase}
          placeHolder={'Enter number of new covid case'}
          onTextChange={setNewCase}
        />
        <TextInput
          type={'text'}
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
                  sign up
        </Button>
      </div>
  )
}

function ValidateFireCaseForm({upload_time, county, nbCase}) {

  const {user} = useAuth();

  return (
    <div>
        <p>Fire case form</p>
        <p>upload time : {upload_time.replace('Z', '')}</p>
        <p>county : {county}</p>
        <p>number of new case: {nbCase}</p>
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
  )
}

function MailForm() {
  const [receiver, setReceiver] = useState('');
  const [object, setObjet] = useState('');
  const [message, setMessage] = useState('');

  const {user} = useAuth();

  return (
    <div>
        <p>Fire case form</p>
        <TextInput
          type={'text'}
          value={receiver}
          placeHolder={'Enter pseudo of the receiver'}
          onTextChange={setReceiver}
        />
        <TextInput
          type={'text'}
          value={object}
          placeHolder={'enter the object of your mail'}
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
                  sign up
        </Button>
      </div>
  )
}

function AlertRegisterForm() {
  const [mail, setMail] = useState('');
  const [county, setCounty] = useState('');

  return (
    <div>
        <p>Fire alert form</p>
        <TextInput
          type={'text'}
          value={mail}
          placeHolder={'Enter your mail'}
          onTextChange={setMail}
        />
        <TextInput
          type={'text'}
          value={county}
          placeHolder={'enter the name of your county'}
          onTextChange={setCounty}
        />
        <Button
          onClick={ () => {
            console.log('new case covid fill');
            registerAlert(mail, county);
          }}
        >
                  register
        </Button>
      </div>
  )
}

function SendAlertForm() {
  const [county, setCounty] = useState('');
  const [level, setLevel] = useState('');

  const {user} = useAuth();

  return (
    <div>
        <p>Fire alert form</p>
        <TextInput
          type={'text'}
          value={county}
          placeHolder={'enter the name of the county'}
          onTextChange={setCounty}
        />
        <TextInput
          type={'text'}
          value={level}
          placeHolder={'Enter the new level of alert'}
          onTextChange={setLevel}
        />
        <Button
          onClick={ () => {
            console.log('new case covid fill');
            sendAlert(user, county, level);
          }}
        >
                  send
        </Button>
      </div>
  )
}

function CancelAlertForm() {
  const [county, setCounty] = useState('');

  const {user} = useAuth();

  return (
    <div>
        <p>Fire alert cancel form</p>
        <TextInput
          type={'text'}
          value={county}
          placeHolder={'enter the name of the county'}
          onTextChange={setCounty}
        />
        <Button
          onClick={ () => {
            console.log('new case covid fill');
            cancelAlert(user, county);
          }}
        >
                  send
        </Button>
      </div>
  )
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
  CancelAlertForm
};
