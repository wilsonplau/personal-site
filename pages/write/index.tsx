import React, { useEffect, useState } from "react";
import Link from "next/link";
import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { format } from "date-fns";

import Layout from "../../components/Layout";
import styles from "../../styles/WritePage.module.scss";
import { ArticleMarkdown } from "../../@types";

interface WritePageProps {
  articleData: string[];
}

const WritePage: React.FC<WritePageProps> = ({ articleData }) => {
  const [articles, setArticles] = useState<ArticleMarkdown[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<ArticleMarkdown[]>([]);
  const [categoryFilter, setCategoryFilter] = useState<string | null>(null);
  const [collectionFilter, setCollectionFilter] = useState<string | null>(null);
  const [yearFilter, setYearFilter] = useState<number | null>(null);

  const [categories, setCategories] = useState<Set<string>>(new Set());
  const [years, setYears] = useState<Set<number>>(new Set());
  const [collections, setCollections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const _articles = [];
    const _categories = new Set<string>();
    const _collections = new Set<string>();
    const _years = new Set<number>();

    for (const md of articleData) {
      // @ts-ignore
      const article = matter(md) as ArticleMarkdown;
      _articles.push(article);
      article.data.collection.forEach((collection) => _collections.add(collection));
      article.data.tags.forEach((tag) => _categories.add(tag));
      _years.add(article.data.date.getFullYear());
    }

    setCategories(_categories);
    setCollections(_collections);
    setYears(_years);
    setArticles(_articles);
  }, [articleData]);

  useEffect(() => {
    const _filteredArticles = articles
      .filter((article) => {
        return (
          (article.data.tags.includes(categoryFilter) || !categoryFilter) &&
          (article.data.collection.includes(collectionFilter) || !collectionFilter) &&
          (article.data.date.getFullYear() === yearFilter || !yearFilter)
        );
      })
      .sort((articleA, articleB) => articleB.data.date.getTime() - articleA.data.date.getTime());
    setFilteredArticles(_filteredArticles);
  }, [articles, categoryFilter, collectionFilter, yearFilter]);

  return (
    <Layout>
      <div className={styles.write}>
        <div className={styles.write__hero}>
          <div className={styles.write__heroContainer}>
            <h1>
              I write about things I’m interested in to learn,
              <br /> reflect, and explore.
            </h1>
          </div>
        </div>
        <div className={styles.write__main}>
          <div className={styles.write__left}>
            <div className={styles.writeMenu__wrapper} data-aos="fade-up">
              <div className={styles.writeMenu}>
                <h2>Categories</h2>
                <button onClick={() => setCategoryFilter(null)} data-active={categoryFilter === null}>
                  All
                </button>
                {Array.from(categories.values()).map((category) => (
                  <button
                    key={category}
                    onClick={() => setCategoryFilter(category)}
                    data-active={categoryFilter === category}
                  >
                    {category}
                  </button>
                ))}
              </div>
              <div className={styles.writeMenu}>
                <h2>Collections</h2>
                <button onClick={() => setCollectionFilter(null)} data-active={collectionFilter === null}>
                  All
                </button>
                {Array.from(collections.values()).map((collection) => (
                  <button
                    key={collection}
                    onClick={() => setCollectionFilter(collection)}
                    data-active={collectionFilter === collection}
                  >
                    {collection}
                  </button>
                ))}
              </div>
              <div className={styles.writeMenu}>
                <h2>Years</h2>
                <button onClick={() => setYearFilter(null)} data-active={yearFilter === null}>
                  All
                </button>
                {Array.from(years.values()).map((year) => (
                  <button key={year} onClick={() => setYearFilter(year)} data-active={yearFilter === year}>
                    {year}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.write__right}>
            {filteredArticles.map((article) => (
              <Link key={article.data.path} href={article.data.path}>
                <div className={styles.writeSingle} data-aos="fade-up">
                  <h2>{article.data.title}</h2>
                  <h3>
                    {format(article.data.date, "yyyy-MM-dd")} • {article.data.tags.join(" • ")}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WritePage;

export async function getStaticProps() {
  const articleData: string[] = [];
  const BUILD_PATH = join(process.cwd(), "data", "write");
  const files = fs.readdirSync(BUILD_PATH);
  for (const file of files) {
    const markdown = await require(`../../data/write/${file}`);
    articleData.push(markdown.default);
  }
  return { props: { articleData } };
}
