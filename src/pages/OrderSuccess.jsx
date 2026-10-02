import { Link } from "react-router-dom";

function OrderSuccess() {
  return (
    <section className="success-page">
      <div className="success-card">
        <div className="success-icon">✓</div>

        <h1>Order Placed Successfully!</h1>

        <p>
          Thank you for shopping with BookNest. Your order has
          been received successfully.
        </p>

        <Link to="/books" className="hero-btn">
          Continue Shopping
        </Link>
      </div>
    </section>
  );
}

export default OrderSuccess;