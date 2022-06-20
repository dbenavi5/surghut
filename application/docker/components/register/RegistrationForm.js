import {useState} from 'react';
import {useAuth} from '../../contexts/auth';
import {TextInput} from '../input/Input';
import Button from '../button/Button';
import styles from './Register.module.css';

const RegistrationForm = () => {
  const [pseudo, setPseudo] = useState('');
  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const {register} = useAuth();

  return (
    <div id={styles.register}>
      <div className={styles.title}>Sign-Up to get alerts!</div>
      <div className="register container" id={styles.contain}>
        <TextInput
          className={styles.input}
          type={'text'}
          value={pseudo}
          placeHolder={'Username'}
          onTextChange={setPseudo}
        />

        <TextInput
          className={styles.input}
          type={'text'}
          value={mail}
          placeHolder={'Email'}
          onTextChange={setMail}
        />
        <TextInput
          className={styles.input}
          type={'password'}
          value={password}
          placeHolder={'Password'}
          onTextChange={setPassword}
        />

        <Button className={styles.button}
          onClick={() => {
            // console.log('login');
            register(pseudo, mail, password);
          }}
          aria-label="Sign Up Button"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
};

export default RegistrationForm;
