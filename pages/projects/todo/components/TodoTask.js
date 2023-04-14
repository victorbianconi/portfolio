import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { AnimatePresence, motion } from "framer-motion";

export default function TodoTask(props) {
  dayjs.extend(relativeTime);
  return (
    <motion.div
      layout
      onClick={() => {
        if (props.onClick) props.onClick();
      }}
      animate={{ scale: 1, opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ scale: 0.8, opacity: 0 }}
      transition={{ type: "spring" }}
      key={"completed_" + props.value}
      className="todo-task align-center mobile:flex-col mobile:align-start"
    >
      <motion.span key={props.value + "-span"} className="text-2xl font-medium">
        {props.value}
      </motion.span>
      <span className="text-xl ml-5 font-medium text-grey-500 select-none mobile:ml-0 mobile:mt-2">
        {dayjs(props.date).fromNow()}
      </span>
      {props.canComplete && (
        <AnimatePresence mode="wait">
          {!props.isCompleted && (
            <motion.button
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 5 }}
              key={props.value + "--complete"}
              onClick={() => {
                const adjusted = [...props.tasks];
                const clickedTask = adjusted.find(
                  (t) => t.value === props.value
                );
                clickedTask.isCompleted = true;
                props.setHasSaved();
                props.setTasks(adjusted);
              }}
              className="text-xl ml-5 font-medium text-gold-500 select-none mobile:ml-0 mobile:mt-3 mobile:text-left"
            >
              Mark as completed
            </motion.button>
          )}{" "}
          {props.isCompleted && (
            <motion.span
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 5 }}
              key={props.value + "--completed"}
              className="text-xl ml-5 font-medium text-gold-700 select-none  mobile:ml-0 mobile:mt-3 mobile:text-left"
            >
              Completed
            </motion.span>
          )}
        </AnimatePresence>
      )}
    </motion.div>
  );
}
