import { useState } from 'react';
import Results from './components/Results';
import Form from './components/Form';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');

  const [showError, setShowError] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const sendingFormData = (event) => {
    event.preventDefault();
    if (password1 === password2) {
      console.log('sended');
      setShowResults(true);
    } else {
      setShowError(true);
      console.log('Les mots de passe ne sont pas identiques');
      setShowResults(false);
    }
  };

  const clickme = () => {
    alert('ты кликнул на меня!');
    setUsername('Valentin');
    alert('Человек теперь Валентин');
  };

  return (
    <>
      <main>
        {!showResults ? (
          <Form
            username={username}
            email={email}
            password1={password1}
            password2={password2}
            sendingFormData={sendingFormData}
            setUsername={setUsername}
            setEmail={setEmail}
            setPassword1={setPassword1}
            setPassword2={setPassword2}
            showError={showError}
          />
        ) : (
          <Results
            username={username}
            email={email}
            password1={password1}
            setShowResults={setShowResults}
          />
        )}
        <button type='button' className='btn' onClick={clickme}>
          click me bro
        </button>
      </main>
    </>
  );
}

export default App;
