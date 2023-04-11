import dayjs from "dayjs";

export default function MovieCard(props) {
  return (
    <div className={"movie-card " + (props.classNames ? props.classNames : "")}>
      <div className="movie-card__image-container">
        <img
          src={"https://image.tmdb.org/t/p/original/" + props.data.poster_path}
        ></img>
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
    </div>
  );
}
