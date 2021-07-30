import fs from "fs";
import { GetStaticPathsResult, GetStaticPropsContext } from "next";
import Link from "next/link";
import { join } from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import showdown from "showdown";

import Layout from "../../components/Layout";
import styles from "../../styles/ArticlePage.module.scss";

interface ArticlePageProps {
  markdown: string;
}

const ArticlePage: React.FC<ArticlePageProps> = ({ markdown }) => {
  const content = matter(markdown);
  const dateOptions: Intl.DateTimeFormatOptions = { year: "numeric", month: "long", day: "numeric" };
  const timeToRead = readingTime(content.content);
  const mdConverter = new showdown.Converter();
  const html = mdConverter.makeHtml(content.content);

  return (
    <Layout>
      <div className={styles.article}>
        <div className={styles.article__hero}>
          <div className={styles.article__heroContainer}>
            <h1>
              I write about things I’m interested in to learn,
              <br /> reflect, and explore.
            </h1>
          </div>
        </div>
        <article className={styles.article__main} data-aos="fade-up">
          <div className={styles.article__left}>
            <Link href="/write">{"< Back"}</Link>
          </div>
          <div className={styles.article__right}>
            <h1 className={styles.article__heading}>{content.data.title}</h1>
            <h3 className={styles.article__subheading}>
              {content.data.date.toLocaleDateString("en-US", dateOptions)} • {content.data.tags.join(" • ")} •{" "}
              {Math.round(timeToRead.minutes)} minute read
            </h3>
            <div className={styles.article__content} dangerouslySetInnerHTML={{ __html: html }} />
          </div>
        </article>
      </div>
    </Layout>
  );
};

export default ArticlePage;

export async function getStaticPaths(): Promise<GetStaticPathsResult> {
  const paths: GetStaticPathsResult["paths"] = [];
  const BUILD_PATH = join(process.cwd(), "data", "write");
  const files = fs.readdirSync(BUILD_PATH);
  for (const file of files) {
    const params = { params: { slug: file.slice(0, -3) } };
    paths.push(params);
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const slug = params.slug;
  const markdown = await require(`../../data/write/${slug}.md`).default;
  return { props: { markdown } };
}
