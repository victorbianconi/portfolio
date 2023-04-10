import { motion } from "framer-motion";
import ImageContainer from "./ImageContainer";

export default function ProjectSection(props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="w-full flex flex-col align-center mb-12 mt-12"
    >
      <h3 className="mb-3 text-3xl font-bold">{props.title}</h3>
      <p className="mb-12 text-2xl">{props.description}</p>

      <ImageContainer src={props.imgSrc} alt={props.imgAlt}></ImageContainer>
    </motion.div>
  );
}
