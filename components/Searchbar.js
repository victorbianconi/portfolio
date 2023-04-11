import dayjs from "dayjs";
import { useState } from "react";
import { useDetectClickOutside } from "react-detect-click-outside";

export default function Searchbar(props) {
  const [showResults, setShowResults] = useState(true);
  const ref = useDetectClickOutside({
    onTriggered: () => setShowResults(false),
  });

  return (
    <div
      ref={ref}
      className={"searchbar " + (props.classNames ? props.classNames : "")}
    >
      <input
        onClick={() => setShowResults(true)}
        onChange={props.onChange}
        className="searchbar__input"
        placeholder="What's the original movie?"
        type="text"
      ></input>
      {props.query && props.query.data && showResults && (
        <div className="searchbar__results">
          {props.query.data.results.slice(0, props.limit).map((result) => {
            return (
              <span
                onClick={() => {
                  props.onSelect(result);
                  setShowResults(false);
                }}
                className="text-2xl"
              >
                {result.title} ({dayjs(result.release_date).format("YYYY")})
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
}
