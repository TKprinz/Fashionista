import React, { useState } from 'react';

function KontaktForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // skicka formulärdata till servern eller en API endpoint
    console.log(name, email, message);
  };

  return (
    <div className="flex justify-center mx-auto">
      <form onSubmit={handleSubmit}>
        <h2>Contact us for support.</h2>
        <p>
          Do you have any questions or need help with our services? Do not
          hesitate to contact us! Fill in the form below or send us an email at{' '}
          <a href="mailto:support@fashionista.com">support@fashionista.com</a>.
          We will get back to you as soon as possible.
        </p>

        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          E-mail:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Message:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default KontaktForm;
