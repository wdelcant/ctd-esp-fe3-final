import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [messageOK, setMessageOK] = useState('');
  const [countdown, setCountdown] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const navigate = useNavigate();

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
    setIsSubmitted(true);
  };

  useEffect(() => {
    let timer = null;
    if (isSubmitted && countdown > 0) {
      timer = setTimeout(() => {
        setCountdown(prevCountdown => prevCountdown - 1);
      }, 1000);
    } else if (isSubmitted && countdown === 0) {
      navigate('/');
    }
    return () => clearTimeout(timer);
  }, [isSubmitted, countdown, navigate]);

  return (
    <div className="formContainer">
      {error && <div className="errorMessage">{error}</div>}
      {isSubmitted ? (
        <>
          <div className="successMessage">{messageOK}</div>

          <div className="">Redirecting to home in {countdown}...</div>
        </>
      ) : (
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
      )}
    </div>
  );
};

export default Form;
