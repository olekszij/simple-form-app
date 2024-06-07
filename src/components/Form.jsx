const Form = ({
  username,
  setUsername,
  email,
  setEmail,
  password1,
  setPassword1,
  password2,
  setPassword2,
  sendingFormData,
  showError,
}) => {
  return (
    <>
      <form onSubmit={sendingFormData} className='app'>
        <h1>Create account</h1>
        <label>Name</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input
          value={password1}
          onChange={(e) => setPassword1(e.target.value)}
        />
        <label>Confirm your password</label>

        <input
          value={password2}
          onChange={(e) => setPassword2(e.target.value)}
        />
        {showError && (
          <p style={{ color: 'red' }}>
            Les mots de passe ne sont pas identiques
          </p>
        )}
        <input type='submit' className='btn' value='Register' />
      </form>
    </>
  );
};

export default Form;
