import React from 'react';

function CreateProd() {
  return (
    <div>
      <form action="">
        <h2>Skapa Produkt</h2>
        <label htmlFor="namn">Namn på produkt</label>
        <input id="namn" type="text" />
        <br />
        <label htmlFor="tag">Tag / kategori</label>
        <input id="tag" type="text" />
        <br />
        <label htmlFor="description">Beskrivning</label>
        <input id="description" type="text" />
        <br />
        <label htmlFor="image">Bild https kod</label>
        <input id="image" type="text" />
        <br />
        <label htmlFor="price">Pris</label>
        <input id="price" type="text" />
      </form>
    </div>
  );
}
