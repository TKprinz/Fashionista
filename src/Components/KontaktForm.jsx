import React, { useState } from "react";

function KontaktForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // skicka formulärdata till servern eller en API endpoint
    console.log(name, email, message);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Kontakta oss för support</h2>
        <p>
          Har du några frågor eller behöver du hjälp med våra tjänster? Tveka
          inte att kontakta oss! Fyll i formuläret nedan eller skicka oss ett
          e-postmeddelande på{" "}
          <a href="mailto:support@example.com">support@example.com</a>. Vi
          återkommer till dig så snart som möjligt.
        </p>

        <label>
          Namn:
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>

        <label>
          E-post:
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>

        <label>
          Meddelande:
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
        </label>

        <button type="submit">Skicka</button>
      </form>
    </>
  );
}

export default KontaktForm;
