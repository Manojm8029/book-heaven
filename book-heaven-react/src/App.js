import React, { useState } from "react";

const PRODUCTS = [
  { id: 1, title: "Book 1", price: 200 },
  { id: 2, title: "Book 2", price: 300 },
];

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Book Heaven (React)</h1>

      {PRODUCTS.map((p) => (
        <div key={p.id}>
          <h3>{p.title}</h3>
          <p>₹{p.price}</p>
          <button onClick={() => addToCart(p)}>Add</button>
        </div>
      ))}

      <h2>Cart</h2>
      {cart.map((c, i) => (
        <p key={i}>{c.title}</p>
      ))}
    </div>
  );
}

export default App;