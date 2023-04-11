import dayjs from "dayjs";

export default function MovieCard(props) {
  return (
    <div className={"movie-card " + (props.classNames ? props.classNames : "")}>
      <div className="movie-card__image-container">
        <img
          src={"https://image.tmdb.org/t/p/original/" + props.data.poster_path}
        ></img>
      </div>
      <div className="p-6 flex flex-col">
        <h3 className="font-medium text-2xl">{props.data.title}</h3>
        <span className="text-xl mt-2">Published in {dayjs(props.data.release_date).format("YYYY")}</span>
      </div>
    </div>
  );
}
