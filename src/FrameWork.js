import React from "react";

const Frame = (Study) => {
  class NewStudy extends React.Component {
    render() {
      return (
        <div>
          <Study HocFrameWork="Spring" />
        </div>
      );
    }
  }
  return NewStudy;
};

export default Frame;
