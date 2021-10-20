import Head from "next/head";
import Image from "next/image";
import DashBoard from "../components/Layout/Dashboard/dashboard";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dubai Desk | Admin</title>
        <link rel="icon" href="/Dubai Desk1.png" />
      </Head>
    </div>
  );
}
