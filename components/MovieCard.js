import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function MovieCard(props) {
  const [isLoadingImage, setIsLoadingImage] = useState();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      key={props.data.title}
      ref={props.lastRef || null}
      className={"movie-card " + (props.classNames ? props.classNames : "")}
    >
      <div className="movie-card__image-container">
        <Image
          src={`https://image.tmdb.org/t/p/w300${props.data.poster_path}`}
          height={300}
          width={300}
          onLoad={() => setIsLoadingImage(false)}
        ></Image>
        {isLoadingImage && <span className="text-xl">Loading...</span>}
      </div>
      <div className="p-6 flex flex-col pointer-events-none">
        <h3 className="font-medium text-3xl">
          {props.data.title}{" "}
          <span className="text-xl mt-2 text-grey-500 font-medium">
            {dayjs(props.data.release_date).format("YYYY")}
          </span>
        </h3>
        <span className="text-xl mt-2 text-grey-500 font-medium">
          {props.data.overview.substr(0, 100) + "..."}
        </span>
      </div>
    </motion.div>
  );
}
