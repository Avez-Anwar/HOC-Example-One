import React from "react";
import Frame from "./FrameWork";

class JavaBook extends React.Component {
  state = {
    Books: 0
  };

  handleClick = () => {
    this.setState({ Books: this.state.Books + 1 });
  };
  render() {
    return (
      <div>
        <h4 onMouseOver={this.handleClick}>
          Java Books {this.props.HocFrameWork} :{this.state.Books}
        </h4>
      </div>
    );
  }
}

export default Frame(JavaBook);
