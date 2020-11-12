import React, {useState} from 'react';
import {TextInput} from './Input';
import Button from './Button';

import {useAuth} from '../contexts/auth';

function LoginForm() {
  const [pseudo, setPseudo] = useState('');     //set username
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

export {LoginForm, RegisterForm};
