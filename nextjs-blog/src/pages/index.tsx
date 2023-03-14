import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "@/components/layout";
import utilStyles from "../styles/utils.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ allPostsData }: any) {
  console.log(allPostsData);
  return (
    <>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <section className={utilStyles.headingMd}>
          <p>My name is kdh3543 I`m a software engineer</p>
          <p>
            (This is a sample website - you`ll be building a site like this one)
            <a href="https://github.com/kdh3543/nextjs_base_project">my site</a>
            <div>
              Read <Link href={"/posts/first-post"}>this page!</Link>
            </div>
          </p>
        </section>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  return {};
}
