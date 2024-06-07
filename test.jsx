// App.js
import { useState } from 'react';
import Results from './components/Results';
import './App.css';

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [showError, setShowError] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const sendingFormData = (event) => {
    event.preventDefault();
    if (password1 === password2) {
      setShowError(false);
      setShowResults(true);
    } else {
      setShowError(true);
      setShowResults(false);
      console.log("Les mots de passe ne sont pas identiques");
    }
  };

  return (
    <>
      <div className="header">
        <h1>Create account</h1>
      </div>
      <main>
        {!showResults ? (
          <form onSubmit={sendingFormData} className='app'>
            <label>Name</label>
            <input value={username} onChange={e => setUsername(e.target.value)} />
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} />
            <label>Password</label>
            <input type="password" value={password1} onChange={e => setPassword1(e.target.value)} />
            <label>Confirm your password</label>
            <input type="password" value={password2} onChange={e => setPassword2(e.target.value)} />
            {showError && (
              <p style={{ color: "red" }}>
                Les mots de passe ne sont pas identiques
              </p>
            )}
            <input type="submit" className='btn' value="Register" />
          </form>
        ) : (
          <Results username={username} email={email} />
        )}
      </main>
    </>
  );
}

export default App;

// components/Results.js
import React from 'react';

function Results({ username, email }) {
  return (
    <div className="results">
      <h2>Account Details</h2>
      <p><strong>Name:</strong> {username}</p>
      <p><strong>Email:</strong> {email}</p>
    </div>
  );
}

export default Results;
