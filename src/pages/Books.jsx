import { useState } from "react";
import books from "../data/books";
import BookCard from "../components/BookCard";

function Books() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    ...new Set(books.map((book) => book.category))
  ];

  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || book.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="section">
      <div className="page-heading">
        <p className="section-label">EXPLORE</p>
        <h1>All Books</h1>
        <p>Find your next favorite book from our collection.</p>
      </div>

      <div className="filters">
        <input
          type="text"
          placeholder="🔍 Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>

      <p className="result-count">
        {filteredBooks.length} books found
      </p>

      {filteredBooks.length > 0 ? (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <h2>📚 No books found</h2>
          <p>Try another search or category.</p>
        </div>
      )}
    </section>
  );
}

export default Books;