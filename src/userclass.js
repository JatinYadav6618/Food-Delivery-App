import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="userdetail">
        <h1> "{this.props.name}"</h1>
        <div className="userlike">
          <h3>Likes👍: {this.state.count} </h3>
          <button
            onClick={() => {
              this.setState({ count: this.state.count + 1 });
            }}
          >
            👍
          </button>
        </div>
        <h4>Role: Software Developer</h4>
        <h4>Age: 23</h4>
        <h4>Location: {this.props.location}</h4>
      </div>
    );
  }
}

export default UserClass;
