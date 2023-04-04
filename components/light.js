import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Light({ children }) {
  const path = usePathname();

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        animate={
          path.includes("/projects/") ? { opacity: 0 } : { opacity: 0.4 }
        }
        initial={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        key="page__light"
        className="page__light"
      ></motion.div>
      <div>{children}</div>
    </>
  );
}
