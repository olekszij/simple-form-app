const Results = ({ username, email, password1, password2, setShowResults }) => {
  const handleEditClick = () => {
    setShowResults(false);
  };
  return (
    <>
      <div className='app'>
        <h1>Results</h1>
        <div className='result-box'>
          <p>Name: {username}</p>
          <p>Email: {email}</p>
          <p>Password: {password1}</p>
        </div>
        <div className='btn' onClick={handleEditClick}>
          Edit your information
        </div>
      </div>
    </>
  );
};
export default Results;
