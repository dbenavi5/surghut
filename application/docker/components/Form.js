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

export {LoginForm, 
  RegisterForm, 
  CovidCaseForm, 
  ValidateCovidCaseForm,
  FireCaseForm,
  ValidateFireCaseForm
};
