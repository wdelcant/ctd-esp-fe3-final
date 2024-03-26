import { useState } from 'react';

const Form = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [messageOK, setMessageOK] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (nombre.length <= 5 || !email.includes('@') || !email.includes('.')) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    setMessageOK(
      `Gracias ${nombre}, te contactaremos lo antes posible vía email`
    );

    setNombre('');
    setEmail('');
    setError('');
  };

  return (
    <div className="formContainer">
      {error && <div className="errorMessage">{error}</div>}
      {messageOK && <div className="successMessage">{messageOK}</div>}
      <form onSubmit={handleSubmit}>
        <div className="formField">
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={event => setNombre(event.target.value)}
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
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Form;
