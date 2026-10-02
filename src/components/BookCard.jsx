import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function BookCard({ book }) {
  const { addToCart } = useCart();

  return (
    <div className="book-card">
      <img src={book.image} alt={book.title} />

      <div className="book-info">
        <span className="category">{book.category}</span>

        <h3>{book.title}</h3>

        <p className="author">by {book.author}</p>

        <p className="rating">⭐ {book.rating}</p>

        <h3 className="price">₹{book.price}</h3>

        <div className="book-actions">
          <Link to={`/books/${book.id}`} className="details-btn">
            Details
          </Link>

          <button
            className="add-btn"
            onClick={() => addToCart(book)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default BookCard;