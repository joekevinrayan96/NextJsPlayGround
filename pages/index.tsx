import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import linkedInLogo from "../assets/LinkedInLogo.png";
import gitHubLogo from "../assets/GitHubLogo.png";
import stackOverFlowLogo from "../assets/StackOverFlowLogo.png";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://www.linkedin.com/in/joe-rayan-547226161/">
            Joe Kevin Rayan&apos;s
          </a>{" "}
          NextJS Playground
        </h1>

        <p className={styles.description}>
          Start Playing around by editing{" "}
          <code className={styles.code}>pages/index.tsx</code>
        </p>

        <div className={styles.grid}>
          <a
            href="https://github.com/joekevinrayan96/NextJsPlayGround.git"
            className={styles.card}
            style={{ width: "100%" }}
          >
            <h2>Find the repo here &rarr;</h2>
            <p>https://github.com/joekevinrayan96/NextJsPlayGround.git</p>
          </a>

          <p style={{ color: "blue" }}>
            Checkout different branches to see what I&apos;ve done
          </p>
        </div>
      </main>

      <footer style={{ borderTop: "1px solid #eaeaea" }}>
        <div className={styles.footer}>
          <a href="https://github.com/joekevinrayan96">
            <span className={styles.logo}>
              <Image
                src={gitHubLogo}
                alt="GitHubLogo"
                width={120}
                height={40}
              />
            </span>
          </a>

          <a href="https://www.linkedin.com/in/joe-rayan-547226161/">
            <span className={styles.logo}>
              <Image
                src={linkedInLogo}
                alt="LinkedInLogo"
                width={130} //100
                height={35} //25
              />
            </span>
          </a>

          <a href="https://stackoverflow.com/users/6865638/joekevinrayan96">
            <span className={styles.logo}>
              <Image
                src={stackOverFlowLogo}
                alt="GitHubLogo"
                width={160}
                height={40}
              />
            </span>
          </a>
        </div>
        <div className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
