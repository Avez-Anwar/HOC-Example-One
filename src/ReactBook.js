import React from "react";
import Frame from "./FrameWork";

class ReactBook extends React.Component {
  state = {
    books: 0
  };

  handleClick = () => {
    this.setState({ books: this.state.books + 1 });
  };

  render() {
    return (
      <div>
        <h4 onMouseOver={this.handleClick}>
          React Books {this.props.HocFrameWork} : {this.state.books}
        </h4>
      </div>
    );
  }
}

export default Frame(ReactBook);
