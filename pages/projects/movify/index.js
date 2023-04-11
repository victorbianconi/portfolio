import MovieCard from "@/components/MovieCard";
import Searchbar from "@/components/Searchbar";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Head from "next/head";
import { useState } from "react";
import { useDebounce } from "use-debounce";

export default function MovifyIndex() {
  const API_KEY = "71b5580c5e4b831e105748b4ca457955";
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearchTerm] = useDebounce(searchTerm, 1500);
  const [selectedMovie, setSelectedMovie] = useState();

  const searchMovies = useQuery(
    ["search", debouncedSearchTerm],
    async () =>
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${debouncedSearchTerm}`
      ).then((res) => res.json()),
    {
      enabled: Boolean(debouncedSearchTerm),
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      cacheTime: 5000000,
      staleTime: 5000000,
    }
  );

  return (
    <>
      <Head>
        <title>Movify | Victor Bianconi</title>
        <meta
          name="description"
          content="Movify is a random app that suggests movies related to a certain movie."
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
        className="flex flex-col min-h-screen items-center p-12"
      >
        <div className="page__main-container ">
          <div className="mb-10 flex w-full flex-col justify-center items-center">
            <motion.div
              className="w-full justify-center flex mb-7"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="162"
                height="47"
                viewBox="0 0 162 47"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M39.136 36V20.016C39.136 16.016 37.12 14.016 33.088 14.016C30.72 14.016 28.8 14.56 27.328 15.648C25.664 16.832 24.832 18.544 24.832 20.784V36H20.032V20.016C20.032 16.016 18.016 14.016 13.984 14.016C11.68 14.016 9.76 14.64 8.224 15.888C6.56 17.264 5.728 19.136 5.728 21.504V36H0.928V10.848H5.728V14.64H5.824C7.808 11.536 11.088 9.984 15.664 9.984C19.472 9.984 22.32 11.536 24.208 14.64C26.704 11.536 30.096 9.984 34.384 9.984C36.496 9.984 38.4 10.496 40.096 11.52C42.656 13.088 43.936 15.536 43.936 18.864V36H39.136ZM48.6678 23.424C48.6678 19.584 49.8838 16.432 52.3158 13.968C54.9398 11.312 58.5878 9.984 63.2598 9.984C67.9318 9.984 71.5958 11.312 74.2518 13.968C76.6518 16.432 77.8518 19.584 77.8518 23.424C77.8518 27.264 76.6518 30.416 74.2518 32.88C71.5958 35.536 67.9318 36.864 63.2598 36.864C58.5878 36.864 54.9398 35.536 52.3158 32.88C49.8838 30.416 48.6678 27.264 48.6678 23.424ZM72.7638 23.424C72.7638 20.832 72.0438 18.688 70.6038 16.992C68.9398 15.008 66.4918 14.016 63.2598 14.016C60.0278 14.016 57.5798 15.008 55.9158 16.992C54.4758 18.688 53.7558 20.832 53.7558 23.424C53.7558 26.016 54.4758 28.16 55.9158 29.856C57.5798 31.84 60.0278 32.832 63.2598 32.832C66.4918 32.832 68.9398 31.84 70.6038 29.856C72.0438 28.16 72.7638 26.016 72.7638 23.424ZM93.5763 30.72L102.072 10.848H107.448L96.1203 36H90.8403L79.4162 10.848H84.9363L93.5763 30.72ZM110.147 36V10.848H114.947V36H110.147ZM110.147 6.72V1.44H114.947V6.72H110.147ZM122.275 10.848V7.104C122.275 2.944 124.851 0.863997 130.003 0.863997C130.323 0.863997 131.715 0.991998 134.179 1.248V4.992C132.963 4.928 132.067 4.896 131.491 4.896C130.083 4.896 129.107 4.976 128.563 5.136C127.571 5.488 127.075 6.224 127.075 7.344V10.848H134.179V14.592H127.075V36H122.275V14.592H117.139V10.848H122.275ZM147.764 30.72L156.26 10.848H161.636L148.484 40.32C147.332 42.912 146.132 44.624 144.884 45.456C143.796 46.192 142.084 46.56 139.748 46.56C138.98 46.56 137.764 46.496 136.1 46.368V42.336C136.228 42.336 136.66 42.368 137.396 42.432C137.94 42.496 138.436 42.528 138.884 42.528C140.356 42.528 141.396 42.288 142.004 41.808C142.644 41.36 143.348 40.32 144.116 38.688L145.22 36.384L133.604 10.848H139.124L147.764 30.72Z"
                  fill="white"
                />
              </svg>
            </motion.div>{" "}
            <h2 className="text-4xl font-medium w-full text-center select-none">
              Get movie suggestions based on a certain movie
            </h2>
            <Searchbar
              classNames="mt-11"
              limit={10}
              value={searchTerm}
              query={searchMovies}
              onChange={(e) => {
                setSearchTerm(e.target.value);
              }}
              onSelect={(data) => setSelectedMovie(data)}
            ></Searchbar>
            {selectedMovie && (
              <p className="text-2xl mt-8 pointer-events-none">
                Movies similar to
              </p>
            )}
            {selectedMovie && (
              <MovieCard classNames="mt-7" data={selectedMovie}></MovieCard>
            )}
            {selectedMovie && (
              <p className="text-2xl mt-8 pointer-events-none">
                Work in progress...
              </p>
            )}
          </div>
        </div>
      </motion.main>
    </>
  );
}
