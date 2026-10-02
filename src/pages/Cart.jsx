import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    totalPrice
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="empty-state">
        <div className="empty-icon">🛒</div>
        <h1>Your Cart is Empty</h1>
        <p>Add some books to your cart to continue.</p>
        <Link to="/books" className="hero-btn">
          Browse Books
        </Link>
      </section>
    );
  }

  return (
    <section className="section">
      <div className="page-heading">
        <p className="section-label">YOUR ITEMS</p>
        <h1>Shopping Cart</h1>
      </div>

      <div className="cart-layout">
        <div className="cart-items">
          {cart.map((item) => (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />

              <div className="cart-item-info">
                <h3>{item.title}</h3>
                <p>{item.author}</p>
                <strong>₹{item.price}</strong>
              </div>

              <div className="quantity">
                <button onClick={() => decreaseQuantity(item.id)}>
                  −
                </button>

                <span>{item.quantity}</span>

                <button onClick={() => increaseQuantity(item.id)}>
                  +
                </button>
              </div>

              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="summary">
          <h2>Order Summary</h2>

          <div>
            <span>Subtotal</span>
            <strong>₹{totalPrice}</strong>
          </div>

          <div>
            <span>Delivery</span>
            <strong>Free</strong>
          </div>

          <hr />

          <div className="total">
            <span>Total</span>
            <strong>₹{totalPrice}</strong>
          </div>

          <Link to="/checkout" className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Cart;