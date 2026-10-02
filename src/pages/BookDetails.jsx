import { Link, useParams } from "react-router-dom";
import books from "../data/books";
import { useCart } from "../context/CartContext";

function BookDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const book = books.find((item) => item.id === Number(id));

  if (!book) {
    return (
      <section className="empty-state">
        <h1>Book Not Found</h1>
        <Link to="/books" className="hero-btn">
          Back to Books
        </Link>
      </section>
    );
  }

  return (
    <section className="details-page">
      <img src={book.image} alt={book.title} />

      <div className="details-content">
        <span className="category">{book.category}</span>

        <h1>{book.title}</h1>

        <h3>by {book.author}</h3>

        <p className="rating">⭐ {book.rating} / 5</p>

        <h2>₹{book.price}</h2>

        <p className="description">{book.description}</p>

        <button
          className="add-btn large-btn"
          onClick={() => addToCart(book)}
        >
          🛒 Add to Cart
        </button>

        <Link to="/books" className="back-link">
          ← Back to Books
        </Link>
      </div>
    </section>
  );
}

export default BookDetails;