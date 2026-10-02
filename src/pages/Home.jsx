import { Link } from "react-router-dom";
import books from "../data/books";
import BookCard from "../components/BookCard";

function Home() {
  return (
    <>
      <section className="hero">
        <div>
          <p className="hero-small">WELCOME TO BOOKNEST</p>

          <h1>
            Discover Your Next
            <span> Great Read</span>
          </h1>

          <p>
            Explore our collection of inspiring, educational and
            entertaining books.
          </p>

          <Link to="/books" className="hero-btn">
            Explore Books →
          </Link>
        </div>

        <div className="hero-icon">📚</div>
      </section>

      <section className="section">
        <div className="section-header">
          <div>
            <p className="section-label">OUR COLLECTION</p>
            <h2>Featured Books</h2>
          </div>

          <Link to="/books" className="view-link">
            View All →
          </Link>
        </div>

        <div className="book-grid">
          {books.slice(0, 6).map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;