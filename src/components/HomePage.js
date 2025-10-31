import { motion } from "framer-motion";
import "../css/homepage.css";
const HomePage = () => {
  return (
    <div className="homepage">
      <motion.h2
        className="done-text"
        initial={{ y: "100vh", opacity: 0 }} // start from bottom, invisible
        animate={{ y: 0, opacity: 1 }} // move to top middle, visible
        transition={{ delay: 1.0, duration: 1, ease: "easeOut" }}
      >
        Welcome to AutoLab!
      </motion.h2>
    </div>
  );
};
export default HomePage;
