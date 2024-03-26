import { useState } from 'react';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [messageOK, setMessageOK] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (name.length <= 5 || !email.includes('@') || !email.includes('.')) {
      setError('Please complete the form correctly');
      return;
    }

    setMessageOK(
      `Thanks ${name.toUpperCase()}! We will send you the best offers to ${email}`
    );

    setName('');
    setEmail('');
    setError('');
  };

  return (
    <div className="formContainer">
      {error && <div className="errorMessage">{error}</div>}
      {messageOK && <div className="successMessage">{messageOK}</div>}
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={event => setName(event.target.value)}
            required
          />
        </div>
        <div className="formField">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit" className="submitButton">
          Send
        </button>
      </form>
    </div>
  );
};

export default Form;
