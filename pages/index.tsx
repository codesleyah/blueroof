import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import RoundButton from "../components/buttons/Button";
import Footer from "../components/footer/Footer";
import Banner from "../components/banner/Banner";
import Header from "../components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | The Blue Roof</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main className={styles.main}>
        <div className={styles.grid}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item, i) => (
            <div className={styles.center} key={i}>
              <div className={styles.thirteen}>
                <Image
                  src="/images/shot.jpg"
                  alt="Picture of the author"
                  width={250}
                  height={350}
                  className="shadow-lg rounded-2xl"
                />
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
