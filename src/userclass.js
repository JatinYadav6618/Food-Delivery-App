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
        <h1>UserName: {this.props.name}</h1>
        <h3>Role: Software Developer</h3>
        <h3>Age: 23</h3>
        <h3>Location: {this.props.location}</h3>
      </div>
    );
  }
}

export default UserClass;
