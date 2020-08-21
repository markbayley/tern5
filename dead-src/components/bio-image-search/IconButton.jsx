import React from "react";

class IconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCardView: false,
    };
  }

  render() {
    const { isCardView } = this.state;
    return (
      <button
        className="outline"
        onClick={() => this.setState({ isCardView: !isCardView })}
        type="button"
      >
        {isCardView
          ? <img src="/img/unselected_circle.svg" width="40px" alt="" />
          : <img src="/img/quickview.svg" width="40px" alt="" />}

      </button>
    );
  }
}

export default IconButton;
