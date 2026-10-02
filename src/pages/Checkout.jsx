import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: ""
  });

  const [error, setError] = useState("");

  if (cart.length === 0) {
    return (
      <section className="empty-state">
        <h1>Your Cart is Empty</h1>
        <Link to="/books" className="hero-btn">
          Browse Books
        </Link>
      </section>
    );
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.address
    ) {
      setError("Please fill in all the fields.");
      return;
    }

    clearCart();
    navigate("/success");
  };

  return (
    <section className="checkout-page">
      <div className="checkout-form">
        <p className="section-label">SECURE CHECKOUT</p>
        <h1>Complete Your Order</h1>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>Full Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />

          <label>Phone</label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />

          <label>Address</label>
          <textarea
            name="address"
            value={form.address}
            onChange={handleChange}
            placeholder="Enter delivery address"
            rows="4"
          />

          <button className="checkout-btn" type="submit">
            Place Order — ₹{totalPrice}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Checkout;