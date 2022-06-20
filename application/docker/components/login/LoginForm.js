import {useState} from 'react';
import {useAuth} from '../../contexts/auth';
import {TextInput} from '../input/Input';
import Button from '../button/Button';
import styles from './Login.module.css';

const LoginForm = () => {
  const [pseudo, setPseudo] = useState(''); // set username
  const [password, setPassword] = useState('');

  const {login} = useAuth();

  return (
    <div id={styles.login}>
      <div className={styles.title}>Login</div>
      <div className='container' id={styles.contain}>
        <TextInput
          className={styles.input}
          type={'text'}
          value={pseudo}
          placeHolder={'Username'}
          onTextChange={setPseudo}
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
            login(pseudo, password);
          }}
          aria-label="Login Button"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default LoginForm;
