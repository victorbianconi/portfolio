import Searchbar from "@/components/Searchbar";

import { AnimatePresence, motion } from "framer-motion";
import Head from "next/head";
import { useEffect, useState } from "react";
import TodoTask from "./components/TodoTask";

export default function ToDoIndex() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [hasSaved, setHasSaved] = useState();
  const [hasStored, setHasStored] = useState();


  const saveTasks = () => {
    setHasSaved(true);
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  };

  const removeTasksFromDevice = () => {
    setHasStored();
    setTasks([]);
    localStorage.removeItem("todo-tasks");
  };

  const removeTask = (t) => {
    setTasks(tasks.filter((task) => task.value !== t));
  };

  useEffect(() => {
    const existingTasks = localStorage.getItem("todo-tasks");
    if (existingTasks && JSON.parse(existingTasks)) {
      setTasks(JSON.parse(existingTasks));
      setHasStored(true);
    }
  }, []);

  return (
    <>
      <Head>
        <title>To-Do List | Victor Bianconi</title>
        <meta name="description" content="To-Do List.." />
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
              className="w-full justify-center flex mb-6"
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                width="159"
                height="35"
                viewBox="0 0 107 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.792 18.168C5.384 18.168 4.296 17.808 3.528 17.088C2.76 16.352 2.376 15.272 2.376 13.848V2.352H5.376V13.776C5.376 14.384 5.528 14.856 5.832 15.192C6.152 15.528 6.592 15.696 7.152 15.696C7.824 15.696 8.384 15.52 8.832 15.168L9.672 17.304C9.32 17.592 8.888 17.808 8.376 17.952C7.864 18.096 7.336 18.168 6.792 18.168ZM0.264 7.68V5.28H8.808V7.68H0.264ZM17.478 18.168C16.166 18.168 14.998 17.888 13.974 17.328C12.95 16.752 12.142 15.968 11.55 14.976C10.958 13.984 10.662 12.856 10.662 11.592C10.662 10.312 10.958 9.184 11.55 8.208C12.142 7.216 12.95 6.44 13.974 5.88C14.998 5.32 16.166 5.04 17.478 5.04C18.806 5.04 19.982 5.32 21.006 5.88C22.046 6.44 22.854 7.208 23.43 8.184C24.022 9.16 24.318 10.296 24.318 11.592C24.318 12.856 24.022 13.984 23.43 14.976C22.854 15.968 22.046 16.752 21.006 17.328C19.982 17.888 18.806 18.168 17.478 18.168ZM17.478 15.6C18.214 15.6 18.87 15.44 19.446 15.12C20.022 14.8 20.47 14.336 20.79 13.728C21.126 13.12 21.294 12.408 21.294 11.592C21.294 10.76 21.126 10.048 20.79 9.456C20.47 8.848 20.022 8.384 19.446 8.064C18.87 7.744 18.222 7.584 17.502 7.584C16.766 7.584 16.11 7.744 15.534 8.064C14.974 8.384 14.526 8.848 14.19 9.456C13.854 10.048 13.686 10.76 13.686 11.592C13.686 12.408 13.854 13.12 14.19 13.728C14.526 14.336 14.974 14.8 15.534 15.12C16.11 15.44 16.758 15.6 17.478 15.6ZM26.7731 12.576V10.08H33.3731V12.576H26.7731ZM42.3139 18.168C41.0819 18.168 39.9699 17.896 38.9779 17.352C38.0019 16.792 37.2339 16.024 36.6739 15.048C36.1139 14.072 35.8339 12.92 35.8339 11.592C35.8339 10.264 36.1139 9.112 36.6739 8.136C37.2339 7.16 38.0019 6.4 38.9779 5.856C39.9699 5.312 41.0819 5.04 42.3139 5.04C43.3859 5.04 44.3459 5.28 45.1939 5.76C46.0419 6.224 46.7139 6.936 47.2099 7.896C47.7059 8.856 47.9539 10.088 47.9539 11.592C47.9539 13.08 47.7139 14.312 47.2339 15.288C46.7539 16.248 46.0899 16.968 45.2419 17.448C44.3939 17.928 43.4179 18.168 42.3139 18.168ZM42.6739 15.6C43.3939 15.6 44.0339 15.44 44.5939 15.12C45.1699 14.8 45.6259 14.336 45.9619 13.728C46.3139 13.12 46.4899 12.408 46.4899 11.592C46.4899 10.76 46.3139 10.048 45.9619 9.456C45.6259 8.848 45.1699 8.384 44.5939 8.064C44.0339 7.744 43.3939 7.584 42.6739 7.584C41.9539 7.584 41.3059 7.744 40.7299 8.064C40.1699 8.384 39.7139 8.848 39.3619 9.456C39.0259 10.048 38.8579 10.76 38.8579 11.592C38.8579 12.408 39.0259 13.12 39.3619 13.728C39.7139 14.336 40.1699 14.8 40.7299 15.12C41.3059 15.44 41.9539 15.6 42.6739 15.6ZM46.5619 18V14.976L46.6819 11.568L46.4419 8.16V0.191999H49.4179V18H46.5619ZM59.1264 18.168C57.8144 18.168 56.6464 17.888 55.6224 17.328C54.5984 16.752 53.7904 15.968 53.1984 14.976C52.6064 13.984 52.3104 12.856 52.3104 11.592C52.3104 10.312 52.6064 9.184 53.1984 8.208C53.7904 7.216 54.5984 6.44 55.6224 5.88C56.6464 5.32 57.8144 5.04 59.1264 5.04C60.4544 5.04 61.6304 5.32 62.6544 5.88C63.6944 6.44 64.5024 7.208 65.0784 8.184C65.6704 9.16 65.9664 10.296 65.9664 11.592C65.9664 12.856 65.6704 13.984 65.0784 14.976C64.5024 15.968 63.6944 16.752 62.6544 17.328C61.6304 17.888 60.4544 18.168 59.1264 18.168ZM59.1264 15.6C59.8624 15.6 60.5184 15.44 61.0944 15.12C61.6704 14.8 62.1184 14.336 62.4384 13.728C62.7744 13.12 62.9424 12.408 62.9424 11.592C62.9424 10.76 62.7744 10.048 62.4384 9.456C62.1184 8.848 61.6704 8.384 61.0944 8.064C60.5184 7.744 59.8704 7.584 59.1504 7.584C58.4144 7.584 57.7584 7.744 57.1824 8.064C56.6224 8.384 56.1744 8.848 55.8384 9.456C55.5024 10.048 55.3344 10.76 55.3344 11.592C55.3344 12.408 55.5024 13.12 55.8384 13.728C56.1744 14.336 56.6224 14.8 57.1824 15.12C57.7584 15.44 58.4064 15.6 59.1264 15.6ZM75.5244 18V0.191999H77.2284V18H75.5244ZM81.9698 18V5.4H83.6738V18H81.9698ZM82.8338 2.616C82.4818 2.616 82.1858 2.496 81.9458 2.256C81.7058 2.016 81.5858 1.728 81.5858 1.392C81.5858 1.056 81.7058 0.775999 81.9458 0.551999C82.1858 0.311999 82.4818 0.191999 82.8338 0.191999C83.1858 0.191999 83.4818 0.303999 83.7218 0.527999C83.9618 0.751999 84.0818 1.032 84.0818 1.368C84.0818 1.72 83.9618 2.016 83.7218 2.256C83.4978 2.496 83.2018 2.616 82.8338 2.616ZM91.7991 18.12C90.7591 18.12 89.7751 17.976 88.8471 17.688C87.9191 17.384 87.1911 17.008 86.6631 16.56L87.4311 15.216C87.9431 15.6 88.5991 15.936 89.3991 16.224C90.1991 16.496 91.0391 16.632 91.9191 16.632C93.1191 16.632 93.9831 16.448 94.5111 16.08C95.0391 15.696 95.3031 15.192 95.3031 14.568C95.3031 14.104 95.1511 13.744 94.8471 13.488C94.5591 13.216 94.1751 13.016 93.6951 12.888C93.2151 12.744 92.6791 12.624 92.0871 12.528C91.4951 12.432 90.9031 12.32 90.3111 12.192C89.7351 12.064 89.2071 11.88 88.7271 11.64C88.2471 11.384 87.8551 11.04 87.5511 10.608C87.2631 10.176 87.1191 9.6 87.1191 8.88C87.1191 8.192 87.3111 7.576 87.6951 7.032C88.0791 6.488 88.6391 6.064 89.3751 5.76C90.1271 5.44 91.0391 5.28 92.1111 5.28C92.9271 5.28 93.7431 5.392 94.5591 5.616C95.3751 5.824 96.0471 6.104 96.5751 6.456L95.8311 7.824C95.2711 7.44 94.6711 7.168 94.0311 7.008C93.3911 6.832 92.7511 6.744 92.1111 6.744C90.9751 6.744 90.1351 6.944 89.5911 7.344C89.0631 7.728 88.7991 8.224 88.7991 8.832C88.7991 9.312 88.9431 9.688 89.2311 9.96C89.5351 10.232 89.9271 10.448 90.4071 10.608C90.9031 10.752 91.4391 10.872 92.0151 10.968C92.6071 11.064 93.1911 11.184 93.7671 11.328C94.3591 11.456 94.8951 11.64 95.3751 11.88C95.8711 12.104 96.2631 12.432 96.5511 12.864C96.8551 13.28 97.0071 13.832 97.0071 14.52C97.0071 15.256 96.7991 15.896 96.3831 16.44C95.9831 16.968 95.3911 17.384 94.6071 17.688C93.8391 17.976 92.9031 18.12 91.7991 18.12ZM104.118 18.12C102.934 18.12 102.022 17.8 101.382 17.16C100.742 16.52 100.422 15.616 100.422 14.448V2.616H102.126V14.352C102.126 15.088 102.31 15.656 102.678 16.056C103.062 16.456 103.606 16.656 104.31 16.656C105.062 16.656 105.686 16.44 106.182 16.008L106.782 17.232C106.446 17.536 106.038 17.76 105.558 17.904C105.094 18.048 104.614 18.12 104.118 18.12ZM98.1658 6.816V5.4H105.966V6.816H98.1658Z"
                  fill="white"
                />
              </svg>
            </motion.div>
            <p className="select-none text-grey-500 text-2xl font-medium mb-12 text-center">
              Yes, nothing crazy. Took me around 4 hours.
            </p>
            <h2 className="text-4xl font-medium w-full text-center select-none">
              Add or remove tasks
            </h2>
            <Searchbar
              classNames="mt-11"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              onEnter={(e) => {
                setTask("");
                setTasks([
                  ...tasks,
                  {
                    date: new Date(),
                    value: e.target.value,
                    isCompleted: false,
                  },
                ]);
                setHasSaved();

                e.target.value = "";
              }}
              placeholder="Insert the task"
            ></Searchbar>{" "}
            <span className="text-grey-500 select-none mt-8 searchbar__enter text-2xl font-medium text-center">
              Press enter on your keyboard to add a new task
            </span>
            <motion.div
              className="w-full flex flex-col"
              layout
              key="todo-task__tasks-wrapper"
              animate={{ height: "auto" }}
            >
              {" "}
              {tasks.length > 0 && (
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  exit={{ opacity: 0 }}
                  key="todo-task__divider"
                  className="todo-task__divider divider"
                ></motion.div>
              )}
              <motion.div
                layout="position"
                key="todo-task__buttons"
                className="flex w-full mt-7 mb-3"
              >
                <AnimatePresence>
                  {tasks.length > 0 && (
                    <motion.button
                      key="save-to-local"
                      onClick={saveTasks}
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mr-5 btn btn--primary text-xl"
                    >
                      {hasSaved ? "Saved" : "Save to local storage"}
                    </motion.button>
                  )}
                  {tasks.length > 0 && (
                    <motion.button
                      key="save-to-local"
                      exit={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="btn btn--secondary text-xl"
                      onClick={removeTasksFromDevice}
                    >
                      Remove all
                    </motion.button>
                  )}
                </AnimatePresence>
              </motion.div>
              <AnimatePresence>
                {tasks.filter((t) => t.isCompleted).length > 0 && (
                  <motion.ul
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                    key="todo-task__wrapper-completed"
                    className="todo-task__wrapper"
                  >
                    <motion.h3
                      layout="position"
                      key="todo-task__wrapper-title-completed"
                      className="text-3xl mb-8 font-medium"
                    >
                      Completed
                    </motion.h3>
                    <AnimatePresence mode="popLayout">
                      {tasks
                        .filter((t) => t.isCompleted)
                        .map((task) => {
                          return (
                            <TodoTask
                              value={task.value}
                              date={task.date}
                              isCompleted={task.isCompleted}
                            ></TodoTask>
                          );
                        })}
                    </AnimatePresence>
                  </motion.ul>
                )}

                {tasks.length > 0 && (
                  <motion.ul
                    transition={{ duration: 0.2 }}
                    exit={{ opacity: 0 }}
                    key="todo-task__wrapper-all"
                    className="todo-task__wrapper"
                  >
                    <motion.h3
                      layout="position"
                      key="todo-task__wrapper-title-completed"
                      className="text-3xl mb-8 font-medium"
                    >
                      All
                    </motion.h3>{" "}
                    <AnimatePresence mode="popLayout">
                      {tasks.map((task) => {
                        return (
                          <TodoTask
                            value={task.value}
                            date={task.date}
                            isCompleted={task.isCompleted}
                            canComplete
                            setHasSaved={setHasSaved}
                            tasks={tasks}
                            setTasks={setTasks}
                          ></TodoTask>
                        );
                      })}
                    </AnimatePresence>
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </>
  );
}
