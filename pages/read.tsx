import React, { useEffect, useState } from "react";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";

import Layout from "../components/Layout";
import styles from "../styles/ReadPage.module.scss";
import { BookMarkdown } from "../@types";
import BookYear from "../components/BookYear";

interface ReadPageProps {
  readData: string[];
}

const ReadPage: React.FC<ReadPageProps> = ({ readData }) => {
  const [books, setBooks] = useState<Map<number, BookMarkdown[]>>(new Map());

  useEffect(() => {
    const _books = new Map();
    for (const md of readData) {
      // @ts-ignore
      const book = matter(md) as BookMarkdown;
      if (_books.has(book.data.year)) _books.get(book.data.year).push(book);
      else _books.set(book.data.year, [book]);
    }
    setBooks(_books);
  }, [readData]);

  return (
    <Layout>
      <div className={styles.read}>
        <div className={styles.read__hero}>
          <div className={styles.read__heroContainer}>
            <h1>
              I read what defines <br />
              my curiosities <br />
              at the moment.
            </h1>
          </div>
        </div>
        <div className={styles.read__main}>
          <h1>A Year in 5 Books</h1>
          <h2>
            Five books from each year that define that year, that were the most influential, that I learned the most
            from
          </h2>
          {[...Array.from({ length: 12 })].map((_, i) => {
            const year = 2021 - i;
            return <BookYear key={year} year={year} books={books.get(year) || []} />;
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ReadPage;

export async function getStaticProps() {
  const readData: string[] = [];
  const BUILD_PATH = join(process.cwd(), "data", "read");
  const files = fs.readdirSync(BUILD_PATH);
  for (const file of files) {
    const markdown = await require(`../data/read/${file}`);
    readData.push(markdown.default);
  }
  return { props: { readData } };
}
