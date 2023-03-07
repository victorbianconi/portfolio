import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function Light({ children }) {
  return (
    <>
      <div className="page__light"></div>
      <div>{children}</div>
    </>
  );
}
