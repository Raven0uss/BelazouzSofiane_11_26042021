import React from "react";
import starBlank from "../assets/images/star_blank.png";
import starFilled from "../assets/images/star_filled.png";

class Rating extends React.PureComponent {
  render() {
    const { rating } = this.props;
    const blankStars = 5 - rating;

    return (
      <div className="rating-container">
        {Array.from("*".repeat(rating)).map((_, index) => (
          <img
            src={starFilled}
            className="rating-star"
            alt="star-filled"
            key={`star-filled-${index}`}
          />
        ))}
        {Array.from("*".repeat(blankStars)).map((_, index) => (
          <img
            src={starBlank}
            className="rating-star"
            alt="star-blank"
            key={`star-filled-${index}`}
          />
        ))}
      </div>
    );
  }
}

export default Rating;
