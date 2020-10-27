import React from 'react';

class GoogleSignIn extends React.Component {
  insertGapiScript() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.onload = () => {
      this.initializeGoogleSignIn();
    };
    document.body.appendChild(script);
  }

  initializeGoogleSignIn() {
    window.gapi.load('auth2', () => {
      window.gapi.auth2.init({
        client_id: '587820386444-v30cc4e6sreiqorjgdug0rvobe6t3e6j.apps.googleusercontent.com',
      });
      console.log('API inited');

      window.gapi.load('signin2', () => {
        const params = {
          onSucces: () => {
            console.log('User has finished signin in');
          },
        };
        window.gapi.signin2.render('loginButton', params);
      });
    });
  }
  componentDidMount() {
    console.log('Loading...');

    this.insertGapiScript();
  }

  render() {
    return (
      <div className="GoogleSignIn">
        <center><div id="loginButton"></div></center>

      </div>
    );
  }
}

export default GoogleSignIn;
