import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects | Victor Bianconi</title>
        <meta name="description" content="Projects done." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="page"
      >
        <div className="page__main-container">
          <motion.h1
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-5xl font-bold mb-9"
          >
            Bramosa
          </motion.h1>
       
        </div>
      </motion.main>
    </>
  );
}
