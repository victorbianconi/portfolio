import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Navigation from "@/components/navigation";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <>
      <Head>
        <title>Contact | Victor Bianconi</title>
        <meta
          name="description"
          content="Contact me and get a free quote for web development services."
        />
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
            Contact me and get a free quote
          </motion.h1>
          <motion.p
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-3xl leading-10 mb-6"
          >
            Need a website for your business? Not sure what requirements you
            need? Feel free to contact me through the form below.
          </motion.p>
          <div className="flex justify-center w-full">
            <motion.form
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              method="POST"
              action="https://api.web3forms.com/submit"
              transition={{ duration: 0.3 }}
              className="contact-form w-full mt-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="3632c0a7-b98a-43d4-95e6-9ebda6f535cc"
              ></input>
              <svg
                width="45"
                height="45"
                className="fill-gold-500 mb-6"
                viewBox="0 0 512 512"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M436.976 64H75.024C59.3751 64.0169 44.3719 70.241 33.3064 81.3064C22.241 92.3719 16.0169 107.375 16 123.024V388.976C16.0169 404.625 22.241 419.628 33.3064 430.694C44.3719 441.759 59.3751 447.983 75.024 448H436.976C452.625 447.983 467.628 441.759 478.694 430.694C489.759 419.628 495.983 404.625 496 388.976V123.024C495.983 107.375 489.759 92.3719 478.694 81.3064C467.628 70.241 452.625 64.0169 436.976 64ZM75.024 96H436.976C444.141 96.0085 451.009 98.8584 456.076 103.924C461.142 108.991 463.992 115.859 464 123.024V135.264L256 268.976L48 135.264V123.024C48.0085 115.859 50.8584 108.991 55.9245 103.924C60.9906 98.8584 67.8594 96.0085 75.024 96ZM436.976 416H75.024C67.8594 415.992 60.9906 413.142 55.9245 408.076C50.8584 403.009 48.0085 396.141 48 388.976V173.312L247.344 301.456C249.926 303.117 252.93 304 256 304C259.07 304 262.074 303.117 264.656 301.456L464 173.312V388.976C463.992 396.141 461.142 403.009 456.076 408.076C451.009 413.142 444.141 415.992 436.976 416Z"
                  fill="black"
                />
              </svg>

              <input
                className="text-input font-medium w-full text-2xl"
                type="email"
                placeholder="Email"
                name="email"
              ></input>
              <input
                className="text-input font-medium w-full text-2xl"
                type="name"
                placeholder="Name"
                name="name"
              ></input>
              <textarea 
                name="message"
                className="text-input font-medium w-full text-2xl"
                placeholder="Message"
              ></textarea>
              <p className="select-none text-2xl mb-5 text-gold-900 font-medium">
                You will <span className="font-bold">not</span> receive any spam
                email.
              </p>
              <button className="contact-form__submit-btn text-2xl font-medium">
                Send message
              </button>
            </motion.form>
          </div>
        </div>
      </motion.main>
    </>
  );
}
