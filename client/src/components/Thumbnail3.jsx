import React from "react";

// TODO: Render proper image based on product ID

class ThumbnailThree extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      active: !state.active
    }));
  }

  render() {
    return (
      <div>
        Thumbnail 3
        <img
          style={size}
          src={"https://front-end-capstone-project.s3.amazonaws.com/112378.jpg"}
          alt="stuff3"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}

const size = {
  width: "200px"
};

export default ThumbnailThree;
