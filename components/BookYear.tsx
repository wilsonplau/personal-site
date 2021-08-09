import React from "react";
import { BookMarkdown } from "../@types";
import styles from "../styles/BookYear.module.scss";

interface BookYearProps {
  year: number;
  books: BookMarkdown[];
}

const BookYear: React.FC<BookYearProps> = ({ year, books }) => {
  if (year === 2020)
    return (
      <div className={styles.bookYear} data-aos="fade-up">
        <h2>{year}</h2>
        <div className={styles.bookYear__main}>
          <p>The year that broke my reading habit.</p>
        </div>
      </div>
    );

  return (
    <div className={styles.bookYear} data-aos="fade-up">
      <h2>{year}</h2>
      <div className={styles.bookYear__main}>
        {books.map((book) => (
          <img src={book.data.image} alt={`${book.data.title} by ${book.data.author}`} />
        ))}
      </div>
    </div>
  );
};

export default BookYear;
