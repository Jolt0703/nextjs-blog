import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import utilStyles from "../styles/utils.module.css";
import Layout, { siteTitle } from "../components/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faYoutube,
  faFacebook,
  faDiscord,
  faInstagram,
  faTiktok,
  faTwitch,
  faSlack,
} from "@fortawesome/free-brands-svg-icons";
import { faPhone, faSms } from "@fortawesome/free-solid-svg-icons";
import { getSortedPostsData } from "../lib/posts";
import { GetStaticProps } from "next";

const Home = ({
  allPostsData,
}: {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I am a mediocre web developer just doing a bunch of tutorials
          &#x1f680;
        </p>
        <p>
          You cannot contact me on{" "}
          <a href="https://en.wikipedia.org/wiki/Twitter" target="_blank">
            <FontAwesomeIcon icon={faTwitter} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Facebook" target="_blank">
            <FontAwesomeIcon icon={faFacebook} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Instagram" target="_blank">
            <FontAwesomeIcon icon={faInstagram} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Tiktok" target="_blank">
            <FontAwesomeIcon icon={faTiktok} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/YouTube" target="_blank">
            <FontAwesomeIcon icon={faYoutube} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Telephone" target="_blank">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/SMS" target="_blank">
            <FontAwesomeIcon icon={faSms} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Slack" target="_blank">
            <FontAwesomeIcon icon={faSlack} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Discord" target="_blank">
            <FontAwesomeIcon icon={faDiscord} style={{ color: "#666" }} />
          </a>{" "}
          <a href="https://en.wikipedia.org/wiki/Twitch" target="_blank">
            <FontAwesomeIcon icon={faTwitch} style={{ color: "#666" }} />
          </a>{" "}
        </p>
      </section>

      {/* BlogPostsData */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
};

// fetching data at build time
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

// // To use Server-side Rendering, you need to export getServerSideProps instead of getStaticProps from your page.
// // Here’s the starter code for getServerSideProps.
// // It’s not necessary for our blog example, so we won’t be implementing it.
// export async function getServerSideProps(context) {
//   return {
//     props: {
//       // props for your component
//     }
//   }
// }

// // FOr client-side rendering, use useSWR hook
// import useSWR from 'swr'
// const fetcher = () => fetch('/api/user')
// function Profile() {
//   const { data, error } = useSWR('/api/user', fetcher)
//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export default Home;
