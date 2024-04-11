import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

const ratingHandler = (rating: number) => {
  const initialStars = [];
  let i = rating;
  while (i > 0) {
    if (i >= 1) {
      initialStars.push(<FaStar />);
    } else if (i >= 0.5) {
      initialStars.push(<FaStarHalfAlt />);
    }
    i--;
  }
  while (initialStars.length < 5) {
    initialStars.push(<FaRegStar />);
  }
  return initialStars;
};

export default ratingHandler;
