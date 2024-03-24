import { useState } from 'react';

const Form = () => {
  
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [mensajeOk, setMensajeOk] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();


    if (nombre.length <= 5 || !email.includes('@') || !email.includes('.')) {
      setError('Por favor verifique su información nuevamente');
      return;
    }

    setMensajeOk(`Gracias ${nombre}, te contactaremos lo antes posible vía email`);

    console.log('Datos del formulario:', { nombre, email });


    setNombre('');
    setEmail('');
    setError('');
  };

  return (
    <div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {mensajeOk && <p style={{ color: 'green' }}>{mensajeOk}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre completo:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(event) => setNombre(event.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Form;

