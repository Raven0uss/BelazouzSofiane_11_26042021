import React from "react";

const getFirstIndex = (images) => {
  if (
    images === null ||
    images === undefined ||
    !Array.isArray(images) ||
    images.length === 0
  )
    return undefined;
  for (let index = 0; index < images.length; index++) {
    const image = images[index];
    if (typeof image !== "string") return undefined;
  }
  return 0;
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    const firstIndex = getFirstIndex(this.props.images);
    this.state = {
      index: firstIndex,
    };

    this.size = firstIndex === 0 ? this.props.images.length : 0;

    this.handleNextImage = this.handleNextImage.bind(this);
    this.handlePreviousImage = this.handlePreviousImage.bind(this);
  }

  handleNextImage() {
    if (this.state.index === this.size - 1) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
    }
  }

  handlePreviousImage() {
    if (this.state.index === 0) {
      this.setState({
        index: this.size - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  }

  render() {
    if (this.state.index === undefined) return null;
    return (
      <div
        className="carousel-wrapper"
        style={{
          backgroundImage: `url(${this.props.images[this.state.index]})`,
        }}
      >
        {this.size !== 1 && (
          <>
            <div
              className="carousel-previous"
              onClick={this.handlePreviousImage}
            />
            <div className="carousel-next" onClick={this.handleNextImage} />
            <div className="carousel-counter">
              {this.state.index + 1}/{this.size}
            </div>
          </>
        )}
      </div>
    );
  }
}

export default Carousel;
