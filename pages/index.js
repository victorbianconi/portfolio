import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Victor Bianconi | Web Developer and Entrepreneur</title>
        <meta name="description" content="Victor Bianconi is a web developer and designer based in Italy." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {" "}
        <div className="landing__intro">
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-7xl mb-10"
          >
            Hello, I'm <span className="font-bold">Victor Bianconi</span>
          </motion.h1>
          <motion.h2
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl"
          >
            I'm a <span className="font-bold">freelance web developer</span> and{" "}
            <span className="font-bold ">entrepreneur</span>
          </motion.h2>
          <Link href="/services">
            <motion.button
            initial={{opacity:0}}
            animate={{opacity: 1}}
              transition={{ duration: 0.3, ease: "easeIn" }}
              exit={{ opacity: 0 }}
              className="landing__btn font-medium mt-12"
            >
              How can you help me?
            </motion.button>
          </Link>
        </div>
        <Footer></Footer>
      </main>{" "}
    </>
  );
}
