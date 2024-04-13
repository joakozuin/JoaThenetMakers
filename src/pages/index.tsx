import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Searcher } from "../search/ui/Searcher/Searcher";

export default function Home() {
  return (
    <>
      <Head>
        <title>Net-Makers</title>
        <meta
          name="description"
          content="Buscador de profesionales digitales"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="icon"
          href="https://legacy.thenetmakers.com/assets/img/contenido/logo-svg-solo.svg"
        />
      </Head>
      <main className={`${styles.main}`}>
        <Searcher />
      </main>
    </>
  );
}
